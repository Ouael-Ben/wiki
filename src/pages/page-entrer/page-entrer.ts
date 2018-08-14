import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
/**
 * Generated class for the PageEntrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-entrer',
  templateUrl: 'page-entrer.html',
})
export class PageEntrerPage {
  @ViewChild(Slides) slides: Slides;
  currentIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', this.currentIndex);
  }
}
