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
}
