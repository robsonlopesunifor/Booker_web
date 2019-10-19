import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-carta',
  templateUrl: './board-carta.component.html',
  styleUrls: ['./board-carta.component.css']
})
export class BoardCartaComponent implements OnInit {

  @Input() carta:object = {'valor':'T','nape':'o','board':false,'disponivel':true};
  private classe = "carta_indisponivel";

  constructor() { }

  estilo():void{
    if(this.carta['nape'] == 'P'){
      if(this.carta['board'] == true)
        this.classe = "carta_board_p";
      else
        this.classe = "carta_padrao_p";
    }else if(this.carta['nape'] == 'O'){
      if(this.carta['board'] == true)
        this.classe = "carta_board_o";
      else
        this.classe = "carta_padrao_o";
    }else if(this.carta['nape'] == 'E'){
      if(this.carta['board'] == true)
        this.classe = "carta_board_e";
      else
        this.classe = "carta_padrao_e";
    }else if(this.carta['nape'] == 'C'){
      if(this.carta['board'] == true)
        this.classe = "carta_board_c";
      else
        this.classe = "carta_padrao_c";
    }
    if(this.carta['board'] == false && this.carta['disponivel'] == false)
      this.classe = "carta_indisponivel";
  }


  ngOnInit() {
    this.estilo();
  }

}
