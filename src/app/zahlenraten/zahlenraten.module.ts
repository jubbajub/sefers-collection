import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZahlenratenPageRoutingModule } from './zahlenraten-routing.module';

import { ZahlenratenPage } from './zahlenraten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZahlenratenPageRoutingModule
  ],
  declarations: [ZahlenratenPage]
})
export class ZahlenratenPageModule {}
