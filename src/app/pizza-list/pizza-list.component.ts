import { Component, OnInit } from '@angular/core';

import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  // maSuperPizza est "typée" avec la classe Pizza
  maSuperPizza: Pizza;

  // On peut typer un tableau
  mesPizzas: Pizza[];

  //on peut créer une fonction / méthode
  onSelect(pizza: Pizza) {  //possibilité de typer une fonction
    console.log(pizza);
    //on va modifier la valeur de maSuperPizza
    console.log(this); //this est pour AppComponent
    this.maSuperPizza = pizza;
  }

  //ceci est de l'injection de dépendance: on récupère l'instance d'une classe (PizzaService) dont dépend notre PizzaListComponent
  //constructor se lance avant le chargement du DOM

  constructor(private pizzaService: PizzaService) { }

  //ce code s'exécute quand le composant est initalisé (dans le DOM)après le constructeur

  ngOnInit(): void {
    //je récupère les pizzas du service
    this.mesPizzas = this.pizzaService.getPizzas();
  }

  
}
