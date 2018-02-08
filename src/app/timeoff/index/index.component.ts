import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource, MatButtonToggleGroup, MatButtonToggle} from "@angular/material";
import {NgRedux} from "@angular-redux/store";
import {IAppState} from "../../store/models";
import {Observable} from "rxjs/Observable";
import {StoreActions} from "../../store/app.action";
import {AfterBiddingData, BeforeBiddingData} from "../../shared/data";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<any>;

  doApplyGamify = false;

  displayedColumns = [
    'agentId',
    'agentName',
    'actualBiddingOrder',
    'biddingTime',
    'newBiddingOrder',
    'difference'
  ];

  isLoading = true;

  protected timeOffBiddingList$: Observable<any[]>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatButtonToggleGroup) buttonGroup: MatButtonToggleGroup;
  @ViewChild('afterButton') afterButton: MatButtonToggle;
  @ViewChild('beforeButton') beforeButton: MatButtonToggle;

  static sortAscendingByNewBiddingOrder(agentA: any, agentB: any) {
    if (agentA.hasOwnProperty('newBiddingOrder') && agentB.hasOwnProperty('newBiddingOrder')) {
      return agentA.newBiddingOrder - agentB.newBiddingOrder;
    }
    return null;
  }

  static sortAscendingByPreviousBiddingOrder(agentA: any, agentB: any) {
    if (agentA.hasOwnProperty('actualBiddingOrder') && agentB.hasOwnProperty('actualBiddingOrder')) {
      return agentA.actualBiddingOrder - agentB.actualBiddingOrder;
    }
    return null;
  }

  static calculateOrderChange(agent) {
    if (agent.hasOwnProperty('actualBiddingOrder') && agent.hasOwnProperty('newBiddingOrder')) {
      agent.difference = agent.newBiddingOrder - agent.actualBiddingOrder;
    }
    else {
      agent.difference = null;
    }
    return agent;
  }

  constructor(private ngRedux: NgRedux<IAppState>, appAction: StoreActions) {}

  ngOnInit() {
    this.showDataBeforeGamification();
    // Shows before data as default
    this.buttonGroup.selected = this.beforeButton;
  }

  updateDataSource(data: any[]) {
    const newData = data.map(IndexComponent.calculateOrderChange);
    this.dataSource = new MatTableDataSource<any>(newData.sort(IndexComponent.sortAscendingByPreviousBiddingOrder));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  showDataBeforeGamification() {
    this.doApplyGamify = false;
    this.updateDataSource(BeforeBiddingData);
  }

  showDataAfterGamification() {
    this.doApplyGamify = true;
    this.updateDataSource(AfterBiddingData);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  switchDataSource(event) {
    if (event.value === 'after') {
      this.showDataAfterGamification();
    }
    else {
      this.showDataBeforeGamification();
    }
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.showDataBeforeGamification();
    this.isLoading = false;
  }
}
