import { Selector } from '@ngxs/store';
import { ExampleState, IExampleStateModel } from './example.state';

export class ExampleSelectors {
  @Selector([ExampleState])
  public static getItems(state: IExampleStateModel): string[] {
    return state.items;
  }

  @Selector([ExampleState])
  public static getIndexOfLastElement(state: IExampleStateModel): number {
    return state.items.length;
  }
}
