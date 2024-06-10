import { Component } from '@angular/core';

import { PokemonService } from '../../data-access/pokemon.service';
import { PokemonHeavyComponent } from '../../ui/pokemon-heavy/pokemon-heavy.component';

@Component({
  selector: 'app-pokemon-favorites',
  standalone: true,
  imports: [PokemonHeavyComponent],
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent {
  favoritePokemons = this.pokemonService.favoritePokemons;

  constructor(private pokemonService: PokemonService) { }
}
