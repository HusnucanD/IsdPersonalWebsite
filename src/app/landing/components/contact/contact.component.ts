
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit{ 
  imgUrl: string;
  title: string;
  text: string;
  buttonText: string;
  ngOnInit() {
    this.imgUrl = '../../../../assets/img/contact-icon.svg';
    this.title = 'Got a Question';
    this.text = 'Contact us for any questions or making an appointment';
    this.buttonText = 'Contact';
  }
}
