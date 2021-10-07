import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { map } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon';
import { FlavorText } from '../interfaces/pokemon-flavor-text';

@Injectable()
export class PokemonCardDataService extends DefaultDataService<Pokemon> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Pokemon', http, httpUrlGenerator);
  }

  getWithQuery(params: QueryParams): Observable<Pokemon[]> {
    const pokemonArray: Pokemon[] = [];
    return combineLatest([this.http.get(params.url.toString()), this.http.get(params.speciesUrl.toString())])
      .pipe(
        map(response => {
          const pokemonInfo = response[0];
          const speciesInformations = response[1];
          const pokemon: Pokemon = {
            name: pokemonInfo['name'],
            id: pokemonInfo['id'],
            height: pokemonInfo['height'],
            weight: pokemonInfo['weight'],
            types: pokemonInfo['types'],
            abilities: pokemonInfo['abilities'],
            stats: pokemonInfo['stats'],
            description: speciesInformations['flavor_text_entries'].filter((entry: FlavorText) => entry.language.name === 'en')[0].flavor_text,
            genderRate: speciesInformations['gender_rate']
          };
          pokemonArray.push(pokemon);
          return pokemonArray;
        })
    );
  }
}
