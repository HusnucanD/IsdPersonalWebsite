import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  title: string = '';
  subTitle: string = '';
  content: string = '';
  constructor(
    private state: State,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let service = this.state.services.find((x) => x.link == params['link']);
      if (service != undefined) {
        this.title = service.title;
        this.subTitle = service.subTitle;
        this.content = service.content;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
