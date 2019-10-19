import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { MapaService } from './mapa.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {

  @Output() enviar_data = new EventEmitter();
  private info:Object = {carta:'AA',fonte:'20px',cor:true}
  private telas:Object = [1,2]
  private data:Object = {
    ano:2019, 
    mes:8, 
    dia:22 
  }

  constructor() { } //private MapaService:MapaService) { }

  definirData():void{
    var data_string:String = this.data['ano']+"-"+this.data['mes']+"-"+ this.data['dia'];
    this.enviar_data.emit(data_string)
  }

  listarTelasDaData():void{
    var data_string:String = this.data['ano']+"-"+this.data['mes']+"-"+ this.data['dia'];
    //this.MapaService.numeroDeTelas(data_string)
    //                      .subscribe((telas) => {this.telas = telas;
    //                                            }); 
  }



  ngOnInit() {
  }

}
