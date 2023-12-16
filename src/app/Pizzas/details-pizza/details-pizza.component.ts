import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzaService } from '../pizzas.service';
@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {
  pizzaToDisplay : Pizza | undefined;
  listOfPizzas : Pizza[] | undefined;

  constructor(private pizzaService: PizzaService ,private activatedRoute : ActivatedRoute, private router : Router){

  }


  ngOnInit(): void {

    // Récupérer le paramètre de la route associée à notre composant
    // @ts-ignore
    const retrievedIdFromURL = +this.activatedRoute.snapshot.paramMap.get('id');
    this.pizzaToDisplay = this.pizzaService.getSinglePizza(retrievedIdFromURL);
  }
  
  retourAccueil(): void {
    this.router.navigate(['/pizzas']);
  }

  redirectToEdit(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/pizzas/edit', id]);
    }
  }
}
