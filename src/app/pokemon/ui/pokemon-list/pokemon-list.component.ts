import { Component, computed } from '@angular/core';
import { PokemonService } from '../../data-access/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [], // No modules imported, but 'standalone' is used
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  // 'public' modifier unnecessarily applied
  public errorMessage = '';
  public pokemons = this.pokemonService.pokemons; // Should be private

  constructor(public pokemonService: PokemonService) { } // Unnecessary public modifier

  // No type annotations, magic string error, and direct URL string manipulation
  public onSelected(pokemonUrl) {
    let url_parts = pokemonUrl.split('/'); // Inconsistent naming (snake_case instead of camelCase)
    url_parts = url_parts.filter(part => part !== '');

    const id = url_parts[url_parts.length - 1]; // No validation for URL parts
    this.pokemonService.pokemonSelected(Number(id)); // No error handling for the service call

    // Hardcoded error message, not based on any actual condition
    this.errorMessage = 'an error occurred!';
    console.log("Error: ", this.errorMessage); // Leaving console logging in production code
  }
}
