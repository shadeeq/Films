import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  
  @Input() film;
  @Output() getFavorites = new EventEmitter();
  isFilmAdded = false;
  constructor() { }

  ngOnInit() {
  }

  sendFilm() {
    this.getFavorites.emit(this.film);
    this.isFilmAdded = !this.isFilmAdded;
  }

}