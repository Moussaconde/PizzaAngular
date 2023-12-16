import { Injectable } from '@angular/core';
import { Pizza } from '../Pizza';
import { LIST_PIZZAS } from '../shared/list.pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas: Pizza[] = LIST_PIZZAS;

  constructor() { }

  // Méthode pour récupérer la liste des pizzas
  getListPizzas(): Pizza[] {
    return this.pizzas;
  }

  // Méthode pour récupérer les détails d'une pizza par ID
  getSinglePizza(id: number): Pizza | undefined {
    return this.pizzas.find(pizza => pizza.id === id);
  }

  getPizzaIngredients() : string[]{
    return ['Mozarella','chèvre','oignon','v.hachée','S.tomate','S.barbecue','piment','merguez','c.fraîche','roquette','champignons'];
  }
}
