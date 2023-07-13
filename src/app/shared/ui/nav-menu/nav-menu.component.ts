import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../../pokemon/data-access/pokemon.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  favoriteCount = computed(() => this.pokemonService.favoritePokemons().length);

  
  constructor(private pokemonService: PokemonService) { }

}
