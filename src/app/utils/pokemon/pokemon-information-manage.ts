import { PokemonContext } from 'src/app/modules/pokemon/interfaces/pokemon-api-context';

export class PokemonInformation {
  constructor() { }

  static getFavoriteListIndex(favoritePokemonList: PokemonContext[], pokemonName: string): number {
    return favoritePokemonList.findIndex((pokemon) => pokemon.name === pokemonName);
  }

  static isFavorite(favoritePokemonList: PokemonContext[], pokemon: PokemonContext): boolean {
    return this.getFavoriteListIndex(favoritePokemonList, pokemon.name) !== -1;
  }

  static getGender(rate: number): string {
    let gender = 'Genderless';
    if (rate >= 4 ) {
      gender = 'Female';
    } else if (rate >= 0) {
      gender = 'Male';
    }
    return gender;
  }
}
