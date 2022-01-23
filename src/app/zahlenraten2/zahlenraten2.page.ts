import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

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
deinName: string;
valueFrom: number;
valueTo: number;

spielBeginnZeit: number;
spielEndeZeit: number;
spieldauer: number;


// timestampErgebnis: Date();

tblHeaders = ['Versuche', 'Dein Tip', 'Ergebnis', 'Zeitstempel'];
arrDeineZahlen: any[]=[];
  constructor() { }

  ngOnInit() {
  }
  neuesSpiel(): void {
    //macht das selbe wie F5
    window.location.reload();
  }
  zufallszahlErmitteln(valueFrom: number, valueTo: number){
    if (!this.deinName){
      alert('Du musst Deinen Namen eingeben. Wird für Highscore benötigt!');
    return null;}

    this.valueFrom=valueFrom;
    this.valueTo=valueTo;
    
    //console.log('Spielbeginnzeit: '+this.spielBeginnZeit);
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
           this.arrDeineZahlen.push({
            anzahlVersuche: this.anzahlVersuche,
           deinTip: this.deineZahl,
           deinErgebnis: this.ergebnis,
           zeitStempel: Date.now()
          });
          console.log(this.arrDeineZahlen);
          const i=this.arrDeineZahlen.length-1;
  this.spielBeginnZeit=this.arrDeineZahlen[0].zeitStempel;
  this.spielEndeZeit=this.arrDeineZahlen[i].zeitStempel;
  this.spieldauer=this.spielEndeZeit-this.spielBeginnZeit;

  //alert("Spieldauer: "+this.spieldauer);
  //this.deineZahl=100;
  //console.log('Console.Log: '+i);

  }
}
