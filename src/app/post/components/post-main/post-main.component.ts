import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css'],
})
export class PostMainComponent {
  string: any;
  constructor(private router: Router, private state: State) {
    this.string = this.state.string.post_postMain;
  }
  titleClicked() {
    this.router.navigate(['/blog']);
  }
}
