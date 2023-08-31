import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPage } from './pages/root/root.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { EditProfilePage } from './pages/edit-profile/edit-profile.page';
import { MyCommentsPage } from './pages/my-comments/my-comments.page';
import { UpdatePasswordPage } from './pages/update-password/update-password.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children: [
      { path: '', component: LoginPage },
      { path: 'register', component: RegisterPage },
      { path: 'resetpassword', component: ResetPasswordPage },
      { path: 'profile', component: EditProfilePage },
      { path: 'mycomments', component: MyCommentsPage },
      { path: 'updatepassword', component: UpdatePasswordPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
