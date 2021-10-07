import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Pokemon } from '../../interfaces/pokemon';
import { barChartOptions as chartOptions } from 'src/app/utils/general-charts-definition/bar-chart';
import { barChartPrimaryStyle, barChartSecondaryStyle } from 'src/app/utils/general-charts-definition/bar-chart';

@Component({
  selector: 'app-pokemon-card-chart',
  templateUrl: './pokemon-card-chart.component.html',
  styleUrls: ['./pokemon-card-chart.component.css']
})
export class PokemonCardChartComponent {
  @Input() isComparing: boolean;
  @Input()
  set currentPokemon(currentPokemon: Pokemon) {
    this.currentPokemonInformation = currentPokemon;
    if (currentPokemon) {
      this.ChartData(currentPokemon, this.comparisonPokemonInformation);
    }
  }

  @Input()
  set comparisonPokemon(comparisonPokemon: Pokemon) {
    this.comparisonPokemonInformation = comparisonPokemon;
    if (comparisonPokemon) {
      this.ChartData(this.currentPokemonInformation, comparisonPokemon);
    }
  }

  currentPokemonInformation: Pokemon;
  comparisonPokemonInformation: Pokemon;
  barChartType: ChartType = 'doughnut';
  barChartOptions: ChartOptions = chartOptions;
  barChartData: ChartDataSets[];
  barChartLabels: Label[];

  constructor() { }

  ChartData(currentPokemon: Pokemon, comparisonPokemon: Pokemon): void {
    this.barChartLabels = currentPokemon.stats.map((stat) => stat.stat.name);
    const currentPokemonBaseStat = currentPokemon.stats.map((stat) => stat.base_stat);
    this.barChartData = [{
      data: currentPokemonBaseStat,
      label: currentPokemon.name,
      ...barChartPrimaryStyle }];
    if (this.isComparing) {
      const comparisonPokemonBaseStat = comparisonPokemon.stats.map((stat) => stat.base_stat);
      this.barChartData.push({
        data: comparisonPokemonBaseStat,
        label: comparisonPokemon.name,
        ...barChartSecondaryStyle });
    }
  }
}
