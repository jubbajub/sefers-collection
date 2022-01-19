import { Component } from '@angular/core';

@Component({
  selector: 'app-zahlenraten',
  templateUrl: './zahlenraten.page.html',
  styleUrls: ['./zahlenraten.page.scss'],
})
export class ZahlenratenPage {
  zufallszahl= 10;
  deineZahl: number;
  anzahlVersuche=0;
  ergebnis: string;
  //TODO
  //deineZahlen: array;

  constructor() {
    
   }

   startTry(event:Event){
  this.anzahlVersuche=this.anzahlVersuche+1;
  if (this.deineZahl==this.zufallszahl)
  {
    this.ergebnis="VOLTREFFER!"
    //alert(this.ergebnis);
  }
  else if(this.deineZahl>this.zufallszahl){
    this.ergebnis="Deine Zahl ist zu GROß!"
    //alert(this.ergebnis);
  }
  else if(this.deineZahl<this.zufallszahl)
  {
    this.ergebnis="Deine Zahl ist zu KLEIN!"
    //alert(this.ergebnis);
  }
  //alert(this.deineZahl);
  //this.deineZahl=100;
  //console.log(event);

}
}
