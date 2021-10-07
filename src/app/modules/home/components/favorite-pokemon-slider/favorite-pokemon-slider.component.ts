import { Component, Input, OnInit } from '@angular/core';
import { PokemonContext } from 'src/app/modules/pokemon/interfaces/pokemon-api-context';
import { PokemonResources } from 'src/app/utils/pokemon/pokemon-images-resources';

@Component({
  selector: 'favorite-pokemon-slider',
  templateUrl: './favorite-pokemon-slider.component.html',
  styleUrls: ['./favorite-pokemon-slider.component.css']
})
export class FavoritePokemonSliderComponent implements OnInit {
  @Input() favoritePokemonList: PokemonContext[];
  pokemonImages: string[];
  pokemonNames: string[];

  constructor() { }

  ngOnInit(): void {
    this.pokemonImages = this.favoritePokemonList.map((pokemon) => this.getImage(pokemon.url));
    this.pokemonNames = this.favoritePokemonList.map((pokemon) => pokemon.name.toUpperCase());
  }

  getImage(url: string): string {
    return PokemonResources.getPokemonImageUrl(parseInt(url.split('/')[6], 10));
  }
}
