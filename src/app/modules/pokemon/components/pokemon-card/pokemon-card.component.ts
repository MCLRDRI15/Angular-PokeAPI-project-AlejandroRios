import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PokemonState } from '../../ngrx/reducers';
import { compare } from '../../ngrx/actions/pokemon.actions';
import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonDialogData } from '../../interfaces/pokemon-dialog-data';
import { selectPokemonByName } from '../../ngrx/selectors/pokemon.selectors';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonCardComponent implements OnInit, OnDestroy {
  isComparing: boolean;
  currentPokemon: PokemonContext;
  comparisonPokemon: PokemonContext;
  favoritePokemonList: PokemonContext[];
  currentPokemonInformation$: Observable<Pokemon>;
  comparisonPokemonInformation$: Observable<Pokemon>;

  constructor(public dialogRef: MatDialogRef<PokemonCardComponent>,
              @Inject(MAT_DIALOG_DATA) data: PokemonDialogData,
              private store: Store<PokemonState>) {
    this.isComparing = data.isComparing;
    this.currentPokemon = data.currentPokemon;
    this.comparisonPokemon = data.comparisonPokemon;
    this.favoritePokemonList = data.favoritePokemonList;
  }

  ngOnInit(): void {
    this.currentPokemonInformation$ = this.store.select(selectPokemonByName, { pokemonName: this.currentPokemon.name });
    if (this.isComparing) {
      this.comparisonPokemonInformation$ = this.store.select(selectPokemonByName, { pokemonName: this.comparisonPokemon.name });
    }
  }

  ngOnDestroy(): void {
    if (this.isComparing) {
      this.store.dispatch(compare());
    }
  }
}
