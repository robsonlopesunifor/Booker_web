import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  private cordenadas:object = {};
  private painel_atual:string = 'planilha';
  private foto:boolean = true;

  constructor() { }

  alterarCordenadas(cordenadas:object):void{
    this.cordenadas = cordenadas;
    console.log(this.cordenadas)
  }

  definirPainel(painel:string):void{
    if(painel == "foto"){
      if(this.foto == false)
        this.foto = true
      else
        this.foto = false
    }else{
      this.painel_atual = painel
    }
  }

  ngOnInit() {
  }

}
