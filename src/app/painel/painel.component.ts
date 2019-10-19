import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  private cordenadas:object = {};

  constructor() { }

  alterarCordenadas(cordenadas:object):void{
    this.cordenadas = cordenadas;
    console.log(this.cordenadas)
  }

  ngOnInit() {
  }

}
