import { Injectable } from '@angular/core'								
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private _Url = 'http://127.0.0.1:8001/api/v1/';

  constructor(private _http: HttpClient){}

    numeroDeTelas(data:String):Observable<object> {	
        var url = this._Url+'cientista/telaPorData/?data='+data;
        return this._http.get(url).pipe(map((resposta:Response) => <object>resposta));               
    }

    totalDeJogadasPorMesa(data:String,tela:Number):Observable<object> {
        var data_string:String = data['ano']+"-"+data['mes']+"-"+ data['dia'];
        var url = this._Url+'cientista/jogadasMaosPorDataTela/?data='+data_string+'&tela='+tela;
        return this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
    }

    reanalizarMaos(lista_maos:string[]):Observable<object>{	
        var url = this._Url+'cientista_analizar';
        var params = {'maos':lista_maos,}  
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.put(url, params, {headers})
                         .pipe(map((resposta:Response) => <object>resposta ));
    }
}
