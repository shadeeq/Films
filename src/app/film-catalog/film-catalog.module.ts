import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilmItemComponent } from './films-list/film-item/film-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './films-list/search/search.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    MainComponent, 
    FilmsListComponent, 
    DetailsComponent, 
    FilmItemComponent,
    SearchComponent
  ]
})
export class FilmCatalogModule { }
