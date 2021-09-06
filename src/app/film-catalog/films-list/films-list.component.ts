import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  favorites: number = 0;
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

  setFavorites(event) {
    this.favorites = event;
  }
  
}
