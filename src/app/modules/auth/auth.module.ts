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
import { VerifyEmailPage } from './pages/verify-email/verify-email.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  providers: [AuthService, AuthGuard],
  declarations: [
    RootPage,
    LoginPage,
    RegisterPage,
    InputComponent,
    ResetPasswordPage,
    SidebarComponent,
    EditProfilePage,
    UpdatePasswordPage,
    MyCommentsPage,
    VerifyEmailPage,
  ],
  imports: [FormsModule, CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
