import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Pokemon } from '../interfaces/pokemon';

@Injectable()
export class PokemonCardEntityService extends EntityCollectionServiceBase<Pokemon> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Pokemon', serviceElementsFactory);
  }
}
