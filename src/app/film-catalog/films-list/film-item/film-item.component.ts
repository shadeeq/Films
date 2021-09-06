import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film;
  @Input() favorites;
  @Output() getFavorites = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  incFav() {
    ++this.favorites;
    this.getFavorites.emit(this.favorites);
  }

}
