import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  // récupère les pizzas sur notre API
  getPizzas(): Pizza[] { //cette variable est un tableau d'objets Pizza
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        //le code suivant va s'exécuter plus tard...
        console.log(response);
      });
  
  
    return [
      {id: 1, name: 'Reine', price: 12, image: 'reine.jpg'},
      {id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg'},
      {id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg'},
      {id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg'}
    ]
  }
}
