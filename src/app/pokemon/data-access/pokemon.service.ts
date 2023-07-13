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
    catchError(this.handleError)
  );

  //expose our signals
  pokemons = toSignal(this.pokemon$, { initialValue: [] as PokemonResult[] });
  selectedPokemon = signal<Pokemon | undefined>(undefined);

  async pokemonSelected(id: number) {
      const selected = await this.http.get<Pokemon>(`${this.apiBase}/${id}`).toPromise();
    this.selectedPokemon.set(selected);
    console.log(this.selectedPokemon());
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
