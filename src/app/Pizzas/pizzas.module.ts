import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPizzaComponent } from './list-pizza/list-pizza.component';
import { DetailsPizzaComponent } from './details-pizza/details-pizza.component';
import { RouterModule } from '@angular/router';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PizzaIngredientColorPipe } from '../shared/pipes/pizza-ingredient-color.pipe';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { PizzaService } from './pizzas.service';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from '@angular/forms';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';

@NgModule({
  declarations: [
    ListPizzaComponent,
    DetailsPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    PageNotFoundComponent,
    PizzaFormComponent,
    PizzaEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ListPizzaComponent,
    DetailsPizzaComponent,
    PizzaFormComponent

  ],
  providers: [
    PizzaService
  ]
})
export class PizzasModule { }
