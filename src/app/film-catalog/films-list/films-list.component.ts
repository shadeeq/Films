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
  selected = '';
  constructor(public filmService: FilmService) {   
  }

  setUpdatedValue(){
    this.films = this.filmService.getData();
  }

  sortFilms() {
    switch (this.selected) {
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
    this.setUpdatedValue()
  }

  setFavorites(film) {
    if (this.favorites.find(filmInFav => filmInFav.id === film.id)) {
      return null;
    } else {
      this.favorites.push(film);
    }
  }
  
}
