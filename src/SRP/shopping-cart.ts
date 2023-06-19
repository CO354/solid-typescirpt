type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

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

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho estavazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total ${this.total()}  foi recebido`);
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de compra foi limpo');
    this._items.length = 0;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  get qtd(): number {
    return this._items.length;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Camisate', price: 12 });
shoppingCart.addItem({ name: 'Lapis', price: 12 });
shoppingCart.addItem({ name: 'Caderno', price: 12 });

console.log(shoppingCart.item);
console.log(shoppingCart.orderStatus);
console.log(`Quantidade de produtos `, shoppingCart.qtd);
console.log(`Valor Total de Produtos `, shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
