import { PokemonContext } from './pokemon-api-context';

export interface PokemonDialogData {
  isComparing: boolean;
  currentPokemon: PokemonContext;
  comparisonPokemon: PokemonContext;
  favoritePokemonList: PokemonContext[];
}
