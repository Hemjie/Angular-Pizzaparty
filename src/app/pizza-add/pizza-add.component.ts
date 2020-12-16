import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent implements OnInit {
  //on prépare une instance vide d'une pizza
  pizza: Pizza = new Pizza();
  //propriété (chp, var) : type = Objet();

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  //création de la méthode qui s'exécute à l'écoute du ngSubmit du formulaire
  addPizza() { 
    //on va appeler le service pour créer la pizza sur l'API
    this.pizzaService.createPizza(this.pizza).then(pizza => console.log(pizza));
  }

}
