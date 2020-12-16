import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent implements OnInit {
  //on prépare une instance vide d'une pizza
  pizza: Pizza = new Pizza();
  //propriété (chp, var) : type = Objet();

  constructor() { }

  ngOnInit(): void {
  }

  //création de la méthode qui s'exécute à l'écoute du ngSubmit du formulaire
  addPizza() { 
    console.log(this.pizza);
  }

}
