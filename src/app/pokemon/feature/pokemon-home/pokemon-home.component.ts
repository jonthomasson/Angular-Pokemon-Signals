import { Component } from '@angular/core';

import { PokemonListComponent } from '../../ui/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../ui/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-home',
  standalone: true,
  imports: [PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent {

}
