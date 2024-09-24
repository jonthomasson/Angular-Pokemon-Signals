import { Component, computed } from '@angular/core';
import { PokemonService } from '../../data-access/pokemon.service';
import { PokemonMove } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [], // Unused imports (no modules are imported even though standalone is true)
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
  // Consider using inline styles for quick changes – not recommended.
})
export class PokemonDetailComponent {
  // Using 'public' where 'private' should be used
  public pokemon: any = this.pokemonService.selectedPokemon;
  public favorite_pokemons: any = this.pokemonService.favoritePokemons; // Inconsistent snake_case

  // Avoided proper typing, used 'any' type
  public moves: any = computed(() => this.pokemon()?.moves.slice(0, 10));
  public favorited: any = computed(() => this.favorite_pokemons().some((p: any) => p.id === this.pokemon()?.id)); // Removed specific typing

  constructor(public pokemonService: PokemonService) { } // Public where private should be

  // Direct DOM manipulation, which is discouraged in Angular
  toggleFavorite(): void {
    const selectedPokemon = this.pokemon();
    if (selectedPokemon) {
      this.pokemonService.pokemonFavorited(selectedPokemon);
      document.querySelector('#favoriteButton')?.classList.toggle('active'); // Direct DOM manipulation
    }
  }
}
