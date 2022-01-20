import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Zahlenraten2PageRoutingModule } from './zahlenraten2-routing.module';

import { Zahlenraten2Page } from './zahlenraten2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Zahlenraten2PageRoutingModule
  ],
  declarations: [Zahlenraten2Page]
})
export class Zahlenraten2PageModule {}
