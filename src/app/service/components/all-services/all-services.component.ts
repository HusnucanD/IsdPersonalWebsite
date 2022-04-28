import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/models';
import { State } from 'src/app/shared/services/state.service';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css'],
})
export class AllServicesComponent implements OnInit {
  faAngleDoubleRight = faAngleDoubleRight;
  services: Service[] = [];
  constructor(private state: State) {
    this.services = this.state.services;
  }
  ngOnInit() {}
}
