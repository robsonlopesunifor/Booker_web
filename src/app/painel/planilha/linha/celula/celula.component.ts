import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-celula',
  templateUrl: './celula.component.html',
  styleUrls: ['./celula.component.css']
})
export class CelulaComponent implements OnChanges {

  private valor: string;
  private estilo: string;
  @Input() classe: string;
  @Input() chave: string;
  @Input() linha:object;
  @Input() ordem: number;
  
  constructor() { }

  estruturarPorTipo():void{
    switch(this.classe){
      case ('fichas'):
        this.estruturarJogada()
      break;
      case ('aposta'):
        this.estruturarJogada()
      break;  
      case ('board'):
        this.estruturarBoard()
      break; 
      case ('pote'):
        this.estruturarPote()
      break;  
      case ('linha'):
        this.estruturarLinha()
      break;  
      case ('analize'):
        this.estruturarAnalize()
      break;  
    }
  }

  estruturarPote():void{
    this.valor = this.linha[this.chave];

    if(this.chave == 'pote')
      this.estilo = 'pote';
    else if(this.chave == 'pote_rodada')
      this.estilo = 'pote_rodada';
  }

  estruturarBoard():void{
    var carta = this.linha[this.chave];
    var nape = carta.substr(0,1);
    var numero = carta.substr(1,1);
    this.valor = numero

    if(nape == 'O')
      this.estilo = 'ouros';
    else if(nape == 'C')
      this.estilo = 'copas';
    else if(nape == 'P')
      this.estilo = 'paus';
    else if(nape == 'E')
      this.estilo = 'espada';
    else
      this.estilo = 'sem_nape';
  }

  estruturarJogada():void{
    this.valor = this.linha[this.chave];
    var aposta_valida = "valido_"+this.chave;
    var string_separado = this.chave.split("_");
    var letra = string_separado[1];
    var hole_cards = "hole_cards_"+letra;
    var vez = "vez_"+letra;
    if(this.linha[aposta_valida] == false){
      this.estilo = 'erro';
    }else if(this.linha[hole_cards] == true){
      this.estilo = 'cinza';
    }else if(this.linha[vez] == true){
      if(this.ordem == 1 )
        this.estilo = 'vez_escuro';
      else
        this.estilo = 'vez_claro';
    }else{
      if(this.ordem == 1 )
        this.estilo = 'verde_escuro';
      else
        this.estilo = 'verde_claro';
    }
  }

  estruturarLinha():void{
    console.log(this.linha[this.chave])
    if(this.linha[this.chave] == null){
      this.estilo = 'linha_null';
    }else if(this.linha[this.chave] == 'nova'){
      this.estilo = 'linha_nova';
    }else if(this.linha[this.chave] == 'descartavel'){
      this.estilo = 'linha_descartavel';
    }
  }

  estruturarAnalize():void{
    this.valor = this.linha[this.chave];
    var acao = this.linha['nome_acao'];
    if(this.valor == 'null' || this.valor == '0')
      this.valor = '';
    
    if(acao == 'FOLD'){
      if(this.ordem == 1)
        this.estilo = 'analize analize_cinza_escuro';
      else if(this.ordem == 2)
        this.estilo = 'analize analize_cinza_claro';
    }else if(acao == 'RAISE'){
      if(this.ordem == 1)
        this.estilo = 'analize analize_vermelho_escuro';
      else if(this.ordem == 2)
        this.estilo = 'analize analize_vermelho_claro';
    }else if(acao == 'CALL'){
      if(this.ordem == 1)
        this.estilo = 'analize analize_azul_escuro';
      else if(this.ordem == 2)
        this.estilo = 'analize analize_azul_claro';
    }else if(acao == 'CHECK'){
      if(this.ordem == 1)
        this.estilo = 'analize analize_roxo_escuro';
      else if(this.ordem == 2)
        this.estilo = 'analize analize_roxo_claro';
    }else{
      this.estilo = 'analize analize_null';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      if(propName == 'linha')
        this.estruturarPorTipo()
    }
  }

}
