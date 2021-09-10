import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  endOfList = false;
  displayCount = 4;
  inputData: string = '';
  showLoadButton = true;
  favorites = [];
  films: any;
  allFilms = [];
  sortMethod = '';
  constructor(public filmService: FilmService) {   
  }

  ngOnInit() { 
    this.films = this.filmService.getData(this.displayCount);
  }

  findFilm(data) {
    this.inputData = data.toLowerCase();
    this.allFilms = this.filmService.getData();
    if (this.inputData.length > 1) {
      this.films = this.allFilms.filter(film => {
        if (film.name.toLowerCase().includes(this.inputData)) {
          this.showLoadButton = false;
          return true;
        }
      });
    } else {
      this.films = this.filmService.getData(this.displayCount);
      this.showLoadButton = true;
      this.sortFilms();
    }
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
  
  setFavorites() {
    this.favorites = this.films.filter(item => item.favorite);
  }

  loadMore() {
    this.displayCount = this.displayCount + 4;
    this.films = this.filmService.getData(this.displayCount);
    this.sortFilms();
    if (this.displayCount >= this.filmService.getData().length) {
      this.endOfList = true;
    }
  }
  
}