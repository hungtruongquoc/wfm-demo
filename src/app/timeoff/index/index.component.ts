import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, AfterViewInit {

  constructor() {
    this.data.sort(IndexComponent.sortAscendingByNewBiddingOrder);
    this.dataSource = new MatTableDataSource(this.data);
  }

  dataSource: MatTableDataSource<any>;

  data = [{
    agentOid: '123343wawd',
    agentName: 'Test 1',
    agentId: '1300',
    actualBiddingOrder: 1,
    timeTaken: 10,
    newBiddingOrder: 2,
    difference: (2 - 1)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 2',
    agentId: '12000',
    actualBiddingOrder: 2,
    timeTaken: 5,
    newBiddingOrder: 3,
    difference: (3 - 2)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 1',
    agentId: '1300',
    actualBiddingOrder: 1,
    timeTaken: 10,
    newBiddingOrder: 2,
    difference: (2 - 1)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 2',
    agentId: '12000',
    actualBiddingOrder: 2,
    timeTaken: 5,
    newBiddingOrder: 3,
    difference: (3 - 2)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    timeTaken: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }];

  displayedColumns = [
    'agentId',
    'agentName',
    'newBiddingOrder',
    'timeTaken',
    'actualBiddingOrder',
    'difference'
  ];

  isLoading = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  static sortAscendingByNewBiddingOrder(agentA: any, agentB: any) {
    return agentA.newBiddingOrder - agentB.newBiddingOrder;
  }

}
