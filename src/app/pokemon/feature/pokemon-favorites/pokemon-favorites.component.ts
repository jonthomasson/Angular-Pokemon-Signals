import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../data-access/pokemon.service';

@Component({
  selector: 'app-pokemon-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent {
  favoritePokemons = this.pokemonService.favoritePokemons;

  constructor(private pokemonService: PokemonService) { }
}
