/*
Liskov Substituition principle (Principio da Substiuicao de Liskov)-
se Fi(x) é uma propriedade demonstravel dos objectos x de tipo T. Entao Fi(y)
deve ser Verdadeiro para objectos y de Tipo S onde S é um subtipo de T.

Simplificado: Subtipos precisam ser substituiveis por seus tipos de base.
Mais Simplificado ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
*/

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
