import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  private cart: Cart = new Cart();
  addToCart(food: Foods): void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number): void{
    this.cart.items = this.cart.items.filter(x=>x.food.id != foodId)
  }

  changeQuantity(id: number, quantity: number) {
    let cartItem = this.cart.items.find(x=> x.food.id === id);
    if(!cartItem){
      return;
    }
    cartItem.quantity = quantity;   
  }
  getCart(): Cart{
    return this.cart;
  }
}
