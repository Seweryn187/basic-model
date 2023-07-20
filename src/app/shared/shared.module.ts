import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ngZorroModules } from '../design-modules';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngZorroModules
  ]
})
export class SharedModule { }
