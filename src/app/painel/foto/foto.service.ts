import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private _Url = 'http://127.0.0.1:8001/api/v1/';

  constructor(private _http: HttpClient){}

  imagemPorCordenada(tela:number,mao:number,jogada:number):Observable<object> {	
      var url = this._Url+'cientista/imagemPorCordenada/?tela='+tela+'&mao='+mao+'&jogada='+jogada;
      return this._http.get(url).pipe(map((resposta:Response) => <object>resposta));               
  }
}
