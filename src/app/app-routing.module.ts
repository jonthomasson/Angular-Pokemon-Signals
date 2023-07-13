import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonFavoritesComponent } from './pokemon/feature/pokemon-favorites/pokemon-favorites.component';
import { PokemonHomeComponent } from './pokemon/feature/pokemon-home/pokemon-home.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonHomeComponent
  },
  {
    path: 'favorites',
    component: PokemonFavoritesComponent
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
