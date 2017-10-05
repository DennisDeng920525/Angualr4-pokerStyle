import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './display/flex/flex.component';
import { BaseModule } from '../base/base.module';
import { TooltipModule, TabsModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  // suppressScrollX: true
};

@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    CommonModule,
    BaseModule
  ],
  exports: [
    FlexComponent
],
})
export class StyleDemoModule { }
