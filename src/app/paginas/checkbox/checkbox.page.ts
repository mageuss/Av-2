import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  txtArea: string;
  option: string;
  i = 0;

  constructor() { }

  async enviar() {
    if (this.i <= 1) {

      this.txtArea = 'você marcou ' + this.i + ' opção';

    } else {
      this.txtArea = 'você marcou ' + this.i + ' opções';
    }

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
