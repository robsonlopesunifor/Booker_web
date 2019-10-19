import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapaService } from './../mapa.service';

@Component({
  selector: 'app-caixa-cabecario',
  templateUrl: './caixa-cabecario.component.html',
  styleUrls: ['./caixa-cabecario.component.css']
})
export class CaixaCabecarioComponent implements OnInit {

  @Input() tela:number;
  @Input() data:String;
  @Output() enviar = new EventEmitter() 

  private fichario:Object;
  private jogada_por_mao:Object;
  private quantidade_de_jogadas:number = 0;

  private timer:Object = {
    timerId:'',
    intervalo:1000,
    ativo:false
  };

  private painel:Object = {
    total_maos:0,
    total_jogadas:0,
    mao_atual:0,
    jogada_atual:0
  };

  private cordenadas:Object = {
    data:'',
    tela:0,
    mao:1,
    jogada:1
  }

  constructor(private MapaService:MapaService) { }


  atualizacaoIntervalada():void{
    if(this.timer['ativo'] == false){
      this.timer['ativo'] = true;
      clearInterval(this.timer['timerId'])
      this.timer['timerId'] = setInterval(() => this.atualizarFicharioSeExisterNovasJogadas(), this.timer['intervalo']);
    }else{
      this.timer['ativo'] = false;
      clearInterval(this.timer['timerId'])
    }
  }

  atualizarFicharioSeExisterNovasJogadas():void{
    this.MapaService.quantidadeJogadaPorTelaData(this.tela,this.data)
                          .subscribe((quantidade_atual) => { 
                            this.atualizarFicharioSeQuantidadeDeJogadaForDiferente(quantidade_atual)
                            });
  }

  atualizarFicharioSeQuantidadeDeJogadaForDiferente(quantidade_atual):void{
    if(this.quantidade_de_jogadas != quantidade_atual){
      this.ficharioMasRecente()
      this.quantidade_de_jogadas = quantidade_atual
    }
  }

  ficharioMasRecente():void{
    this.MapaService.ficharioMasRecente(this.cordenadas['tela'])
                          .subscribe((fichario) => { this.fichario = fichario;
                                                     this.enviar.emit(this.fichario) });
  }

  
  ngOnInit() {
    
  }

}
