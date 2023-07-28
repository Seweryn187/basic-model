export class AddItem {
  public static readonly type = '[Example] Add item';
  constructor(public item: string) {}
}

export class RemoveItem {
  public static readonly type = '[Example] Remove item';
  constructor() {}
}

export class UpdateItem {
  public static readonly type = '[Example] Update item';
  constructor(
    public index: number,
    public item: string,
  ) {}
}
