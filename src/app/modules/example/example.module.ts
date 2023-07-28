import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowStoreComponent } from './components/show-store/show-store.component';
import { NgxsModule } from '@ngxs/store';
import { ExampleState } from './_store/example.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowStoreComponent],
  imports: [CommonModule, NgxsModule.forFeature([ExampleState]), ReactiveFormsModule, FormsModule],
  exports: [ShowStoreComponent],
})
export class ExampleModule {}
