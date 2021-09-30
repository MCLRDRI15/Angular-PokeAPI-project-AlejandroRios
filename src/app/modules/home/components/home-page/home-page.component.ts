import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PokemonState } from 'src/app/modules/pokemon/ngrx/reducers';
import { PokemonContext } from 'src/app/modules/pokemon/interfaces/pokemon-api-context';
import { getFavoritePokemonList } from 'src/app/modules/pokemon/ngrx/selectors/pokemon.selectors';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  favoritePokemonList$: Observable<PokemonContext[]>;

  constructor(private store: Store<PokemonState>) { }

  ngOnInit(): void {
    this.favoritePokemonList$ = this.store.select(getFavoritePokemonList);
  }
}

