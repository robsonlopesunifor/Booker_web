import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Confronto } from './confronto.model';

@Component({
  selector: 'app-caixa-tabela',
  templateUrl: './caixa-tabela.component.html',
  styleUrls: ['./caixa-tabela.component.css']
})
export class CaixaTabelaComponent implements OnChanges {

  @Input() tabela:object;
  @Input() estilo:object;
  public confronto = new Confronto();
  private historico:object;
  private sinal:object;

  constructor() { }

  alterarConfronto(confronto:Confronto):void{
    this.confronto = confronto;
  }

  estruturarConfronto():void{
    this.confronto.carregar(this.tabela['confronto']);
    this.historico = this.tabela['historico'];
    this.sinal = this.tabela['sinal'];
  }

  ngOnChanges() {
    this.estruturarConfronto()
  }

}
