import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './display/flex/flex.component';
import { BaseModule } from '../base/base.module';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    CommonModule,
    BaseModule
  ],
  exports: [
    FlexComponent
],
})
export class StyleDemoModule { }
