import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jogada',
  templateUrl: './jogada.component.html',
  styleUrls: ['./jogada.component.css']
})
export class JogadaComponent implements OnInit {

  @Input() jogada:object = { 'acao':'REICE',
                             'jogada':'OR',
                             'bliad':3,
                             'pote':0.5}

  private estilos:object = {
    RAISE:'#F3436D',
    CALL:'#40ABE0',
    CHECK:'#CFCDCD',
    FOLD:'#444'
  }

  private estilo_da_jogada:object = {
    cor_acao:this.estilos['CHECK'],
    altura_barra:'40px'
  }

  constructor() { }

  carregarEstiloJogada():void{
    var acao = this.jogada['acao'];
    var estilo = this.estilos[acao];
    this.estilo_da_jogada['cor_acao'] = estilo;
    this.estilo_da_jogada['altura_barra'] = (this.jogada['bliad']*4)+"px";
    this.jogada['jogada'] = this.jogada['jogada'].toLowerCase();
  }

  ngOnInit() {
    this.carregarEstiloJogada()
  }

}
