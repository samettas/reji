import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  Form = this.fb.group({
    email: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,

    private fb: FormBuilder
  ) {}

  onSubmit() {
    this.authService.resetpassword(this.Form.value.email as string);
  }
}
