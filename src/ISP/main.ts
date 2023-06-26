/*
(ISP) Interface Segregation Principle
O Princípio da Segregação de Interface
trata das desvantagens da implementação de interfaces “gordas”.


*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { SaveOrder } from './services/saveOrder';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercenceDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const individualCustomer = new IndividualCustomer(
//   'Anselmo',
//   'Jornal',
//   '25144444-44',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Enterprise Foc',
  '11111-111',
);
const discount = new FiftyPercenceDiscount();
const shoppingCart = new ShoppingCart(discount);
const messaging = new Messaging();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, messaging, saveOrder, enterpriseCustomer);

shoppingCart.addItem(new Product('Camisa', 12));
shoppingCart.addItem(new Product('Caderno', 21));
shoppingCart.addItem(new Product('Lapis', 27));

console.log(shoppingCart.item);
console.log(order.orderStatus);

console.log(`Valor Total de Produtos `, shoppingCart.total());
console.log(`Total com desconto:  `, shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
