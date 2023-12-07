import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './Pizzas/list-pizza/list-pizza.component';
import { BorderCardDirective } from './shared/directives/border-card.directive';
import { PizzaIngredientColorPipe } from './shared/pipes/pizza-ingredient-color.pipe';
import { DetailsPizzaComponent } from './Pizzas/details-pizza/details-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    DetailsPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
