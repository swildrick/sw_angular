import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {

  slides = [
    {title: "General Mills - Do good. Snack good.", img: "../../assets/images/gm.png", des:"Do good. Snack good. was a custom trivia game promotion about General Mills products. Users were awarded points for each correct answer and that in turn helped donate full meals to Feeding America. Total donation amount was displayed on a dynamic progress indicator.", url:" "},
    {title: "Kia Front Row - Seltos", img: "../../assets/images/kia.png", des:"Users who registered for the promotion were able to play a video trivia challenge and take a chance on spinning a wheel to receive an instant prize.", url:" "},
    {title: "Lipton - Sunny Sunday", img: "../../assets/images/lipton.png", des:"Once a user purchased a bottle of Lipton Ice Tea they were asked to enter the code found under the cap into the site for a chance to win various prizes.", url:" "},
    {title: "Dr Suess' Express Yourself! Sweepstakes", img: "../../assets/images/suess.png", des:"Essay contest where users would upload their own illustrations or photo for a chance to be awarded a $10,000 scholarship. Users could vote for their favorite nominee daily, and earned an entry for a chance to win $500 for each vote they cast.", url:" "},
    {title: "Mountain Dew - The Diet Dew Crew & You Sweepstakes", img: "../../assets/images/mtd.png", des:"Users registered and were asked to complete activities to earn sweepstake entries in order to win a chance to practice with Dale Earnhardt Jr.'s pit crew.", url:" "},
  ];


  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  
  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    //console.log('slick initialized');
  }
  
  breakpoint(e) {
    //console.log('breakpoint');
  }
  
  afterChange(e) {
    //console.log('afterChange');
  }
  
  beforeChange(e) {
    //console.log('beforeChange');
  }

  constructor() {
    //console.log("hit");           
  } 

  ngOnInit(): void {
    //console.log("hit2");
  }

}