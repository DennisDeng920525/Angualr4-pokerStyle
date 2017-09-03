import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokerComponent } from './poker/poker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokerComponent],
  exports: [
    PokerComponent
  ]
})
export class BaseModule { }
