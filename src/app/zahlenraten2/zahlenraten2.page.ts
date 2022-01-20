import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlenraten2',
  templateUrl: './zahlenraten2.page.html',
  styleUrls: ['./zahlenraten2.page.scss'],
})
export class Zahlenraten2Page implements OnInit {

  gewonnen= false;
  zufallszahl: number;
deineZahl: number;
anzahlVersuche=0;
ergebnis: string;

tblHeaders = ['Versuche', 'Dein Tip', 'Ergebnis'];
arrDeineZahlen: any[]=[];
  constructor() { }

  ngOnInit() {
  }
  neuesSpiel(): void {
    //macht das selbe wie F5
    window.location.reload();
  }
  zufallszahlErmitteln(valueFrom: number, valueTo: number){
    //var x = Math.round(Math.random() * (max - min)) + min;

this.zufallszahl = Math.round(Math.random() * (valueTo - valueFrom)) + valueFrom;
//zufallszahl= 10;
    //alert('von '+valueFrom+' bis '+valueTo+'! Die Zufallszahl ist: '+this.zufallszahl);
    return this.zufallszahl;
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
    this.gewonnen=true;
    //alert(this.ergebnis);
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
      this.arrDeineZahlen.push({anzahlVersuche: this.anzahlVersuche, deinTip: this.deineZahl, deinErgebnis: this.ergebnis});
      console.log(this.arrDeineZahlen);

  //alert(this.deineZahl);
  //this.deineZahl=100;
  //console.log(event);

  }
}
