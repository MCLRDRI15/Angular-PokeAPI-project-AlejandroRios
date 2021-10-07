import { Component, Input } from '@angular/core';

@Component({
  selector: 'favorite-message-message',
  templateUrl: './favorite-pokemon-message.component.html',
  styleUrls: ['./favorite-pokemon-message.component.css']
})
export class FavoriteMessageComponent {
  @Input() message: string;

  constructor() { }
}
