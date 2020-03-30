import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //constructor(public navCtrl: NavController) { }
  constructor(public alerCtrl: AlertController) { }


  public othersClicked: boolean = true;//open options
  public closeClicked: boolean = false;//close options

  //close options
  openOptions() { 
    this.othersClicked = !this.othersClicked;
    this.closeClicked = !this.closeClicked;
  }

  //close options
  closeOptions() {
    this.othersClicked = !this.othersClicked;
    this.closeClicked = !this.closeClicked;
  }


  public txtSize: number = 16;//font .txt size
  public mini_txtSize: number = 12;//font .mini-txt size

  //text size option
  textOptions() {
    let txts = document.getElementsByClassName("txt") as HTMLCollectionOf<HTMLElement>;
    let mini_txts = document.getElementsByClassName("mini-txt") as HTMLCollectionOf<HTMLElement>;
    
    
    if (this.txtSize <= 24) {
      this.txtSize += 2;
      this.mini_txtSize += 2;
    } else {
      this.txtSize = 14;
      this.mini_txtSize = 10;
    }

    //for(var i in txts) {
    for(var i = 0; i < txts.length; i++) {
      txts[i].style.fontSize = this.txtSize+'px';
    }

    for(var j = 0; j < mini_txts.length; j++) {
      mini_txts[j].style.fontSize = this.mini_txtSize+'px';
    }
    
  }

}
