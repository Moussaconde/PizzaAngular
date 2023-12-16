import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPizzaComponent } from './Pizzas/list-pizza/list-pizza.component';
import { DetailsPizzaComponent } from './Pizzas/details-pizza/details-pizza.component';
import { Pizza } from './Pizza';
import { PizzaFormComponent } from './Pizzas/pizza-form/pizza-form.component';
import { PizzaEditComponent } from './Pizzas/pizza-edit/pizza-edit.component';

const routes: Routes = [
  {path : 'pizzas',component: ListPizzaComponent},
  {path : 'pizzas/:id',component: DetailsPizzaComponent},
  { path: 'pizzas/edit/:id', component: PizzaEditComponent }, 
  {path : '',redirectTo: 'pizzas', pathMatch: 'full' },
  { path: '**', redirectTo: 'pizzas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
