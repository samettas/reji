import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RootPage } from './pages/root/root.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { InputComponent } from './components/input/input.component';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditProfilePage } from './pages/edit-profile/edit-profile.page';
import { UpdatePasswordPage } from './pages/update-password/update-password.page';
import { MyCommentsPage } from './pages/my-comments/my-comments.page';


@NgModule({
  declarations: [
    RootPage,
    LoginPage,
    RegisterPage,
    InputComponent,
    ResetPasswordPage,
    SidebarComponent,
    EditProfilePage,
    UpdatePasswordPage,
    MyCommentsPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
