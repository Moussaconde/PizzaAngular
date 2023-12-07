import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './Pizzas/list-pizza/list-pizza.component';
import { BorderCardDirective } from './shared/directives/border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzaComponent,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
