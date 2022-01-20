import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zahlenraten2Page } from './zahlenraten2.page';

const routes: Routes = [
  {
    path: '',
    component: Zahlenraten2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zahlenraten2PageRoutingModule {}
