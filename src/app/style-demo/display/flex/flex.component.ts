import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../common/helper';
import { Poker } from '../../../common/model/poker';
import * as _ from 'lodash';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  public boxs: Array<Poker>;

  public properties = [
    {
      name: 'flex-direction属性',
      field: 'flex-direction',
      values: [
        { text: 'row', isActive: false, tooltip: '' },
        { text: 'row-revers', isActive: false, tooltip: '' },
        { text: 'column', isActive: false, tooltip: '' },
        { text: 'column-revers', isActive: false, tooltip: '' }],
      tooltip: 'flex-direction属性决定主轴的方向（即项目的排列方向）。'
    },
    {
      name: 'flex-wrap属性',
      field: 'flex-wrap',
      values: [
        { text: 'nowrap', isActive: false, tooltip: '123' },
        { text: 'wrap', isActive: false, tooltip: '' },
        { text: 'wrap-revers', isActive: false, tooltip: '' }],
      tooltip: '默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。'
    },
    {
      name: 'flex-flow属性',
      field: 'flex-flow',
      values: [
        { text: 'row nowrap', isActive: false, tooltip: '' }],
      tooltip: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。'
    },
    {
      name: 'justify-content属性',
      field: 'justify-content',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '' },
        { text: 'flex-end', isActive: false, tooltip: '' },
        { text: 'center', isActive: false, tooltip: '' },
        { text: 'space-between', isActive: false, tooltip: '' },
        { text: 'space-around', isActive: false, tooltip: '' }],
      tooltip: 'justify-content属性定义了项目在主轴上的对齐方式。'
    },
    {
      name: 'align-itemsn属性',
      field: 'align-items',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '' },
        { text: 'flex-end', isActive: false, tooltip: '' },
        { text: 'center', isActive: false, tooltip: '' },
        { text: 'baseline', isActive: false, tooltip: '' },
        { text: 'stretch', isActive: false, tooltip: '' }],
      tooltip: 'align-items属性定义项目在交叉轴上如何对齐。'
    },
    {
      name: 'align-content属性',
      field: 'align-content',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '' },
        { text: 'flex-end', isActive: false, tooltip: '' },
        { text: 'center', isActive: false, tooltip: '' },
        { text: 'space-between', isActive: false, tooltip: '' },
        { text: 'space-around', isActive: false, tooltip: '' },
        { text: 'stretch', isActive: false, tooltip: '' }],
      tooltip: 'align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。'
    }
  ];

  public currentStyle = {
    'flex-direction': '',
    'flex-wrap': '',
    'flex-flow': '',
    'justify-content': '',
    'align-itemsn': '',
    'align-content': ''
  };

  public styleWindow = [];
  constructor() { }

  ngOnInit() {
    this.boxs = Helper.getPoker(0);
  }

  addBoxItem(e) {
    this.boxs.push(Helper.getPoker(1)[0]);
  }

  changeProperty(field, values, value) {
    _.forEach(values, v => {
      if (v.text === value.text) {
        if (v.isActive) {
          this.currentStyle[field] = '';
        } else {
          this.currentStyle[field] = value.text;
        }
        v.isActive = !v.isActive;
      } else {
        v.isActive = false;
      }
    });

    this.changeStyleWindow();
  }

  clearProperty() {
    _.forEach(this.properties, p => {
      // v.isActive = false;
      _.forEach(p.values, v => {
        v.isActive = false;
      });
    });
    _.forEach(this.currentStyle, (style, index) => {
      this.currentStyle[index] = '';
    });
    this.changeStyleWindow();
  }

  changeStyleWindow() {
    this.styleWindow = [];
    _.forEach(this.currentStyle, (style, index) => {
      if (style !== '') {
        this.styleWindow.push({ field: index, value: style });
      }
    });
  }
}
