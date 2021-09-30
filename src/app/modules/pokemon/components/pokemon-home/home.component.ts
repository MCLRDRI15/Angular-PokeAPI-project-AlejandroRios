import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getComparisonPokemon, getCurrentPokemon, getFavoritePokemonList, getIsComparing } from '../../ngrx/selectors/pokemon.selectors';
import { PokemonState } from '../../ngrx/reducers';
import { PokemonListEntityService } from '../../services/pokemon-list-entity.service';
import { PokemonContext } from '../../interfaces/pokemon-api-context';

@Component({
  selector: 'Principal-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private pokemonListService: PokemonListEntityService,
              private store: Store<PokemonState>) { }
  pokemonList$: Observable<PokemonContext[]>;
  favoritePokemonList$: Observable<PokemonContext[]>;
  currentPokemon$: Observable<PokemonContext>;
  comparisonPokemon$: Observable<PokemonContext>;
  isComparing$: Observable<boolean>;

  ngOnInit(): void {
    this.inputHandler();
    this.pokemonList$ = this.pokemonListService.filteredEntities$;
    this.favoritePokemonList$ = this.store.select(getFavoritePokemonList);
    this.currentPokemon$ = this.store.select(getCurrentPokemon);
    this.comparisonPokemon$ = this.store.select(getComparisonPokemon);
    this.isComparing$ = this.store.select(getIsComparing);
  }

  inputHandler(search: string = ''): void {
    this.pokemonListService.setFilter(search);
  }
}
