import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzaService } from '../pizzas.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  ingredients : string[] = ['C. fraîche','miel','mozzarella','chèvre','oignons','v. hachée','S. tomate','S.barbecue','piments','merguez','champignons','v. kebab','roquette'];

  @Input() pizza: Pizza | undefined;
  type: string[] | undefined;
  


    
  constructor(private pizzaService: PizzaService,private router: Router){}

    ngOnInit(): void {
      this.type = this.pizzaService.getPizzaIngredients(); // Initialisez type avec la fonction du service

    }

    hasIngredient(type: string): boolean {
      const index = this.pizza?.compositions?.indexOf(type);
      return (index != -1) ? true : false;
    }    

    selectIngredient(event: any, ingredient: string): void {
      const checked = event.target.checked;
    
      if (checked) {
        if (!this.hasIngredient(ingredient)) {
          this.pizza?.compositions?.push(ingredient);
        }
      } else {
        const index = this.pizza?.compositions?.indexOf(ingredient);
        if (index !== undefined && index !== -1) {
          this.pizza?.compositions?.splice(index, 1);
        }
      }
    }
    

    onSubmit(): void {
      console.log('Submit Form');
      const lien = ['/pizzas', this.pizza?.id];
      this.router.navigate(lien);
    }

    isCompositionValid(ingredients: string[]): boolean {
      const selectedIngredients = ingredients.filter(ingredient => this.hasIngredient(ingredient));
      return selectedIngredients.length >= 1 && selectedIngredients.length <= 3;
    }
    
  }
