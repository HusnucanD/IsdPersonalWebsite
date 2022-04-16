import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css'],
})
export class ServiceMainComponent {
  string: any;
  constructor(private router: Router, private state: State) {
    this.string = this.state.string.service_serviceMain;
  }
  titleClicked() {
    this.router.navigate(['/blog']);
  }
}
