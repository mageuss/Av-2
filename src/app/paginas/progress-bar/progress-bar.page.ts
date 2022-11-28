import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  barra: 0;

  constructor() { };

  async barraProgresso(){

    if(this.barra < 1){
      this.barra += 0.1;
    }else{
      this.barra = 0;
    };

  }

  ngOnInit() {
  };

}
