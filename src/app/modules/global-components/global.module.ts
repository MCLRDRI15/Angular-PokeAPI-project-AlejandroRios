import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteMessageComponent } from './components/favorite-pokemon-message/favorite-pokemon-messagge.component';
import { LittleChartComponent } from './components/little-chart-message/info-message.component';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FavoriteMessageComponent,
    LittleChartComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    FavoriteMessageComponent,
    LittleChartComponent,
    SearchComponent
  ]
})
export class GlobalModule { }

