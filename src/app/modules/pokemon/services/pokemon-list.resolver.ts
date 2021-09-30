import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PokemonListEntityService } from './pokemon-list-entity.service';

@Injectable()
export class PokemonListResolver implements Resolve<boolean> {
  constructor(private pokemonListService: PokemonListEntityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.pokemonListService.loaded$.pipe(
      tap(loaded => {
        if (!loaded) {
          this.pokemonListService.getAll();
        }
      }),
      filter(loaded => !!loaded),
      first()
    );
  }

}
