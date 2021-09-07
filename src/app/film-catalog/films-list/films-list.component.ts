import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  favorites = [];
  films: any;
  sortMethod = '';
  constructor(public filmService: FilmService) {   
  }

  sortFilms() {
    switch (this.sortMethod) {
      case 'ASC':   
        this.films.sort((a,b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      case 'DESC':    
        this.films.sort((a,b) => {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        }).reverse();
        break;
    }
  }
  
  ngOnInit() { 
    this.films = this.filmService.getData();
  }

  setFavorites(film) {
    if (this.favorites.find(filmInFav => filmInFav.id === film.id)) {
      const filmIndex = this.favorites.findIndex(filmInFav => filmInFav.id === film.id);
      this.favorites.splice(filmIndex, 1);
    } else {
      this.favorites.push(film);
    }
  }
  
}
