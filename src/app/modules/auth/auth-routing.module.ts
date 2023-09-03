import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPage } from './pages/root/root.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { EditProfilePage } from './pages/edit-profile/edit-profile.page';
import { MyCommentsPage } from './pages/my-comments/my-comments.page';
import { UpdatePasswordPage } from './pages/update-password/update-password.page';
import { VerifyEmailPage } from './pages/verify-email/verify-email.page';

const routes: Routes = [
  {
    path: '',
    component: RootPage,
    children: [
      { path: '', component: LoginPage },
      { path: 'register', component: RegisterPage },
      { path: 'reset-password', component: ResetPasswordPage },
      { path: 'profile', component: EditProfilePage },
      { path: 'my-comments', component: MyCommentsPage },
      { path: 'update-password', component: UpdatePasswordPage },
      { path: 'verify-email', component: VerifyEmailPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
