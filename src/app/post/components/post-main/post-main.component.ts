
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.css']
})

export class PostMainComponent {
  constructor(private router: Router) {

  }
  titleClicked() {
    this.router.navigate(["/blog"]);
  }
}
