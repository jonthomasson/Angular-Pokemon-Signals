import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../data-access/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  errorMessage = '';
  pokemons = this.pokemonService.pokemons;
 

  constructor(private pokemonService: PokemonService) { }

  onSelected(pokemonUrl: string): void {
    let urlParts = pokemonUrl.split('/');
    urlParts = urlParts.filter(part => part !== '');

    const id = urlParts[urlParts.length - 1];
    this.pokemonService.pokemonSelected(Number(id));
  }
}
