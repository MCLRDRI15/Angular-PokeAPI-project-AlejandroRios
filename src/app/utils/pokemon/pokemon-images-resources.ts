import { environment } from 'src/environments/environment';

export class PokemonResources {
  constructor() { }

  static getPokemonImageUrl(id: number): string {
    return environment.pokemonImagesUrl + id.toString() + '.png?raw=true';
  }
}
