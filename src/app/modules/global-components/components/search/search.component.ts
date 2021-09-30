import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() inputChange = new EventEmitter<string>();

  constructor() { }

  inputHandler(input: string): void {
    this.inputChange.emit(input);
  }
}
