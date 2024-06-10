import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import {
  catchError,
  filter,
  forkJoin,
  map,
  Observable,
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
  private apiBase = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  //expose observables as private
  private pokemon$ = this.http.get<PokemonResponse>(this.apiBase).pipe(
    map((data) => data.results),
    shareReplay(1),
    catchError(this.handleError)
  );

  //expose our signals
  pokemons = toSignal(this.pokemon$, { initialValue: [] as PokemonResult[] });
  selectedPokemon = signal<Pokemon | undefined>(undefined);
  favoritePokemons = signal<Pokemon[]>([]);

  async pokemonSelected(id: number) {
      const selected = await this.http.get<Pokemon>(`${this.apiBase}/${id}`).toPromise();
    this.selectedPokemon.set(selected);
    //console.log(this.selectedPokemon());
  }

  async pokemonFavorited(pokemon: Pokemon) {
    //toggle favorite. If pokemon found in favorites, remove it else add it to favorites.
    const found = this.favoritePokemons().some((p) => p.id == pokemon.id);

    if (found) {
      //use update to update the object value in the signal.
      this.favoritePokemons.update(p => p.filter(p =>
        p.id !== pokemon.id));
    } else {
      this.favoritePokemons.update(p => [...p, pokemon]); //updating for v17.
      ////use mutate to change the object properties within the signal.
      //this.favoritePokemons.mutate(favorites => favorites.push(pokemon)); //mutate was taken out of v17!
    }
    //console.log(this.favoritePokemons().length);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message
        }`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
