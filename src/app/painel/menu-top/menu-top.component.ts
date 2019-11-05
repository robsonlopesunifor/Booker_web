import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { MapaService } from './mapa.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  @Output() enviar_dados = new EventEmitter();

  constructor() { } 

  definiPainel(painel:string):void{
    this.enviar_dados.emit(painel)
  }


  ngOnInit() {
  }

}
