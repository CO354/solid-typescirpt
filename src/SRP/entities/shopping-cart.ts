import { CartItem } from './interfaces/shopping-cartesItem';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get item(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((idx, value) => idx + value.price, 0).toFixed(2);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compra foi limpo');
    this._items.length = 0;
  }
}
