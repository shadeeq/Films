import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';


@Component({
  selector: '.app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  loading: boolean = true;
  searchArr = [];
  inputData: string = '';
  showLoadButton = true;
  favorites = [];
  dataToDisplay = [];
  page: number = 1;
  displayOption = 'Films';

  constructor(public filmsService: FilmService) {   
  }

  getFilmsData() {
    this.loading = true;
    this.filmsService.getPopularFilms(this.page).subscribe(
      (filmList: any) => {
        this.dataToDisplay = [...this.dataToDisplay, ...filmList.results];
        this.searchArr = this.dataToDisplay;
        this.loading = false;
      },
      err => {
        console.log("error");
      }
    )
  }

  getActorsData() {
    this.loading = true;
    this.filmsService.getPopularActors(this.page).subscribe(
      (actorList: any) => {
        this.dataToDisplay = [...this.dataToDisplay, ...actorList.results];
        this.loading = false;
      },
      err => {
        console.log("error");
      }
    )
  }

  ngOnInit() {
    this.getFilmsData(); 
  }

  findFilm(data) {
    this.inputData = data.toLowerCase();
    if (this.inputData.length > 1) {
      this.dataToDisplay = this.searchArr.filter(film => {
        if (film.original_title.toLowerCase().includes(this.inputData)) {
          this.showLoadButton = false;
          return true;
        }
      });
    } else {
      this.dataToDisplay = this.searchArr;
      this.showLoadButton = true;
    }
  }

  displayCategory() {
    this.page = 1;
    this.dataToDisplay = [];
    this.favorites = [];
    (this.displayOption === 'Films') ? this.getFilmsData() : this.getActorsData();
  }
  
  setFavorites() {
    this.favorites = this.dataToDisplay.filter(item => item.favorite);
  }

  loadMore() {
    this.page++;
    (this.displayOption === 'Films') ? this.getFilmsData() : this.getActorsData();
  }
  
}