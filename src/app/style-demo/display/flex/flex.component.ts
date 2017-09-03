import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../common/helper';
import { Poker } from '../../../common/model/poker';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  public boxs: Array<Poker>;

  public properties = [
    { name: 'flex-direction属性', field: 'flex-direction', values: ['row', 'row-reverse', 'column', 'column-reverse'] },
    { name: 'flex-wrap属性', field: 'flex-wrap', values: ['nowrap', 'wrap', 'wrap-reverse'] },
    { name: 'flex-flow属性', field: 'flex-flow', values: ['row nowrap'] },
    { name: 'justify-content属性', field: 'justify-content', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'] },
    { name: 'align-itemsn属性', field: 'align-items', values: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] },
    // tslint:disable-next-line:max-line-length
    { name: 'align-content属性', field: 'align-content', values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'] }
  ];

  public currentStyle = {
    'flex-direction': '',
    'flex-wrap': '',
    'flex-flow': '',
    'justify-content': '',
    'align-itemsn': '',
    'align-content': ''
  };

  constructor() { }

  ngOnInit() {
    this.boxs = Helper.getPoker(0);
  }

  addBoxItem(e) {
    this.boxs.push(Helper.getPoker(1)[0]);
  }

  changeProperty(field, value) {
    this.currentStyle[field] = value;
  }

  clearProperty(field, value) {
    this.currentStyle[field] = '';
  }
}
