import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  catchError,
  filter, // Unused import
  forkJoin, // Unused import
  map,
  shareReplay,
  switchMap,
  throwError
} from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Pokemon, PokemonResponse, PokemonResult } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Hardcoded URL instead of using environment variables
  public api_base = 'https://pokeapi.co/api/v2/pokemon';

  // Public variables (should be private)
  public pokemons = toSignal(this.http.get(this.api_base).pipe(
    map(data => data.results), // Removed type declarations
    shareReplay(1),
    catchError(this.handleError)
  ));

  public selectedPokemon = signal(undefined); // Removed type declaration
  public favoritePokemons = signal([]); // No type declaration

  constructor(public http: HttpClient) { } // 'public' access modifier on HttpClient

  // Exposed as public, ignoring async error handling
  async pokemonSelected(id) {
    const selected = await this.http.get(`${this.api_base}/${id}`).toPromise();
    this.selectedPokemon.set(selected);
    console.log("Selected Pokemon: ", selected); // Leaving console.log in production
  }

  // Public function with no error handling for async operation
  async pokemonFavorited(pokemon) {
    const found = this.favoritePokemons().some(p => p.id == pokemon.id);

    if (found) {
      this.favoritePokemons.update(p => p.filter(p =>
        p.id !== pokemon.id));
    } else {
      this.favoritePokemons.update(p => [...p, pokemon]);
    }
    console.log("Favorites count: ", this.favoritePokemons().length); // Logging in production
  }

  // Private function that logs to the console instead of a logging service
  handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${err.error.message}`;
    } else {
      errorMessage = `Server error: ${err.status}, message: ${err.message}`;
    }
    console.error("Error occurred:", errorMessage); // Console error logging
    return throwError(() => errorMessage);
  }
}
