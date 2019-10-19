import { Confronto } from './../../confronto.model';
import { TabelaService } from './../tabela.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-holecards',
  templateUrl: './holecards.component.html',
  styleUrls: ['./holecards.component.css']
})
export class HolecardsComponent implements OnInit {

  private background_color = '#A60000'; 
  private border_color = '#7d7676';
  private carta = '';
  @Input() holeCard: Object; 
  @Input() confronto: Confronto; 

  constructor(private tabelaService: TabelaService) {}

  atualizarAcao():void{
    if(this.confronto.acao){
      this.holeCard['acoes'] = this.confronto.acao;
      this.tabelaService.atualizarAcaoHoleCard(this.confronto,this.holeCard['carta'],this.confronto.acao)
                        .subscribe((resposta) => {if(resposta){this.alterarCorPorAcao()};
                                                  });
    }
  }

  

  alterarCor(){
    this.alterarCarta();
    this.alterarCorPorAcao();
    this.alterarCorDaBordaDaCarta();
  }

  alterarCarta(){
    this.carta = this.holeCard['carta'].substring(0,2);
  }

  alterarCorPorNape(){
    var letras = this.holeCard['carta'].split('');
    if(letras.length == 2)
        this.background_color = '#A2A2A2';
    else
        this.background_color = 'rgb(110, 104, 104)';
  }

  alterarCorPorAcao(){
    switch (this.holeCard['acoes']) {
      case ' ':{
        this.background_color = '#A6A6A6';
      break;
      }case 'R':{
        this.background_color = '#33be10';
      break;
      }case 'RC':{
        this.background_color = '#89C7E5';
      break;
      }case 'RR':{
        this.background_color = '#E4973D';
      break;
      }case 'RRC':{
        this.background_color = '#0500FF';
      break;
      }case 'RRR':{
        this.background_color = '#FF0002';
      break;
      }default:{
        this.alterarCorPorNape();
      break;
      }
    }
  }

  alterarCorDaBordaDaCarta(){
    var holecard = this.retornarCartaDoHeroi();
    
    if(holecard == this.holeCard['carta']){
      this.border_color = '#FFF';
    }
  }

  retornarCartaDoHeroi():string{
    var holecard = "";
    var figuras = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    var cartas = this.confronto.heroi_combo.split("-");

    if(this.confronto.heroi_combo != ''){
      var index_carta_0 = figuras.indexOf(cartas[0][0])
      var index_carta_1 = figuras.indexOf(cartas[1][0])
      if(cartas[0][1] == cartas[1][1]){
        if(index_carta_0 > index_carta_1)
          holecard = "".concat(cartas[0][0],cartas[1][0],"s");
        else
          holecard = "".concat(cartas[1][0],cartas[0][0],"s");
      }else{
        if(index_carta_0 == index_carta_1){
          holecard = "".concat(cartas[0][0],cartas[1][0]);
        }else{
          if(index_carta_0 > index_carta_1)
            holecard = "".concat(cartas[0][0],cartas[1][0],"o");
          else
            holecard = "".concat(cartas[1][0],cartas[0][0],"o");
        }
      }
    }
    return holecard
  }
  
  ngOnInit() {
    this.alterarCor();
  }

}
