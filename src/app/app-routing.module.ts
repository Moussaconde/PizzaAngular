import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPizzaComponent } from './Pizzas/list-pizza/list-pizza.component';
import { DetailsPizzaComponent } from './Pizzas/details-pizza/details-pizza.component';

const routes: Routes = [
  {path : 'pizzas',component: ListPizzaComponent},
  {path : 'pizzas/:id',component: DetailsPizzaComponent},
  {path : '',redirectTo: 'pizzas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
