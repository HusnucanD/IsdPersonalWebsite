import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.css'],
})
export class AboutContentComponent {
  faAngleRight = faAngleRight;
  educations: {
    title: string;
    subTitle: string;
  }[] = [];
  studies: {
    title: string;
    subTitle: string;
  }[] = [];
  ngOnInit() {
    this.educations.push({
      title: 'Et netus et malesuada fames ac turpis',
      subTitle: 'Tellus cras adipiscing enim eu turpis egestas',
    });
    this.educations.push({
      title: 'Et netus et malesuada fames ac turpis',
      subTitle: 'Molestie ac feugiat sed lectus vestibulum atorine',
    });
    this.educations.push({
      title: 'Mattis ullamcorper velit. Consectetur adipiscing',
      subTitle: 'Pellentesque nec nam aliquam sem et tortor',
    });
    this.educations.push({
      title: 'Imperdiet nulla malesuada pellentesque elit',
      subTitle: 'Eget nulla facilisi etiam dignissim diam quis',
    });
    this.educations.push({
      title: 'Ut sem viverra aliquet eget sit amet tellus potenti',
      subTitle: 'Velit scelerisque in dictum non consectetur',
    });

    this.studies.push({
      title: 'Cursus vitae congue mauris rhoncus aenean vel',
      subTitle: 'Tellus cras adipiscing enim eu turpis egestas',
    });
    this.studies.push({
      title: 'Tortor pretium viverra suspendisse potenti',
      subTitle: 'Molestie ac feugiat sed lectus vestibulum atorine',
    });
    this.studies.push({
      title: 'Quis commodo odio aenean sed adipiscing diam donec',
      subTitle: 'Pellentesque nec nam aliquam sem et tortor',
    });
    this.studies.push({
      title: 'Massa sed elementum tempus egestas sed sed',
      subTitle: 'Eget nulla facilisi etiam dignissim diam quis',
    });
    this.studies.push({
      title: 'Mauris pharetra et ultrices neque ornare aenean euismod',
      subTitle: 'Velit scelerisque in dictum non consectetur',
    });
  }
}
