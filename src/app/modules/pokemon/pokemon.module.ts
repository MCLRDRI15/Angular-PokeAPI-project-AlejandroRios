import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { pokemonReducer } from './ngrx/reducers';
import { PokemonListResolver } from './services/pokemon-list.resolver';
import { PokemonListDataService } from './services/pokemon-list-data.service';
import { PokemonListEntityService } from './services/pokemon-list-entity.service';
import { PokemonCardDataService } from './services/pokemon-card-data.service';
import { PokemonCardEntityService } from './services/pokemon-card-entity.service';
import { PrincipalComponent } from './components/pokemon-home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonCardHeaderComponent } from './components/pokemon-card-header/pokemon-card-header.component';
import { PokemonCardDataComponent } from './components/pokemon-card-data/pokemon-card-data.component';
import { PokemonCardChartComponent } from './components/pokemon-card-chart/pokemon-card-chart.component';
import { PokemonFavoriteComponent } from './components/pokemon-favorite/pokemon-favorite.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChartsModule } from 'ng2-charts';
import { GlobalModule } from '../global-components/global.module';
import { PokemonContext } from './interfaces/pokemon-api-context';

export const pokemonListRoutes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    resolve: {
      pokemonListItems: PokemonListResolver
    }
  }
];

const entityMetadata: EntityMetadataMap = {
  PokemonList: {
    selectId: (item: PokemonContext) => item.name,
    filterFn: (pokemonList: PokemonContext[], search: string) => pokemonList.filter((pokemon) => pokemon.name.includes(search))
  },
  Pokemon: { }
};

@NgModule({
  declarations: [
    PokemonListComponent,
    PrincipalComponent,
    PokemonCardComponent,
    PokemonCardDataComponent,
    PokemonCardHeaderComponent,
    PokemonCardChartComponent,
    PokemonFavoriteComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    ChartsModule,
    InfiniteScrollModule,
    GlobalModule,
    RouterModule.forChild(pokemonListRoutes),
    StoreModule.forFeature('pokemonListState', pokemonReducer),
  ],
  providers: [
    PokemonListEntityService,
    PokemonListDataService,
    PokemonCardEntityService,
    PokemonCardDataService,
    PokemonListResolver,
  ]
})
export class PokemonModule {
  constructor(private eds: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private pokemonListDataService: PokemonListDataService,
              private pokemonCardDataService: PokemonCardDataService) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('PokemonList', pokemonListDataService);
    entityDataService.registerService('Pokemon', pokemonCardDataService);
  }
}
