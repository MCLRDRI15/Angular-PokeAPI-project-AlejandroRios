import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteMessageComponent } from './components/favorite-pokemon-message/favorite-pokemon-messagge.component';
import { LittleChartComponent } from './components/little-chart-message/info-message.component';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FavoriteMessageComponent,
    LittleChartComponent,
    SearchComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    FavoriteMessageComponent,
    LittleChartComponent,
    SearchComponent,
    NavbarComponent
  ]
})
export class GlobalModule { }

