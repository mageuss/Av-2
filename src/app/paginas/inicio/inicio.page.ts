import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'alert-circle-outline',
      nome: 'Alerta',
      link: '/alert'
    },

    {
      icone: 'book-outline',
      nome: 'Páginas',
      link: '/action-sheet'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  icone: string;
  nome: string;
  link: string
}