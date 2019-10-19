import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TabelaService } from './tabela.service';
import { Confronto } from './../confronto.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnChanges {

  private tabela:object;
  private combo_heroi:string = 'KP-9O';
  @Input() confronto: Confronto;
  
  constructor(private tabelaService: TabelaService) { }

  apresentarRange(): void{
    if((this.confronto.posicao_heroi != '' &&  this.confronto.posicao_vilao != '')){
      this.tabelaService.carteiraDeRenges(this.confronto)
                        .subscribe(confronto => this.tabela = confronto[0]['tabela']);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.apresentarRange();
  }

}
