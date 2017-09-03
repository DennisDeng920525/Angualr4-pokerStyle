import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../common/helper';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  public boxs: any;

  constructor() { }

  ngOnInit() {
    this.boxs = Helper.getPoker(4);
  }

  addBoxItem(e) {
    this.boxs.push(Helper.getPoker(1)[0]);
  }
}
