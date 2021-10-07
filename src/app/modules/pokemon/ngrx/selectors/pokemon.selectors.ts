import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from '../reducers/index';
import { AppState } from 'src/app/reducers';
import { Pokemon } from '../../interfaces/pokemon';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemonListState');

export const getIsComparing = createSelector(
  selectPokemonState,
  (state) => !!state.isComparing
);

export const getCurrentPokemon = createSelector(
  selectPokemonState,
  (state) => state.currentPokemon
);

export const getComparisonPokemon = createSelector(
  selectPokemonState,
  (state) => state.comparisonPokemon
);

export const getFavoritePokemonList = createSelector(
  selectPokemonState,
  (state) => state.favoritePokemonList
);

export const selectEntityCache = createFeatureSelector<AppState>('entityCache');

export const pokemonAdapter = createEntityAdapter<Pokemon>();
export const pokemonListAdapter = createEntityAdapter<PokemonContext>();

export const { selectAll: selectAllPokemon } = pokemonAdapter.getSelectors();
export const { selectAll: selectAllPokemonList } = pokemonListAdapter.getSelectors();

export const selectPokemonCollection = createSelector(
  selectEntityCache,
  (state) => state['Pokemon']
);

export const selectPokemonListCollection = createSelector(
  selectEntityCache,
  (state) => state['PokemonList']
);

export const selectPokemonEntities = createSelector(
  selectPokemonCollection,
  selectAllPokemon
);

export const selectPokemonListEntities = createSelector(
  selectPokemonListCollection,
  selectAllPokemonList
);

export const selectPokemonByName = createSelector(
  selectPokemonEntities,
  (pokemonList: Pokemon[], props: { pokemonName: string }) => pokemonList.find((pokemon) => pokemon.name === props.pokemonName)
);
