import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RootPage } from './pages/root/root.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { SharedModule } from '../shared/shared.module';
import { ContentcardComponent } from './components/contentcard/contentcard.component';


@NgModule({
  declarations: [
    RootPage,
    HeaderComponent,
    FooterComponent,
    HomePage,
    MoviesPage,
    ContentcardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
