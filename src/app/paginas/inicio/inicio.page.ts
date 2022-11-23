import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [

    {
      icone: '',
      nome: 'Cards',
      link: '/cards'
    },
    {
      icone: '',
      nome: 'Check Box',
      link: '/checkbox'
    },

    {
      icone: '',
      nome: 'Fab',
      link: '/fab'
    },

    {
      icone: '',
      nome: 'Progess Bar',
      link: '/progress-bar'
    },

    {
      icone: '',
      nome: 'Radio',
      link: '/radio'
    },

    {
      icone: '',
      nome: 'Inputs',
      link:'/input'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}

interface Componente{
  icone: string;
  nome: string;
  link: string;
}
