import { OrderStatus } from './interfaces/orderStatus';
import { Messaging } from '../services/messaging';
import { SaveOrder } from '../services/saveOrder';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './customer-protocolo';

export class Order {
  private _orderStatus: OrderStatus = 'open'; //supeitando
  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Messaging,
    private readonly saveOrder: SaveOrder,
    private readonly customer: CustomerOrder,
  ) {}

  // considerado como uma propriedade que nao deve estar aqui
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
  // deveria sair
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho estavazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total ${this.cart.totalWithDiscount()}  foi recebido`,
    );
    this.saveOrder.saveOrder();
    this.cart.clear();
    console.log(
      'o cliente é: ' + this.customer.geIDN(),
      this.customer.getName(),
    );
  }
}
