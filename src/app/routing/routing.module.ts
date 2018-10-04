import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartCreatorComponent } from '../cart-creator/cart-creator.component';

const routes: Routes = [
  { path: '', component: CartCreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
