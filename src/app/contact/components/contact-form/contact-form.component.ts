import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/services/state.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  string: any;
  constructor(private state: State) {
    this.string = this.state.string.contact_contactForm;
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telephone: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    
  }
}
