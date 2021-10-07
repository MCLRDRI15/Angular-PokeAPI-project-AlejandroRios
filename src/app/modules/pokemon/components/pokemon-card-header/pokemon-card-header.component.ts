import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../ngrx/reducers';
import { compare } from '../../ngrx/actions/pokemon.actions';
import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { MatDialogRef } from '@angular/material/dialog';
import { PokemonInformation } from 'src/app/utils/pokemon/pokemon-information-manage';

@Component({
  selector: 'app-pokemon-card-header',
  templateUrl: './pokemon-card-header.component.html',
  styleUrls: ['./pokemon-card-header.component.css']
})
export class PokemonCardHeaderComponent implements OnInit {
  @Input() currentPokemon: PokemonContext;
  @Input() comparisonPokemon: PokemonContext;
  @Input() isComparing: boolean;
  @Input() dialogRef: MatDialogRef<PokemonCardComponent>;
  @Input()
  set favoritePokemonList(favoritePokemonList: PokemonContext[]) {
    this.favoritePokemonListItems = favoritePokemonList;
    this.favorite = this.isFavorite(this.currentPokemon);
  }

  favoritePokemonListItems: PokemonContext[];
  pokemonNames: string[] = [];
  favorite: boolean;

  constructor(private store: Store<PokemonState>) { }

  ngOnInit(): void {
    this.pokemonNames[0] = this.currentPokemon.name.toUpperCase();
    if (this.comparisonPokemon) {
      this.pokemonNames[1] = this.comparisonPokemon.name.toUpperCase();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCompare(): void {
    this.store.dispatch(compare());
    this.dialogRef.close();
  }

  isFavorite(pokemon: PokemonContext): boolean {
    return PokemonInformation.isFavorite(this.favoritePokemonListItems, pokemon);
  }
}
