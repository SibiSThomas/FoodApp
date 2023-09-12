import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  constructor() { }

  getAll(): Foods[]{
    return[
      {
        id:1,
        name: 'Burger',
        cookTime: '10-20 mins',
        price:80,
        favourite:true,
        origins:['India','Italy','UK'],
        star: 4.5,
        imageUrl: '/assets/food1.jpg',
        tags:['FastFood', 'Burger']
      },
      {
        id:2,
        name: 'Pizza Spicy Vegetable',
        cookTime: '10-20 mins',
        price:150,
        favourite:false,
        origins:['Italy','Belgium','Spain'],
        star: 4,
        imageUrl: '/assets/food2.jpg',
        tags:['FastFood', 'Pizza']
      },
      {
        id:3,
        name: 'French Fries',
        cookTime: '10-15 mins',
        price:80,
        favourite:true,
        origins:['France'],
        star: 3.5,
        imageUrl: '/assets/food3.jpg',
        tags:['FastFood', 'Snacks']
      },
      {
        id:4,
        name: 'Chicken Biriyani',
        cookTime: '10-30 mins',
        price:150,
        favourite:false,
        origins:['India','Middle East'],
        star: 4.5,
        imageUrl: '/assets/food4.png',
        tags:['Lunch', 'Non-Veg']
      },
      {
        id:5,
        name: 'Meat Ball',
        cookTime: '10-25 mins',
        price:200,
        favourite:false,
        origins:['Belgium','Spain'],
        star: 3.7,
        imageUrl: '/assets/food5.jpg',
        tags:['FastFood', 'Snacks', 'Non-Veg']
      },
      {
        id:6,
        name: 'Beef Cutlet',
        cookTime: '10-30 mins',
        price:30,
        favourite:false,
        origins:['UK','India'],
        star: 4.5,
        imageUrl: '/assets/food6.jpg',
        tags:['Snacks', 'Non-Veg']
      },
      {
        id:7,
        name: 'KFC Chicken',
        cookTime: '10-25 mins',
        price:160,
        favourite:true,
        origins:['USA','Canada'],
        star: 5,
        imageUrl: '/assets/food7.jpg',
        tags:['FastFood', 'Non-Veg', 'Snacks']
      },
      {
        id:8,
        name: 'Prawns Fry',
        cookTime: '10-45 mins',
        price:200,
        favourite:true,
        origins:['India','Bangladesh'],
        star: 3.5,
        imageUrl: '/assets/food8.jpg',
        tags:['Non-Veg']
      }
    ]
  }
  getAllFoodsByTag(tag:string): Foods[] {

    if(tag == 'All'){
      return this.getAll();
    }
    else{
      return this.getAll().filter(food => food.tags?.includes(tag));
    }
    /* Using ternary operator
      
    return tag=='all'? this.getAll() : this.getAll().filter(food => food.tags ?.includes(tag));      
    */
  }
  getAllTag(): Tag[]{
    return [
      {name: 'All', count: 8},
      {name: 'FastFood', count: 5},
      {name: 'Burger', count: 1},
      {name: 'Pizza', count: 1},
      {name: 'Snacks', count: 4},
      {name: 'Non-Veg', count: 5},
      {name: 'Lunch', count: 1},
    ];
  }
  getFoodById(id: number): Foods{
    return this.getAll().find(x=> x.id == id)!;
  }
}
