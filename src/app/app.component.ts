import { Component } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  name = '4 fromages';
  // maSuperPizza est "typée" avec la classe Pizza
  maSuperPizza: Pizza;

  // On peut typer un tableau
  mesPizzas: Pizza[] = [ //cette variable est un tableau d'objets Pizza
    {id: 1, name: 'Reine', price: 12, image: 'reine.jpg'},
    {id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg'},
    {id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg'},
    {id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg'}
  ];

  //on peut créer une fonction / méthode
  onSelect(pizza: Pizza) {  //possibilité de typer une fonction
    console.log(pizza);
    //on va modifier la valeur de maSuperPizza
    console.log(this); //this est pour AppComponent
    this.maSuperPizza = pizza;
  }

}

