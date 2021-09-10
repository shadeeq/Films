import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  
  @Input() film;
  @Output() getFilm = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendFilm() {
    this.film.favorite = !this.film.favorite;
    this.getFilm.emit(this.film);
  }

}