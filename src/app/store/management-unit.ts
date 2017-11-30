import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/publishReplay';

import {NiceDataService} from '../services';
import {HttpEvent, HttpEventType} from '@angular/common/http';

export class ManagementUnitModel {
  constructor() {}
}

@Injectable()
export class ManagementUnit {
  // A stream that publishes new MU only once
  newItem: Subject<ManagementUnitModel> = new Subject<ManagementUnitModel>();
  // A list of managment units updated from the back-end data
  items: Observable<ManagementUnitModel[]>;
  // A function performs changes on all items
  updates: Subject<any> = new Subject<any>();

  // Adds a new list of management unit
  addItem: Subject<ManagementUnitModel> = new Subject<ManagementUnitModel>();

  constructor (private dataService: NiceDataService) {
    // Hooks the addItem operation stream to the newItem stream which is used for adding new item to the list
    this.newItem.subscribe(this.addItem);
    this.items = this.updates.scan((items: ManagementUnitModel[], operation: Function ) => {
      return operation(items);
    }, [])
      // make sure we can share the most recent list of management unit across anyone
      // who's interested in subscribing and cache the last known list of management unit
      .publishReplay(1)
      .refCount();

    this.addItem.map((newUnit: ManagementUnitModel) => {
      return (items: ManagementUnitModel[]) => {
        return items.concat(newUnit);
      };
    }).subscribe(this.updates);
  }

  addManagumentUnit(newMU: ManagementUnitModel) {
    this.newItem.next(newMU);
  }

  // getAllWithEvents(): Observable<HttpEvent<any>> {
  //   return this.dataService.ManagementUnits;
  // }

  getAll(): void {
    this.dataService.ManagementUnits.subscribe((event: HttpEvent<{}>) => {
      if (event.type === HttpEventType.Response) {
        const data: Array<{}> = <Array<{}>> event.body;
        data.forEach((newItem) => {
          this.addManagumentUnit(newItem);
        });
      }
      // console.log(event);
    });
  }
}
