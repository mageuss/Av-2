import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage: string;

  titulo: string;

  constructor(public alertcontroller: AlertController) { }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      header: 'Alert',
      subHeader: 'Mensagem Importante',
      message: 'Isso é um alerta, eba!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Alerta Cancelado'; }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.handlerMessage = 'Alerta Confirmado'; }
        },
      ]
    });

    await alert.present();
  }

  async presentAlertEntrada() {
    const alert = await this.alertcontroller.create({
      header: 'Por favor, entrec com seus dados',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nome',
        },
        {
          placeholder: 'Nickmname (8 caracteres no máximo)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Idade',
          min: 1,
          max: 100,
        },
        {
          type: 'url',
          placeholder: 'Website'
        },
        {
          type: 'textarea',
          placeholder: 'Um pouco sobre você'
        },
      ]
    });

    await alert.present();
  }

  async presendDados() {
    const alert = await this.alertcontroller.create({
      header: 'Qual o título da página?',
      inputs: [
        {
          name: 'txttitulo',
          type: 'text',
          placeholder: 'Titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { console.log('Confimra cancelar?'); }
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log('Confimar OK?', data);
            this.titulo = data.txtTitulo;
          }
        },
      ]
    });
  }

  ngOnInit() {
  }

}
