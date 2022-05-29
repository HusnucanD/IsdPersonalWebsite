import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css'],
})

export class AdminLoginFormComponent implements OnInit {
  loginForm: FormGroup;
  string: any;
  constructor(private state: State) {
    this.string = this.state.string.admin_adminLoginForm;
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    
  }
  forgetPassword() {
    
  }
}
