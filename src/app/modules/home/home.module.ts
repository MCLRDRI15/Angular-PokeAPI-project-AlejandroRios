import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from '../pokemon/ngrx/reducers';
import { HomeComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FavoritePokemonSliderComponent } from './components/favorite-pokemon-slider/favorite-pokemon-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { GlobalModule } from '../global-components/global.module';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundPageComponent,
    FavoritePokemonSliderComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    GlobalModule,
    RouterModule.forChild(homeRoutes),
    StoreModule.forFeature('pokemonListState', pokemonReducer),
  ]
})
export class HomeModule { }
