// import { Component, OnInit, Input } from '@angular/core';
// import { INGREDIENTS } from '../data/ingredients';
// import { Ingredients } from '../data/ingredients';
//
// import { UserComponent } from '../user/user.component';
// //
// // export const INGREDIENTS = [
// //   { id: 1, name: 'eggs' },
// //   { id: 2, name: 'rice' },
// //   { id: 3, name: 'apple' },
// //   { id: 4, name: 'ground beef' },
// //   { id: 5, name: 'pototatos' },
// //   { id: 6, name: 'ketchup' },
// //   { id: 7, name: 'onions' },
// //   { id: 8, name: 'tomato' },
// //   { id: 9, name: 'flour' },
// //   { id: 10, name: 'salt' },
// //   { id: 11, name: 'milk' },
// //   { id: 12, name: 'curry' },
// //   { id: 13, name: 'pepper' },
// //   { id: 14, name: 'parsnips' },
// //   { id: 15, name: 'pringles' },
// //   { id: 16, name: 'cookies' },
// //   { id: 17, name: 'chocolate' },
// //   { id: 18, name: 'oranges' },
// //   { id: 19, name: 'bananas' },
// //   { id: 20, name: 'sour cream' }
// // ];
//
// @Component({
//   providers:[UserComponent],
//   selector: 'app-ingredients',
//   templateUrl: './ingredients.component.html',
//   styleUrls: ['./ingredients.component.css']
// })
//
// export class IngredientsComponent implements OnInit {
//   @Input() ingredients: Ingredients[];
//
//   ingredient = {
//     id: 1,
//     name: "",
//   };
//
//   constructor(private userComponent: UserComponent) { }
//
//   ngOnInit() {
//   }
//   //
//   // ingredients = INGREDIENTS;
//   //
//   addIngredient($event): void {
//     INGREDIENTS.push(this.ingredient);
//     this.ingredient = {
//       id: 1,
//       name: "",
//     }
//     this.userComponent.updateIngredients();
//     console.log(this);
//   }
//
// }
