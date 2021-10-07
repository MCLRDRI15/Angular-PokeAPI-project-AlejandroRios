import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonInformation } from 'src/app/utils/pokemon/pokemon-information-manage';
import { PokemonResources } from 'src/app/utils/pokemon/pokemon-images-resources';

@Component({
  selector: 'app-pokemon-card-data',
  templateUrl: './pokemon-card-data.component.html',
  styleUrls: ['./pokemon-card-data.component.css', 'pokemon-comparison-card-data.component.css']
})
export class PokemonCardDataComponent implements OnInit {
  @Input() isComparing: boolean;
  @Input()
  set currentPokemon(currentPokemon: Pokemon) {
    this.currentPokemonInformation = currentPokemon;
    if (currentPokemon) {
      this.pokemonImages[0] = this.getImage(currentPokemon.id);
      this.pokemonGenderName[0] = this.getGenderName(currentPokemon.genderRate);
    }
  }

  @Input()
  set comparisonPokemon(comparisonPokemon: Pokemon) {
    this.comparisonPokemonInformation = comparisonPokemon;
    if (comparisonPokemon) {
      this.pokemonImages[1] = this.getImage(comparisonPokemon.id);
      this.pokemonGenderName[1] = this.getGenderName(comparisonPokemon.genderRate);
    }
  }

  currentPokemonInformation: Pokemon;
  comparisonPokemonInformation: Pokemon;
  pokemonImages: string[] = [];
  pokemonDetailItem: string[] = ['height', 'weight'];
  pokemonDetailTitle: string[] = [];
  pokemonGenderName: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pokemonDetailTitle = this.pokemonDetailItem.map((title) => title.charAt(0).toUpperCase() + title.slice(1));
  }

  getImage(id: number): string {
    return PokemonResources.getPokemonImageUrl(id);
  }

  getGenderName(rate: number): string {
    return PokemonInformation.getGender(rate);
  }
}
