import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-forca-relativa',
  templateUrl: './barra-forca-relativa.component.html',
  styleUrls: ['./barra-forca-relativa.component.css']
})
export class BarraForcaRelativaComponent implements OnChanges {

  @Input() lista_hole_cards = []
  @Input() mao = ''
  @Input() fatia = 1
  private largura = '300px'
  private altura = '25px'
  private background = '#67605F'
  private holecards_por_fatia = []


  constructor() { }

  dimencoesPorMao():void{
    if(this.mao == 'full_house') this.fatiaFullHouse()
    else if(this.mao == 'flush') this.fatiaFlush()  
    else if(this.mao == 'street') this.fatiaStreet()
    else if(this.mao == 'remanecente') this.fatiaRemanecente()
    else this.holecardsPorFatia(100,100)
  }

  fatiaFullHouse(){
    if(this.fatia == 1){ 
      this.largura = '247px'
      this.holecardsPorFatia(100,100) }
    if(this.fatia == 2){ 
        this.largura = '52px' 
        this.background = '#77706F'
        this.holecardsPorFatia(25,15)
    }
  }

  fatiaFlush(){
    if(this.fatia == 1){ 
      this.largura = '143px'
      this.holecardsPorFatia(100,100)
    }if(this.fatia == 2){ 
      this.largura = '156px' 
      this.background = '#6D6766' 
      this.holecardsPorFatia(40,15)
    }
  }

  fatiaStreet(){
    if(this.fatia == 1){ 
      this.largura = '142px'; 
      this.holecardsPorFatia(100,100) 
    }if(this.fatia == 2){ 
      this.largura = '104px'; 
      this.background = '#6D6766'; 
      this.holecardsPorFatia(40,25) 
    }if(this.fatia == 3){ 
      this.largura = '52px'; 
      this.background = '#77706F'; 
      this.holecardsPorFatia(25,15) 
    }
  }

  fatiaRemanecente(){
    this.altura = '100px'
    this.background = '#77706F'
    this.holecardsPorFatia(100,100)
  }

  holecardsPorFatia(limite_superior, limite_inferior){
    
    this.holecards_por_fatia = []
    for (var idx in this.lista_hole_cards) {
      var hole_cards = this.lista_hole_cards[idx]
      if(hole_cards['porcentagem'] <= limite_superior &&  hole_cards['porcentagem'] >= limite_inferior){
        this.holecards_por_fatia.push(hole_cards)
        console.log(hole_cards)
      }
    }

    console.log(this.holecards_por_fatia)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dimencoesPorMao();
  }

}
