import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-estilo',
  templateUrl: './estilo.component.html',
  styleUrls: ['./estilo.component.css']
})
export class EstiloComponent implements OnChanges {

  @Input() estilo:object;
  @Output() enviar = new EventEmitter()

  constructor() { }

  alterarEstilo(chave:string):void{
    if(this.estilo[chave] == true)
      this.estilo[chave] = false;
    else
      this.estilo[chave] = true;
    
    this.enviar.emit(this.estilo)
  }

  ngOnChanges() {
  }

}
