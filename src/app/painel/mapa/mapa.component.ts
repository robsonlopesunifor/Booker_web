import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MapaService } from './mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnChanges {

  @Input() cordenadas:Object;    

  private estilo:object = {so_tabela_heroi:false,espelhar:false,editar_confronto:false};
  private board:Object = {};
  private tabelas:Object[] = [];
  private fichario:Object =   { board:[ {valor:'T',nape:'c'},
                                        {valor:'A',nape:'o'},
                                        {valor:'K',nape:'p'}],
                                confronto:{ heroi:'MP', agressor:'UTG',segundo_agressor:'SB',vez:'BTN',heroi_combo:'',
                                            board_etapa:'pre_flop',jogadores_ativos:['SB','BB','UTG','MP','BTN']},
                                confronto_pre_flop:{ heroi:'MP', agressor:'UTG',segundo_agressor:'SB',vez:'BTN',
                                            jogadores_ativos:['SB','BB','UTG','MP','BTN']},
                                historico:{ SB:{
                                                pre_flop:[{acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                          {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                          {acao:'RAISE',jogada:'4B',bliad:6,pote:0.5}],
                                                            
                                                flop:[    {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                          {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                            
                                                turn:[    {acao:'RAISE',jogada:'CALL',bliad:4,pote:0.5},
                                                          {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                          {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                            
                                                river:[   {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                          {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5}]
                                              },
                                            BB:{
                                              pre_flop:[{acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'4B',bliad:6,pote:0.5}],
                                                          
                                              flop:[    {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              turn:[    {acao:'RAISE',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              river:[   {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5}]
                                              },
                                            UTG:{
                                              pre_flop:[{acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'4B',bliad:6,pote:0.5}],
                                                          
                                              flop:[    {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              turn:[    {acao:'RAISE',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              river:[   {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5}]
                                              },
                                            MP:{
                                              pre_flop:[{acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'4B',bliad:6,pote:0.5}],
                                                          
                                              flop:[    {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              turn:[    {acao:'RAISE',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              river:[   {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5}]
                                              },
                                            BTN:{
                                              pre_flop:[{acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'4B',bliad:6,pote:0.5}],
                                                          
                                              flop:[    {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              turn:[    {acao:'RAISE',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5},
                                                        {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5}],
                                          
                                              river:[   {acao:'RAISE',jogada:'OR',bliad:4,pote:0.5},
                                                        {acao:'CALL',jogada:'CALL',bliad:4,pote:0.5}]
                                              }
                              }};


  
  
  
  constructor(private MapaService:MapaService) { }

  ficharioPorCordenada():void{
    if(this.cordenadas['data'])
      this.MapaService.ficharioPorCordenada(this.cordenadas)
                      .subscribe((fichario) => { this.fichario = fichario; 
                                                this.estruturar();  });
  }

  carregarFichario(fichario:object):void{
    this.fichario = fichario;
    this.estruturar();
  }

  alterarEstilo(estilo:object):void{
    this.estilo = estilo;
    this.estruturar();
  }

  estruturar():void{
    this.estruturarBoard();
    this.estruturarTabelas();
  }

  estruturarBoard():void{
    this.board = this.fichario['board'];
  }

  estruturarTabelas():void{
    this.tabelas = [];
      var jogadores_ativos = this.ordenarPosicaoPreFlop();
      for(let jogador of jogadores_ativos){
        if(this.estilo['so_tabela_heroi'] == true && this.fichario['board']['etapa'] == 'PRE_FLOP'){
          if(this.fichario['confronto']['heroi'] == jogador){
              var tabela:Object = {};
              tabela['confronto'] = this.estruturarConfronto(jogador);
              tabela['historico'] = this.estruturarHistorico(jogador);
              tabela['sinal'] = this.estruturarSinal(jogador);
              this.tabelas.push(tabela);
          }
        }else{
          var tabela:Object = {};
          tabela['confronto'] = this.estruturarConfronto(jogador);
          tabela['historico'] = this.estruturarHistorico(jogador);
          tabela['sinal'] = this.estruturarSinal(jogador);
          this.tabelas.push(tabela);
        }
      } 
  }

  ordenarPosicaoPreFlop():string[]{
    var jogadores_ativos = this.fichario['confronto']['jogadores_ativos'];
    if(this.fichario['confronto']['board_etapa'] == 'PRE_FLOP'){
      for(let posicao of ['SB','BB']){
        var index = jogadores_ativos.indexOf(posicao);
        if (index !== -1){ 
          jogadores_ativos.splice(index, 1);
          jogadores_ativos.push(posicao)
        }
      }
    }
    return jogadores_ativos
  }

  estruturarConfronto(jogador:string):Object{
    var confronto:Object = {};
    confronto['estilo_oponente'] = 'padrao';
    confronto['protagonista'] = 'heroi';
    confronto['heroi_combo'] = this.fichario['confronto']['heroi_combo'];
    confronto['board_etapa'] = this.fichario['confronto']['board_etapa'];
    if(jogador != this.fichario['confronto_pre_flop']['agressor']){
      confronto['posicao_heroi'] = jogador;
      var vilao = this.fichario['confronto_pre_flop']['agressor'];
      if(vilao == '') vilao = jogador
      confronto['posicao_vilao'] = vilao;
    }else{
      confronto['posicao_heroi'] = jogador;
      confronto['posicao_vilao'] = this.fichario['confronto_pre_flop']['segundo_agressor'];
    }

    return confronto
  }

  estruturarHistorico(jogador:string):Object{
    var historico = this.fichario['historico'][jogador];
    return historico
  }

  estruturarSinal(jogador:string):Object{
    var sinal:Object = {heroi:false,agressor:false,vez:false};
    if(jogador == this.fichario['confronto']['heroi'])
      sinal['heroi'] = true;
    if(jogador == this.fichario['confronto']['agressor'])
      sinal['agressor'] = true;
    if(jogador == this.fichario['confronto']['vez'])
      sinal['vez'] = true;
    
    return sinal
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      if(propName == 'cordenadas')
        this.ficharioPorCordenada()
    }
 }

}
