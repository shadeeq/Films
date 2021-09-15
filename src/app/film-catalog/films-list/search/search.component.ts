import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputData: string = '';
  constructor() { }

  @Output() searchText = new EventEmitter();

  ngOnInit() {
  }

  sendText(data) {
    this.inputData = data;
    this.searchText.emit(this.inputData);
  }
}
