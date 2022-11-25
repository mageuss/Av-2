import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabPage } from './fab.page';

const routes: Routes = [
  {
    path: '',
    component: FabPage
  },
  {
    path: 'input',
    loadChildren: () => import('../input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('../cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'chekbox',
    loadChildren: () => import('../checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabPageRoutingModule {}
