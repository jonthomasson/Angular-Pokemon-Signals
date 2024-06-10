import { Component, computed } from '@angular/core';

import { PokemonService } from '../../../pokemon/data-access/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  favoriteCount = computed<number>(() => this.pokemonService.favoritePokemons().length);

  
  constructor(private pokemonService: PokemonService) { }

}
