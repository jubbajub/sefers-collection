import { Component } from '@angular/core';

@Component({
  selector: 'app-zahlenraten',
  templateUrl: './zahlenraten.page.html',
  styleUrls: ['./zahlenraten.page.scss'],
})
export class ZahlenratenPage {
  //var x = Math.round(Math.random() * (max - min)) + min;
  zufallszahlVon = 1;
  zufallszahlBis = 10;
  zufallszahl = Math.round(Math.random() * (this.zufallszahlBis - this.zufallszahlVon)) + this.zufallszahlVon;
  //zufallszahl= 10;

  deineZahl: number;
  anzahlVersuche=0;
  ergebnis: string;
  //TODO
  //deineZahlen: array;

  constructor() {
   }

   neuesSpiel(): void {
    window.location.reload();
  }

  startTry(event: Event){
  this.anzahlVersuche=this.anzahlVersuche+1;
  if (this.deineZahl===this.zufallszahl)
  {
    this.ergebnis='VOLTREFFER!';
    //alert(this.ergebnis);
  }
  else if(this.deineZahl>this.zufallszahl){
    this.ergebnis='Deine Zahl ist zu GROß!';
    //alert(this.ergebnis);
  }
  else if(this.deineZahl<this.zufallszahl)
  {
    this.ergebnis='Deine Zahl ist zu KLEIN!';
    //alert(this.ergebnis);
  }
  //alert(this.deineZahl);
  //this.deineZahl=100;
  //console.log(event);

  }
}
