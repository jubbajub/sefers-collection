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

  tblHeaders = ['Anzahl Versuche', 'Dein Tip', 'Ergebnis'];
  arrDeineZahlen: any[]=[];

  constructor() {
   }

   neuesSpiel(): void {
    //macht das selbe wie F5
    window.location.reload();
  }

  startTry(event: Event){
    //event wird für Zahlenraten nicht benutzt, aber hier werden sehr viele informationen mit übergeben

   //TODO -->Doppelte Zahlen sollte man nicht eingeben können! 
  //  const deineZahlDoppelt = this.arrDeineZahlen.find({deinTip} => deinTip === this.deineZahl);
  //  console.log(deineZahlDoppelt);
  //  if (deineZahlDoppelt){ 
  //   alert('Diese Zahl hast du schonmal eingegeben!');
  //   return null;
  // }

    if (!this.deineZahl){ 
    alert('Du musst eine Zahl eingeben, sonst passiert nichts');
    return null;
  }

    this.anzahlVersuche=this.anzahlVersuche+1;

  if (this.deineZahl===this.zufallszahl)
  {
    this.ergebnis='Mit '+this.anzahlVersuche+' versuchen Gewonnen!';
    alert(this.ergebnis);
  }
  else if(this.deineZahl>this.zufallszahl){
    this.ergebnis='zu GROß!';
    //alert(this.ergebnis);
  }
  else if(this.deineZahl<this.zufallszahl)
  {
    this.ergebnis='zu KLEIN!';
    //alert(this.ergebnis);
  }
      //das Array arrDeineZahlen erhält einen neuen WErt
      this.arrDeineZahlen.push({
        anzahlVersuche: this.anzahlVersuche,
       deinTip: this.deineZahl,
       deinErgebnis: this.ergebnis,
      });
      console.log(this.arrDeineZahlen);

  //alert(this.deineZahl);
  //this.deineZahl=100;
  //console.log(event);

  }
}
