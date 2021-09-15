import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilmService } from '../../film.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  avatar: string;
  @Input() film;
  @Output() getFilm = new EventEmitter();
  constructor(public filmService: FilmService) { }

  ngOnInit() {
    this.avatar = this.filmService.getFilmImg(this.film);
  }

  sendFilm() {
    this.film.favorite = !this.film.favorite;
    this.getFilm.emit(this.film);
  }

  
}