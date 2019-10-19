import { Injectable } from '@angular/core'								
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  private _Url = 'http://127.0.0.1:8001/api/v1/';

  constructor(private _http: HttpClient){}

    quantidadeJogadaPorTelaData(tela:Number,data:String):Observable<object> {
      var url = this._Url+'cientista/quantidadeJogadaPorTelaData/?data='+data+'&tela='+tela;
      return this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
    }

    ficharioMasRecente(tela:Number):Observable<object> {
      var url = this._Url+'cientista/ultimaMesa/?tela='+tela;
      return this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
    }

    ficharioPorCordenada(cordenadas:Object):Observable<object>{
        var url = this._Url+'cientista/jogadasPorCordenadas/?';
        var data = cordenadas['data']['ano']+"-"+cordenadas['data']['mes']+"-"+ cordenadas['data']['dia'];
        var tela = cordenadas['telas']['atual']
        var mao = cordenadas['maos']['id']
        var jogada = cordenadas['jogadas']['atual']
        url = url+'data='+data+'&tela='+tela+'&mao='+mao+'&jogada='+jogada;
        return this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
    }
}
