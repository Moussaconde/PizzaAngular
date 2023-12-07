import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {
  pizzaToDisplay : Pizza | undefined;
  listOfPizzas : Pizza[] | undefined;

  constructor(private activatedRoute : ActivatedRoute){

  }


  ngOnInit(): void {
    this.listOfPizzas = LIST_PIZZAS;

    // Récupérer le paramètre de la route associée à notre composant
    // @ts-ignore
    const retrievedIdFromURL = +this.activatedRoute.snapshot.paramMap.get('id');

    this.listOfPizzas.forEach(pizza => {
      if(pizza.id == retrievedIdFromURL) {
        this.pizzaToDisplay = pizza;
      }
      
    })
  }

}
