import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {


  //dans PizzaService, j'ai besoin du service HttpClient pour faire les requêtes sur mon API

  constructor(private http: HttpClient) { }

  // récupère les pizzas sur notre API
  getPizzas(): Promise<Pizza[]> { //signature de la fonction
    
    //quand on fait une requête sur une API, on doit faire une promesse
    //on nous promet de nous renvoyer une réponse (tps de latence possible)
    //une promesse est un code asynchrone, cad que le code peut s'exécuter plus tard
  
    //le typage du get est nécessaire pour que la requête fonctionne et évite Promise<any>
    return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise();
  }

  // pour ralentir l'API, on simule une mauvaise connexion
  getPizzasSlowly():Promise<Pizza[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPizzas()), 500)
    });
  }

  /**
   * Je vais créer une Pizza sur mon API
   */

   createPizza(pizza: Pizza): Promise<Pizza> {
     // on envoie la pizza à l'API, et l'API nous promet de créer cette Pizza
     // si c'est le cas, elle nous renvoie la pizza avec son ID

     // adresse http est celle de la requête API, pas celle du site
     return this.http.post<Pizza>('http://localhost:3000/pizzas', pizza).toPromise(); 
     //ne jamais oublier la promesse sur une requête API
   }

   createPizzaSlowly(pizza: Pizza): Promise<Pizza> {
     return new Promise(resolve => {
       setTimeout(() => resolve(this.createPizza(pizza)), 2000);
     })
   }
}
