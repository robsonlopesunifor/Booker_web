import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.css']
})
export class LinhaComponent implements OnChanges {

  @Input() linha:object;
  private letras_ordenada:string[] = ['A','B','C','D','E','F'];
  private board:string[] = ['bord_FLOP_1','bord_FLOP_2','bord_FLOP_3','bord_TURN','bord_RIVER']
  private apostas:string[];
  private fichas:string[];

  constructor() { }

  estruturarJogadas():void{
    this.gerarFichas();
    this.gerarApostas();
  }

  gerarFichas():void{
    this.fichas = []
    for(let letra of this.letras_ordenada){
      var ficha = 'fichas_'+letra
      this.fichas.push(ficha)
    }
  }

  gerarApostas():void{
    this.apostas = []
    for(let letra of this.letras_ordenada){
      var aposta = 'aposta_'+letra
      this.apostas.push(aposta)
    }
  }

  ordenarLetrasPeloDiler():void{
    var letras:string[] = ['A','B','C','D','E','F']
    for(let letra of letras){
      var diler = "diler_"+letra
      var primeira_letra = this.letras_ordenada.shift();
      this.letras_ordenada.push(primeira_letra);
      if(this.linha[diler] == true)
        break 
    }
  }

  mostrarLinha():void{
    console.log(this.linha);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ordenarLetrasPeloDiler();
    this.estruturarJogadas();
  }

}
