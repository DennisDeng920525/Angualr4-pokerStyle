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
        { text: 'row', isActive: false, tooltip: '（默认值）主轴为水平方向，起点在左端' },
        { text: 'row-reverse', isActive: false, tooltip: '主轴为水平方向，起点在右端' },
        { text: 'column', isActive: false, tooltip: '主轴为垂直方向，起点在上沿' },
        { text: 'column-reverse', isActive: false, tooltip: '主轴为垂直方向，起点在下沿' }],
      introduce: 'flex-direction属性决定主轴的方向（即项目的排列方向）。',
      showIntroduce: false
    },
    {
      name: 'flex-wrap属性',
      field: 'flex-wrap',
      values: [
        { text: 'nowrap', isActive: false, tooltip: '不换行' },
        { text: 'wrap', isActive: false, tooltip: '换行，第一行在上方' },
        { text: 'wrap-reverse', isActive: false, tooltip: '换行，第一行在下方' }],
      introduce: '默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。',
      showIntroduce: false
    },
    {
      name: 'flex-flow属性',
      field: 'flex-flow',
      values: [
        { text: 'row nowrap', isActive: false, tooltip: '' }],
      introduce: 'flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。',
      showIntroduce: false
    },
    {
      name: 'justify-content属性',
      field: 'justify-content',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '（默认值）左对齐' },
        { text: 'flex-end', isActive: false, tooltip: '右对齐' },
        { text: 'center', isActive: false, tooltip: '居中' },
        { text: 'space-between', isActive: false, tooltip: '两端对齐，项目之间的间隔都相等' },
        { text: 'space-around', isActive: false, tooltip: '每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍' }],
      introduce: 'justify-content属性定义了项目在主轴上的对齐方式。',
      showIntroduce: false
    },
    {
      name: 'align-itemsn属性',
      field: 'align-items',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '交叉轴的起点对齐' },
        { text: 'flex-end', isActive: false, tooltip: '交叉轴的终点对齐' },
        { text: 'center', isActive: false, tooltip: '交叉轴的中点对齐' },
        { text: 'baseline', isActive: false, tooltip: '项目的第一行文字的基线对齐' },
        { text: 'stretch', isActive: false, tooltip: '（默认值）如果项目未设置高度或设为auto，将占满整个容器的高度' }],
      introduce: 'align-items属性定义项目在交叉轴上如何对齐。',
      showIntroduce: false
    },
    {
      name: 'align-content属性',
      field: 'align-content',
      values: [
        { text: 'flex-start', isActive: false, tooltip: '与交叉轴的起点对齐' },
        { text: 'flex-end', isActive: false, tooltip: '与交叉轴的终点对齐' },
        { text: 'center', isActive: false, tooltip: '与交叉轴的中点对齐' },
        { text: 'space-between', isActive: false, tooltip: '与交叉轴两端对齐，轴线之间的间隔平均分布' },
        { text: 'space-around', isActive: false, tooltip: '每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍' },
        { text: 'stretch', isActive: false, tooltip: '（默认值）轴线占满整个交叉轴' }],
      introduce: 'align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。',
      showIntroduce: false
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

  switchIntroduce(property) {
    property.showIntroduce = !property.showIntroduce;
  }
}
