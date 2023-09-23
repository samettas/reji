import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPage } from './pages/root/root.page';
import { HomePage } from './pages/home/home.page';
import { MoviesPage } from './pages/movies/movies.page';
import { LoginPage } from '../auth/pages/login/login.page';
import { MoviesDetailPage } from './pages/movies-detail/movies-detail.page';
import { ActorDetailPage } from './pages/actor-detail/actor-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'movies',
        component: MoviesPage,
      },
      {
        path: 'movies-detail/:id',
        component: MoviesDetailPage,
      },
      {
        path: 'actor-detail/:id',
        component: ActorDetailPage,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
