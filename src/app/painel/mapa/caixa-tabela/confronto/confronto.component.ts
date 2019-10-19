import { Component, OnInit, Input,Output,EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { Confronto } from './../confronto.model';

@Component({
  selector: 'app-confronto',
  templateUrl: './confronto.component.html',
  styleUrls: ['./confronto.component.css']
})
export class ConfrontoComponent implements OnChanges {

  @Output() enviar = new EventEmitter();
  @Input() confronto:Confronto;
  private posicoes:string[] = ['UTG','MP','CO','BTN','SB','BB'];

  private estilos:object = {
    inativo:'#CFCDCD',
    esquerda_inativa:'#BADCED',
    esquerda_ativa:'#40ABE0',
    heroi:'#F3436D',
    direita_inativa:'#F0DFCA',
    direita_ativa:'#E4973D'
  }

  private estilo_das_posicoes:object = {
    SB:this.estilos['inativo'],
    BB:this.estilos['inativo'],
    UTG:this.estilos['inativo'],
    MP:this.estilos['inativo'],
    CO:this.estilos['inativo'],
    BTN:this.estilos['inativo']
  }

  constructor() { }

  alterarConfronto(posicao){
    if(this.confronto.posicao_heroi == '')
      this.confronto.posicao_heroi = posicao;
    else if(this.confronto.posicao_vilao == '')
      this.confronto.posicao_vilao = posicao;
    else if(posicao == this.confronto['posicao_heroi'])
      this.confronto.posicao_heroi = '';
    else if(posicao == this.confronto['posicao_vilao'])
      this.confronto.posicao_vilao = '';
    var novo_confronto = new Confronto(); // dessa forma ele ativa o OnChange
    novo_confronto.carregar(this.confronto);
    this.enviar.emit(novo_confronto);
    this.carregarEstiloConfronto();
  }

  alterarAcao(acao):void{ // dessa forma ele não ativa o OnChange
    this.confronto.acao = acao;
    this.enviar.emit(this.confronto);
  }

  carregarEstiloConfronto():void{
    var lado:String = 'esqueda';
    for(let key in this.estilo_das_posicoes){
      if(key == this.confronto.posicao_heroi){
        this.estilo_das_posicoes[key] = this.estilos['heroi'];
        lado = 'direita';
      }else if(key == this.confronto.posicao_vilao){
        if(lado == 'esqueda')
          this.estilo_das_posicoes[key] = this.estilos['esquerda_ativa']
        else
          this.estilo_das_posicoes[key] = this.estilos['direita_ativa']
      }else{
        if(lado == 'esqueda')
          this.estilo_das_posicoes[key] = this.estilos['esquerda_inativa']
        else
          this.estilo_das_posicoes[key] = this.estilos['direita_inativa']
      }
    }
  }

  ordenarPosicao():void{
    if(this.confronto['board_etapa'] == "PRE_FLOP")
      this.posicoes = ['UTG','MP','CO','BTN','SB','BB']
    else
      this.posicoes = ['SB','BB','UTG','MP','CO','BTN']
  }

  ngOnChanges() {
    this.ordenarPosicao();
    this.carregarEstiloConfronto();
  }

}
