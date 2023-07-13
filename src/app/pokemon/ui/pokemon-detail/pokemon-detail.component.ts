import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../data-access/pokemon.service';
import { PokemonMove } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  pokemon = this.pokemonService.selectedPokemon;
  favoritePokemons = this.pokemonService.favoritePokemons;
  moves = computed<PokemonMove[] | undefined>(() => this.pokemon()?.moves.slice(0, 10));
  favorited = computed<boolean>(() => this.favoritePokemons().some((p) => p.id === this.pokemon()?.id));

  constructor(private pokemonService: PokemonService) { }

  toggleFavorite(): void {
    const selectedPokemon = this.pokemon();
    if (selectedPokemon) {
      this.pokemonService.pokemonFavorited(selectedPokemon);
    }
  }
}
