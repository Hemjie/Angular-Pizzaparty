import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  loading: boolean = false;

  constructor(
    private pizzaService: PizzaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  //création de la méthode qui s'exécute à l'écoute du ngSubmit du formulaire
  addPizza() { 
    //on lance le chargement
    this.loading = true;

    //on va appeler le service pour créer la pizza sur l'API
    this.pizzaService.createPizzaSlowly(this.pizza).then(pizza => {
      console.log(pizza);
      
      //redirection?
      this.router.navigate(['/pizzas']);

      //on arrête le chargement
      this.loading = false;
    })
  }

}
