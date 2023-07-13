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
  moves = computed(() => this.pokemon()?.moves.slice(0, 10));

  constructor(private pokemonService: PokemonService) { }

  isFavorited(id: number) {
    return true;
  }

  toggleFavorite(id: number): void {
    // add the Pokemon with the given ID to the favorites if it's not there yet, remove it otherwise
  }
}
