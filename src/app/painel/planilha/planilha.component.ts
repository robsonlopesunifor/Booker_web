import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PlanilhaService } from './planilha.service';


@Component({
  selector: 'app-planilha',
  templateUrl: './planilha.component.html',
  styleUrls: ['./planilha.component.css']
})
export class PlanilhaComponent implements OnChanges {

  @Input() cordenadas:object; 
  private linhas:object;

  constructor(private PlanilhaService:PlanilhaService) { }

  carregarLinhas():void{
    if(this.cordenadas['maos']){
      var mao = this.cordenadas['maos']['id']
      this.PlanilhaService.jogadasPorMao(mao)
                          .subscribe((linhas) => {
                            this.linhas = linhas;
                          });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      if(propName == 'cordenadas')
        this.carregarLinhas()
    }
 }

}
