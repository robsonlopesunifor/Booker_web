import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Output() enviar = new EventEmitter() 
  private jogada_por_mao:Object;
  private selecionados:Object = {}
  private cordenadas:Object = {
    telas:{itens:[0,1,2,3],atual:0},
    data:{ano:2019,mes:10,dia:5},
    maos:{
          total:0,
          itens:[],
          atual:0,
          id:0,
          pivo:0,
          salto:28,
          faixa:27
        },
    jogadas:{
          total:0,
          itens:[],
          atual:0,
          pivo:0,
          salto:7,
          faixa:13
    },    
  };

  constructor(private TimelineService:TimelineService) { }

  totalDeJogadasPorMaos():void{
    var data = this.cordenadas['data']
    var tela = this.cordenadas['telas']['atual']
    this.TimelineService.totalDeJogadasPorMesa(data,tela)
                          .subscribe((jogada_por_mao) => {
                              this.jogada_por_mao = jogada_por_mao;
                              this.cordenadas['maos']['total'] = jogada_por_mao['length'];
                              this.cordenadas['maos']['atual'] = 0;
                              this.cordenadas['jogadas']['total'] = this.jogada_por_mao[0][1];
                              this.cordenadas['jogadas']['atual'] = 0;
                              this.selecionados = {}
                              this.preencher('maos');
                              this.preencher('jogadas');
                          });
  }

  preencher(agente:string):void{
    this.cordenadas[agente]['itens'] = []
    for(var _i = 1; _i <= this.cordenadas[agente]['total'];_i++){
      var partida = this.cordenadas[agente]['pivo'] * this.cordenadas[agente]['salto'] 
      var chegada = partida + this.cordenadas[agente]['faixa']
      var atual = false
      if(this.cordenadas[agente]['atual'] == _i)
        atual = true
      if(_i >= partida && _i <= chegada){
        this.cordenadas[agente]['itens'].push({
          valor: _i,
          atual:atual,
          selecionado:this.esta_selecionada(agente,_i)
        })
      }
   }
  }

  mover(agente:string,direcao:string):void{
    var quantidade_de_pivor = this.cordenadas[agente]['total'] / this.cordenadas[agente]['salto'] - 1
    if(direcao == 'baixo' &&  this.cordenadas[agente]['pivo'] > 0)
      this.cordenadas[agente]['pivo'] -= 1
    else if(direcao == 'cima' &&  this.cordenadas[agente]['pivo'] < quantidade_de_pivor)
      this.cordenadas[agente]['pivo'] += 1
    this.preencher(agente);
  }

  enviar_cordenadas(agente:string,atual:number){
    this.cordenadas[agente]['atual'] = atual;
    if(agente == 'maos'){
      this.cordenadas['maos']['id'] = this.jogada_por_mao[atual][0];
      this.cordenadas['jogadas']['atual'] = 0;
      this.cordenadas['jogadas']['pivo'] = 0;
      this.cordenadas['jogadas']['total'] = this.jogada_por_mao[this.cordenadas['maos']['atual']][1];
    }else if(agente == 'jogadas'){
      var novas_cordenadas = {
          telas:this.cordenadas['telas'],
          data:this.cordenadas['data'],
          maos:this.cordenadas['maos'],
          jogadas:this.cordenadas['jogadas']
      }  
      this.enviar.emit(novas_cordenadas) 
    }
    this.preencher('maos');
    this.preencher('jogadas');
    
  }

  esta_selecionada(agente:string,chave:number):boolean{
    if(agente == 'maos')
      return this.mao_esta_selecionada(chave)
    else if(agente == 'jogadas')
      return this.jogada_esta_selecionada(chave)
  }

  mao_esta_selecionada(mao:number):boolean{
    if(this.selecionados[mao])
      return true
    else
      return false
  }

  jogada_esta_selecionada(jogada:number):boolean{
    var mao_atual = this.cordenadas['maos']['atual']
    if(this.selecionados[mao_atual] && 
       this.selecionados[mao_atual].includes(jogada) == true){
      return true
    }else
      return false
  }

  selecionar(agente:string,chave:number):void{
    if(agente == 'maos')
      this.selecionar_mao(chave)
    else if(agente == 'jogadas')
      this.selecionar_jogada(chave)
    this.preencher('maos');
    this.preencher('jogadas');
  }

  selecionar_mao(mao:number):void{
    if(this.selecionados[mao]){
      delete this.selecionados[mao]
    }else{
      this.selecionados[mao] = []
      for(var jogada = 1; jogada <= this.jogada_por_mao[mao][1]; jogada++)
        this.selecionados[mao].push(jogada)
    }
  }

  selecionar_jogada(jogada:number):void{
    var mao = this.cordenadas['maos']['atual'];
    if(this.selecionados[mao] && 
      this.selecionados[mao].includes(jogada) == true){
      this.deletar_item(this.selecionados[mao],jogada)
      if(this.selecionados[mao].length == 0)
        delete this.selecionados[mao]
    }else{
        if(!this.selecionados[mao])
          this.selecionados[mao] = []
        this.selecionados[mao].push(jogada)
    }
  }

  deletar_item(myArray,valor){
    const index = myArray.indexOf(valor, 0);
    if (index > -1)
        myArray.splice(index, 1);
  }

  ngOnInit() {
    this.preencher('maos');
    this.preencher('jogadas');
  }

}
