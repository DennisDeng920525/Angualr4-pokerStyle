import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './display/flex/flex.component';
import { BaseModule } from '../base/base.module';

@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    CommonModule,
    BaseModule
  ],
  exports: [
    FlexComponent
],
})
export class StyleDemoModule { }
