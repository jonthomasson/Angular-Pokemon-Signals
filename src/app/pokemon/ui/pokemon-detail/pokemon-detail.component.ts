import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../data-access/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  pokemon = this.pokemonService.selectedPokemon;


  constructor(private pokemonService: PokemonService) { }
}
