import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ExampleState, ExampleStateModel } from './example.state';
import { ExampleAction } from './example.actions';

describe('Example store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ExampleState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ExampleStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ExampleAction('item-1'));
    const actual = store.selectSnapshot(ExampleState.getState);
    expect(actual).toEqual(expected);
  });

});
