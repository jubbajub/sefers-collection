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

  tblHeaders = ['Anzahl Versuche', 'Dein Tip'];
  arrDeineZahlen: any[]=[];

  constructor() {
   }

   neuesSpiel(): void {
    //macht das selbe wie F5
    window.location.reload();
  }

  startTry(event: Event){
    //event wird für Zahlenraten nicht benutzt, aber hier werden sehr viele informationen mit übergeben

    this.anzahlVersuche=this.anzahlVersuche+1;
    //das Array arrDeineZahlen erhält einen neuen WErt
    this.arrDeineZahlen.push({anzahlVersuche: this.anzahlVersuche, deinTip: this.deineZahl});
    console.log(this.arrDeineZahlen);


  if (this.deineZahl===this.zufallszahl)
  {
    this.ergebnis='Du hast mit '+this.anzahlVersuche+' versuchen Gewonnen!';
    alert(this.ergebnis);
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
  console.log(event);

  }
}
