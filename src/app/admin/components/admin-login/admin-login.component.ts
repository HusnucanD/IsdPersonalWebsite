import { Component } from '@angular/core';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})

export class AdminLoginComponent {
  string: any;
  constructor(private state: State) {
    this.string = this.state.string.admin_adminLogin;
  }
}
