import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MaosPossiveisService } from './forca-relativa.service';

@Component({
  selector: 'app-forca-relativa',
  templateUrl: './forca-relativa.component.html',
  styleUrls: ['./forca-relativa.component.css']
})
export class ForcaRelativaComponent implements OnInit {

private lista_maos = {}
private lista_maos2 = { 'street':  [
                          {'texto':['T','9'],'id':1,'forca':109.33,'porcentagem':100,'naipe':[true,true],'heroi':false},
                          {'texto':['T','8'],'id':2,'forca':119.33,'porcentagem':30,'naipe':[true,true],'heroi':false},
                          {'texto':['T','8'],'id':3,'forca':119.33,'porcentagem':16,'naipe':[true,false],'heroi':true},
                          {'texto':['Q','J'],'id':4,'forca':89.33,'porcentagem':16,'naipe':[true,true],'heroi':true}],
                      'flush':  [
                          {'texto':['T','9'],'id':3,'forca':109.33,'porcentagem':100,'naipe':[true,true],'heroi':true},
                          {'texto':['T','8'],'id':4,'forca':119.33,'porcentagem':30,'naipe':[true,true],'heroi':false},
                          {'texto':['T','8'],'id':5,'forca':119.33,'porcentagem':16,'naipe':[true,true],'heroi':false},
                          {'texto':['Q','J'],'id':6,'forca':89.33,'porcentagem':16,'naipe':[true,true],'heroi':true}],
                      'full_house':  [
                          {'texto':['T','9'],'id':5,'forca':109.33,'porcentagem':100,'naipe':[true,true],'heroi':true},
                          {'texto':['T','8'],'id':6,'forca':119.33,'porcentagem':30,'naipe':[true,true],'heroi':false},
                          {'texto':['T','8'],'id':7,'forca':119.33,'porcentagem':15,'naipe':[true,false],'heroi':true},
                          {'texto':['Q','J'],'id':8,'forca':89.33,'porcentagem':16,'naipe':[true,true],'heroi':true}],
                      'par':  [
                          {'texto':['Q','Q'],'id':7,'forca':109.33,'porcentagem':100,'naipe':[true,true],'heroi':true},
                          {'texto':['T','8'],'id':8,'forca':119.33,'porcentagem':100,'naipe':[true,true],'heroi':true},
                          {'texto':['T','8'],'id':9,'forca':119.33,'porcentagem':100,'naipe':[true,false],'heroi':true},
                          {'texto':['Q','J'],'id':10,'forca':89.33,'porcentagem':16,'naipe':[true,true],'heroi':false}],
                      'remanecente':  [
                          {'texto':['T','9'],'id':11,'forca':109.33,'porcentagem':100,'naipe':[true,false],'heroi':false},
                          {'texto':['T','8'],'id':12,'forca':119.33,'porcentagem':100,'naipe':[true,false],'heroi':false},
                          {'texto':['T','8'],'id':13,'forca':119.33,'porcentagem':100,'naipe':[true,true],'heroi':true},
                          {'texto':['Q','J'],'id':14,'forca':89.33,'porcentagem':16,'naipe':[true,true],'heroi':false}]  }

  constructor(private maosPossiveis: MaosPossiveisService) { }


  montarMaosPossiveis(): void{
      this.maosPossiveis.retornarMaosPossiveis()
                        .subscribe(maosPossiveis => {this.lista_maos = maosPossiveis,
                            console.log(this.lista_maos)});
      
  }

  ngOnInit() {
    this.montarMaosPossiveis();
  }

}
