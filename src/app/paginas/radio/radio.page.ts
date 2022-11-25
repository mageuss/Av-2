import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {
itemSelecionado: any;
txtArea: string;

  constructor() { }

  async radio(pessoa){
    console.log(this.itemSelecionado);
    this.txtArea = this.itemSelecionado;
  }

  ngOnInit() {
  }

}
