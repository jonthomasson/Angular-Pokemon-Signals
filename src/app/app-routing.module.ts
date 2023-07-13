import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonHomeComponent } from './pokemon/feature/pokemon-home/pokemon-home.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonHomeComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
