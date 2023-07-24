import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponentDirective } from './directives/base-component.directive';



@NgModule({
  declarations: [
    BaseComponentDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
