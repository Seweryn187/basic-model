import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageButtonComponent } from './components/language-button/language-button.component';



@NgModule({
  declarations: [
    LanguageButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LanguageButtonComponent
  ]
})
export class CoreModule { }
