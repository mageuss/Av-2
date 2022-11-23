import { Component, OnInit } from '@angular/core';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
txtInput: string;
txtArea: string;


  constructor() { }

  async presentEnviar(){

    this.txtArea = this.txtInput;

    console.log(this.txtInput);
  }

  ngOnInit() {
  }


}
