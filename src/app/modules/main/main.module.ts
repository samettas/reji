import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RootPage } from './pages/root/root.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { SharedModule } from '../shared/shared.module';

import { ContentPreviewComponent } from './components/content-preview/content-preview.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { CommentComponent } from './components/comment/comment.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ActorinfoComponent } from './components/actorinfo/actorinfo.component';
import { MovieinfoComponent } from './components/movieinfo/movieinfo.component';

import { MoviepicturesComponent } from './components/moviepictures/moviepictures.component';

import { MinicarouselComponent } from './components/minicarousel/minicarousel.component';
import { ActorcardComponent } from './components/actorcard/actorcard.component';
import { ContentcardComponent } from './components/contentcard/contentcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetailPage } from './pages/movies-detail/movies-detail.page';
import { ActorDetailPage } from './pages/actor-detail/actor-detail.page';





@NgModule({
  declarations: [
    RootPage,
    HeaderComponent,
    FooterComponent,
    HomePage,
    MoviesPage,
    ContentPreviewComponent,
    CommentComponent,
    CarouselComponent,
    ActorinfoComponent,
    MoviepicturesComponent,
    MovieinfoComponent,
    SidebarComponent,
    MinicarouselComponent,
    ActorcardComponent,
    ContentcardComponent,
    MoviesDetailPage,
    ActorDetailPage,
    



  ],
  imports: [
    FormsModule,
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
