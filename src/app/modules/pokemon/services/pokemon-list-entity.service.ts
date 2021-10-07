import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { PokemonContext } from '../interfaces/pokemon-api-context';

@Injectable()
export class PokemonListEntityService extends EntityCollectionServiceBase<PokemonContext> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('PokemonList', serviceElementsFactory);
  }
}
