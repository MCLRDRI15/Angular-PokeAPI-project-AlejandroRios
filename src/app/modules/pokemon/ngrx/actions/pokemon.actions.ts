import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { createAction, props } from '@ngrx/store';

export const compare = createAction(
  'type: [Pokemon Card Comparison] Comparison between Pokemon',
);

export const updateCurrentPokemon = createAction(
  'type: [Pokemon single Card] visible single Pokemon information',
  props<{ pokemon: PokemonContext }>()
);

export const updateComparisonPokemon = createAction(
  'type: [Pokemon Card Comparison] Update Comparison between Pokemon',
  props<{ pokemon: PokemonContext }>()
);

export const addFavoritePokemon = createAction(
  'type: [new Favorite Pokemon Added] Add a new Favorite Pokemon',
  props<{ pokemon: PokemonContext }>()
);

export const deleteFavoritePokemon = createAction(
  'type: [delete Favorite Pokemon] Delete Favorite Pokemon from Favorite List',
  props<{ pokemon: PokemonContext }>()
);
