import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caixa-lateral',
  templateUrl: './caixa-lateral.component.html',
  styleUrls: ['./caixa-lateral.component.css']
})
export class CaixaLateralComponent implements OnInit {

  @Input() board:Object[];
  @Input() estilo:Object;
  @Output() enviar = new EventEmitter()

  constructor() { }

  alterarEstilo(estilo:object):void{
    this.enviar.emit(estilo)
  }

  ngOnInit() {
  }

}
