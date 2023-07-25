import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';

@NgModule({
  declarations: [ThemeSwitchComponent],
  imports: [CommonModule],
  exports: [ThemeSwitchComponent],
})
export class CoreModule {}
