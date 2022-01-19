import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZahlenratenPage } from './zahlenraten.page';

const routes: Routes = [
  {
    path: '',
    component: ZahlenratenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZahlenratenPageRoutingModule {}
