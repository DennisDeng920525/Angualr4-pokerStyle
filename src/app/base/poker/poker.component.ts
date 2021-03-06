import { Component, OnInit, Input } from '@angular/core';
import { Poker } from '../../common/model/poker';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})
export class PokerComponent implements OnInit {

  @Input() poker: Poker;
  public isBack = true;

  constructor() { }

  ngOnInit() {
  }

  switch(e) {
    this.isBack = !this.isBack;
  }
}
