import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanilhaService {

  private _Url = 'http://127.0.0.1:8001/api/v1/';

  constructor(private _http: HttpClient){}

  jogadasPorMao(mao:number):Observable<object> {	
      var url = this._Url+'cientista/jogadasPorMao/?mao='+mao;
      return this._http.get(url).pipe(map((resposta:Response) => <object>resposta));               
  }
}
