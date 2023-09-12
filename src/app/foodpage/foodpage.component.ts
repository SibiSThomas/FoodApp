import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Foods;

  constructor(private activatedRoute: ActivatedRoute,
     private foodService : FoodService,
     private cartService : CartService,
     private router: Router){

    activatedRoute.params.subscribe(parms=>{
      if(parms['id']){
        this.food = foodService.getFoodById(parms['id']);
      }
    })       
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
