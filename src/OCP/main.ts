import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercenceDiscount } from './classes/discount';

const discount = new FiftyPercenceDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder);

shoppingCart.addItem(new Product('Camisa', 12));
shoppingCart.addItem(new Product('Caderno', 21));
shoppingCart.addItem(new Product('Lapis', 27));

console.log(shoppingCart.item);
console.log(order.orderStatus);

console.log(`Valor Total de Produtos `, shoppingCart.total());
console.log(`Total com desconto:  `, shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
