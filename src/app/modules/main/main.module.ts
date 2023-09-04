import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RootPage } from './pages/root/root.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { SharedModule } from '../shared/shared.module';

import { CommentComponent } from './components/comment/comment.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ActorinfoComponent } from './components/actorinfo/actorinfo.component';



@NgModule({
  declarations: [
    RootPage,
    HeaderComponent,
    FooterComponent,
    HomePage,
    MoviesPage,
    CommentComponent,
    CarouselComponent,
    ActorinfoComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
