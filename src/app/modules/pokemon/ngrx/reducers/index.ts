import { createReducer, on } from '@ngrx/store';
import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { PokemonActions } from '../actions/action-types';
import { environment } from 'src/environments/environment';

export interface PokemonState {
  isComparing: boolean;
  currentPokemon: PokemonContext;
  comparisonPokemon: PokemonContext;
  favoritePokemonList: PokemonContext[];
}

export const initialPokemonState: PokemonState = {
  isComparing: false,
  currentPokemon: undefined,
  comparisonPokemon: undefined,
  favoritePokemonList: [
    { name: 'bulbasaur', url: environment.pokemonApi + '1/' },
    { name: 'charmander', url: environment.pokemonApi + '4/' },
    { name: 'squirtle', url: environment.pokemonApi + '7/' },
  ]
};

export const pokemonReducer = createReducer(
  initialPokemonState,
  on(PokemonActions.compare, (state, action) => {
    return {
      ...state,
      isComparing: !state.isComparing,
    };
  }),
  on(PokemonActions.updateCurrentPokemon, (state, action) => {
    return {
      ...state,
      currentPokemon: action.pokemon
    };
  }),
  on(PokemonActions.updateComparisonPokemon, (state, action) => {
    return {
      ...state,
      comparisonPokemon: action.pokemon
    };
  }),
  on(PokemonActions.addFavoritePokemon, (state, action) => {
    return {
      ...state,
      favoritePokemonList: [...state.favoritePokemonList, action.pokemon]
    };
  }),
  on(PokemonActions.deleteFavoritePokemon, (state, action) => {
    return {
      ...state,
      favoritePokemonList: [...state.favoritePokemonList.filter((pokemon) => !(pokemon.name === action.pokemon.name))]
    };
  })
);
