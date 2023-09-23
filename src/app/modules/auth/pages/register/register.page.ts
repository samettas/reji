import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  isError: boolean = false;
  Form = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    if (this.Form.valid)
      this.authService.register(
        this.Form.value.email as string,
        this.Form.value.password as string,
        this.Form.value.Name as string
      );
    else this.isError = true;
  }
}
