import { Injectable } from '@angular/core'								
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class MaosPossiveisService {

    private _Url = 'http://127.0.0.1:8001/api/v1/';
    public tabelas_cash:Object = {};

    constructor(private _http: HttpClient){}

    retornarMaosPossiveis():Observable<object> {	

        var url = this._Url+'maos_possiveis/?board=Tp&board=Ap&board=8p&hole_card=8sKp&hole_card=QsTp&hole_card=2s2p';
        return this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
    }

}