import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './modules/auth/pages/login/login.page';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
