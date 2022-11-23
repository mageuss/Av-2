import { Component, OnInit } from '@angular/core';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
texto:string;
  constructor() { }

  async presentEnviar(){
    console.log(this.texto)
  }

  ngOnInit() {
  }

}
