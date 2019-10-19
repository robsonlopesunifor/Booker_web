import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnChanges {

  constructor() { }

  private valores = ['A','K','Q','J','T','9','8','7','6','5','4','3','2']

  private nape = ['O','P','E','C']

  @Input() board:object = {}

  private indisponivel = [{'valor':'T','nape':'c'},
                          {'valor':'A','nape':'o'},
                          {'valor':'K','nape':'p'},
                          {'valor':'7','nape':'e'},
                          {'valor':'T','nape':'o'},
                          {'valor':'2','nape':'o'},
                          {'valor':'4','nape':'e'},
                          {'valor':'7','nape':'p'}]
  
  private baralho:object = []

  gerarBaralho():void{
    var lado = 'esquerdo';
    var quantidade_de_cartas = 0
    for(var i=0;i < this.valores.length;i++){
      for(var j=0;j < this.nape.length;j++){
        this.baralho[quantidade_de_cartas] = {'valor':this.valores[i],
                                              'nape':this.nape[j],
                                              'board':this.estaBoard(this.valores[i],this.nape[j]),
                                              'disponivel':this.estaIndisponivel(this.valores[i],this.nape[j])}
        quantidade_de_cartas += 1;
      }
    }
  }

  estaBoard(valor,nape):boolean{
    for(var i=0;i < Object(this.board['cartas']).length;i++){
      if(this.board['cartas'][i]['valor'] == valor && this.board['cartas'][i]['nape'] == nape)
        return true;
    }
    return false;
  }

  estaIndisponivel(valor,nape):boolean{
    for(var i=0;i < this.indisponivel.length;i++){
      if(this.indisponivel[i].valor == valor && this.indisponivel[i].nape == nape)
        return false;
    }
    return true;
  }

  ngOnChanges() {
    this.gerarBaralho();
  }

}
