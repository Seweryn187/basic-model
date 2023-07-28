import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ExampleSelectors } from '../../_store/example.selectors';
import { AddItem, RemoveItem } from '../../_store/example.actions';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'basic-show-store',
  templateUrl: './show-store.component.html',
  styleUrls: ['./show-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowStoreComponent {
  @Select(ExampleSelectors.getItems) public items$!: Observable<any>;

  public newItem: FormControl = new FormControl('');

  constructor(private store: Store) {}

  public addNewItem(): void {
    this.store.dispatch(new AddItem(this.newItem.getRawValue()));
  }

  public removeLastItem(): void {
    this.store.dispatch(new RemoveItem());
  }
}
