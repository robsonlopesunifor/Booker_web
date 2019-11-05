import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import { FotoService } from './foto.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnChanges {

  @Input() cordenadas:object; 
  private url_base:string = "http://localhost:8000/"
  private foto_url:string; 

  constructor(private fotoService:FotoService) { }

  carregarFoto_():void{
    this.foto_url = "http://localhost:8000/imagens/2019-10-26/23-46-42-115511.jpg"
  }

  carregarFoto():void{
    if(this.cordenadas['maos']){
      var tela = this.cordenadas['telas']['atual']
      var mao = this.cordenadas['maos']['id']
      var jogada = this.cordenadas['jogadas']['atual']
      console.log(mao)
      
      this.fotoService.imagemPorCordenada(tela,mao,jogada)
                          .subscribe((foto_url) => {
                            this.foto_url = this.url_base+foto_url['url'];
                          });
      
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
      if(propName == 'cordenadas')
        this.carregarFoto()
    }
 }

}
