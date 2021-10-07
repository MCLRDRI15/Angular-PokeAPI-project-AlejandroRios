import { Component, Input } from '@angular/core';

@Component({
  selector: 'little-chart-message',
  templateUrl: './info-message.component.html',
  styleUrls: ['./info-message.component.css']
})
export class LittleChartComponent {
  @Input() comparingMessage: string;
  @Input() pokemonName: string;

  constructor() { }
}