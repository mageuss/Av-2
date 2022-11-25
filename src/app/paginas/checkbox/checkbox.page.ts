import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  txtArea: string;
  itemSelecionado: any;
  i = 0;

  constructor() { }

  async enviar(pessoa) {
    if (this.i === 1) {

      this.txtArea = 'você marcou a opção :)';

    } else {
      this.txtArea = 'você marcou não a opção :(';
    }
    console.log(this.itemSelecionado);
  }


  checkbox(event: any) {
    if (event.detail.checked) {

      this.i++;
      console.log(this.i, ` checked`, event);

    } else if (!event.detail.checked) {

      this.i--;
      console.log(this.i, ` unchecked`, event);

    }
  }
  ngOnInit() {
  }

}
