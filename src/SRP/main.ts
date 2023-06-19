import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Product } from './entities/product';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder);

shoppingCart.addItem(new Product('Camisa', 12));
shoppingCart.addItem(new Product('Caderno', 21));
shoppingCart.addItem(new Product('Lapis', 27));

console.log(shoppingCart.item);
console.log(order.orderStatus);

console.log(`Valor Total de Produtos `, shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
