import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzaService } from '../pizzas.service';
@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit{
  
  PIZZAS : Pizza[] = [];

  constructor(private pizzaService: PizzaService,private router: Router){

  }

  ngOnInit(): void {
    this.PIZZAS = this.pizzaService.getListPizzas();
  }

  selectPizza(selectedPizza : Pizza) : void{
    const link : any = ['pizzas', selectedPizza.id];
    this.router.navigate(link);
  }

  

}
