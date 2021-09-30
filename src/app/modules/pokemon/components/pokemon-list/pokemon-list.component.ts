import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '../../ngrx/reducers';
import { updateComparisonPokemon, updateCurrentPokemon } from '../../ngrx/actions/pokemon.actions';
import { PokemonListEntityService } from '../../services/pokemon-list-entity.service';
import { PokemonCardEntityService } from '../../services/pokemon-card-entity.service';
import { PokemonContext } from '../../interfaces/pokemon-api-context';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonResources } from 'src/app/utils/pokemon/pokemon-images-resources';
import { environment } from 'src/environments/environment';
import { PokemonDialog } from 'src/app/utils/dialog/pokemon-dialog';
import { MatDialog } from '@angular/material/dialog';
import { PokemonInformation } from 'src/app/utils/pokemon/pokemon-information-manage';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() currentPokemon: PokemonContext;
  @Input() comparisonPokemon: PokemonContext;
  @Input() isComparing: boolean;
  @Input()
  set pokemonList(pokemonList: PokemonContext[]) {
    this.pokemonListItems = pokemonList;
    this.pokemonImages = pokemonList.map((pokemon) => this.setImageOnCard(pokemon.url));
    this.pokemonNames = pokemonList.map((pokemon) => pokemon.name.toUpperCase());
    if (this.favoritePokemonListItems) {
      this.favorites = pokemonList.map((pokemon) => this.isFavorite(pokemon));
    }
  }

  @Input()
  set favoritePokemonList(favoritePokemonList: PokemonContext[]) {
    this.favoritePokemonListItems = favoritePokemonList;
    if (this.pokemonListItems) {
      this.favorites = this.pokemonListItems.map((pokemon) => this.isFavorite(pokemon));
    }
  }

  pokemonListItems: PokemonContext[];
  favoritePokemonListItems: PokemonContext[];
  pokemonNames: string[] = [];
  pokemonImages: string[] = [];
  favorites: boolean[] = [];
  nextOffset: number = 20;
  FavoriteListFull: boolean = false;

  constructor(private courseService: PokemonListEntityService,
              private pokemonCardService: PokemonCardEntityService,
              private store: Store<PokemonState>,
              private dialog: MatDialog) { }

  loadMorePokemon(): void {
    this.courseService.getWithQuery({
      offset: this.nextOffset.toString(),
      limit: '20',
    });
    this.nextOffset += 20;
  }

  pokemonCard(pokemon: PokemonContext): void {
    this.pokemonCardService.getWithQuery({
      url: pokemon.url,
      speciesUrl: environment.speciesApi + pokemon.name
    });

    if (this.isComparing) {
      this.comparisonPokemon = pokemon;
      this.store.dispatch(updateComparisonPokemon({ pokemon }));
    } else {
      this.currentPokemon = pokemon;
      this.store.dispatch(updateCurrentPokemon({ pokemon }));
    }

    const dialogConfig = PokemonDialog.defaultDialogConfig();
    dialogConfig.data = {
      isComparing: this.isComparing,
      currentPokemon: this.currentPokemon,
      comparisonPokemon: this.comparisonPokemon,
      favoritePokemonList: this.favoritePokemonListItems
    };
    this.dialog.open(PokemonCardComponent, dialogConfig);
  }


  handleIsFavoriteHearts(FavoriteListFull: boolean): void {
    this.FavoriteListFull = FavoriteListFull;
  }

  setImageOnCard(url: string): string {
    return PokemonResources.getPokemonImageUrl(parseInt(url.split('/')[6], 10));
  }

  isFavorite(pokemon: PokemonContext): boolean {
    return PokemonInformation.isFavorite(this.favoritePokemonListItems, pokemon);
  }

  ngOnInit(): void {
    this.favorites = this.pokemonListItems.map((pokemon) => this.isFavorite(pokemon));
  }

}
