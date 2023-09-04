import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RootPage } from './pages/root/root.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CommentComponent } from './components/comment/comment.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ActorinfoComponent } from './components/actorinfo/actorinfo.component';
import { MovieinfoComponent } from './components/movieinfo/movieinfo.component';

import { MoviepicturesComponent } from './components/moviepictures/moviepictures.component';

import { MinicarouselComponent } from './components/minicarousel/minicarousel.component';




@NgModule({
  declarations: [
    RootPage,
    HeaderComponent,
    FooterComponent,
    HomePage,
    MoviesPage,
    CommentComponent,
    CarouselComponent,
    ActorinfoComponent,
    MovieinfoComponent,


  
    MoviepicturesComponent,
    SidebarComponent,
    MinicarouselComponent,


  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
