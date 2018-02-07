import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  data = [{
    agentOid: '123343wawd',
    agentName: 'Test 1',
    agentId: '1300',
    actualBiddingOrder: 1,
    pointsEarned: 10,
    newBiddingOrder: 2,
    difference: (2 - 1)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 2',
    agentId: '12000',
    actualBiddingOrder: 2,
    pointsEarned: 5,
    newBiddingOrder: 3,
    difference: (3 - 2)
  }, {
    agentOid: '123343wawd',
    agentName: 'Test 3',
    agentId: '12001',
    actualBiddingOrder: 3,
    pointsEarned: 5,
    newBiddingOrder: 2,
    difference: (2 - 3)
  }];

  displayedColumns = [
    'agentId',
    'agentName',
    'actualBiddingOrder',
    'pointsEarned',
    'newBiddingOrder'
  ];

  isLoading = true;

  ngOnInit() {
  }

}
