import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './display/flex/flex.component';

@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexComponent
],
})
export class StyleDemoModule { }
