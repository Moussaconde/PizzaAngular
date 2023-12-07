import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit{
  
  PIZZAS : Pizza[] = [];

  constructor(){

  }

  ngOnInit(): void {
    this.PIZZAS = LIST_PIZZAS
  }

  selectPizza(selectedPizza : Pizza) : void{
    alert("vous avez selectioner :" + selectedPizza.name)
  }

  

}
