import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizzas.service';
import { Pizza } from 'src/app/Pizza';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {
  singlePizza: Pizza | undefined;

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.singlePizza = this.pizzaService.getSinglePizza(parseInt(id, 10));
    }
  }
}
