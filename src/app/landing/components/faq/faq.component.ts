
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

declare const $: any;

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit, AfterViewInit{ 
  title: string;
  text: string;
  buttonText: string;
  questionRows: {
    questions: {
      title: string,
      answer: string
    }[]
  }[];
  faAngleDown = faAngleDown;
  ngOnInit() {
    this.title = "FAQ"
    this.questionRows = [
      {
        questions: [
          {
            title: "Phasellus a lobortis lectus?",
            answer: "Quisque et imperdiet elit. Integer et ornare lectus. Integer auctor, ex a lobortis congue, justo massa placerat metus"
          },
          {
            title: "Non faucibus nisi purus sed enim?",
            answer: "Sed nunc neque, volutpat et feugiat sit amet, molestie non nisi. Nam dapibus, nibh non commodo imperdiet"          
          }
        ]
      },
      {
        questions: [
          {
            title: "Felis mauris lacinia nunc, non vestibulum?",
            answer: "Neque metus in mauris. Morbi ex diam, dignissim vel dictum et, mattis vitae metus. Aliquam et maximus mi"
          },
          {
            title: "Sed pretium aliquet placerat suspendisse?",
            answer: "Elit lorem, volutpat ut ullamcorper ut, suscipit vitae turpis. Suspendisse pretium tempor est, tempor laoreet leo"          
          }
        ]
      },
      {
        questions: [
          {
            title: "Sed ut neque et eros rhoncus accumsan?",
            answer: "Itae at arcu. Nunc posuere eget odio vel volutpat. Integer eget nisl sit amet libero condimentum sagittis. Curabitur aliquet ornare"
          },
          {
            title: "Duis maximus, est sit amet tincidunt condimentum?",
            answer: "Metus dolor fermentum massa, ut porta felis ante et augue. Sed turpis purus, molestie non ornare a, hendrerit a risus"          
          }
        ]
      },     
    ];  
  }
  ngAfterViewInit() {
    for(let i = 0; i < this.questionRows.length; i++) {
      for (let j = 0; j < this.questionRows[i].questions.length; j++) {
        $('#question' + ((i * 2) + j)).click(() => {
          $('#answer' + ((i * 2) + j)).slideToggle();
          $('#question' + ((i * 2) + j)).toggleClass('border-button-question');       
        });
      }
    }
  }
}
