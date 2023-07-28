import { State, Action, StateContext } from '@ngxs/store';
import { AddItem, RemoveItem, UpdateItem } from './example.actions';
import { Injectable } from '@angular/core';

export interface IExampleStateModel {
  items: string[];
}

@Injectable()
@State<IExampleStateModel>({
  name: 'example',
  defaults: {
    items: ['example 1', 'example 2', 'example 3'],
  },
})
export class ExampleState {
  @Action(AddItem)
  public add(ctx: StateContext<IExampleStateModel>, { item }: AddItem): void {
    const stateModel = ctx.getState();
    const newItems = [...stateModel.items, item];
    ctx.patchState({ items: newItems });
  }

  @Action(RemoveItem)
  public remove(ctx: StateContext<IExampleStateModel>): void {
    const stateModel = ctx.getState();
    const newItems = [...stateModel.items];
    newItems.pop();
    ctx.patchState({ items: newItems });
  }

  @Action(UpdateItem)
  public update(ctx: StateContext<IExampleStateModel>, { index, item }: UpdateItem): void {
    const stateModel = ctx.getState();
    const updatedItems = [...stateModel.items];
    updatedItems[index] = item;
    ctx.patchState({ items: updatedItems });
  }
}
