import { AfterViewInit, Directive, OnDestroy, OnInit } from '@angular/core';
import { Subject, OperatorFunction, takeUntil } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnInit, AfterViewInit, OnDestroy {
  protected readonly destroyed: Subject<void>;

  constructor() {
    this.destroyed = new Subject<void>();
  }

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {}

  public ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.unsubscribe();
  }

  public untilDestroyed<T>(): OperatorFunction<T, T> {
    return takeUntil(this.destroyed);
  }
}
