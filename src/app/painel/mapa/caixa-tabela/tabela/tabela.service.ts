import { Confronto } from './../confronto.model';
import { Injectable } from '@angular/core'								
import { HttpClient, HttpResponse } from "@angular/common/http";			
import { Observable } from 'rxjs';			
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class TabelaService {

    private _Url = 'http://127.0.0.1:8001/api/v1/';
    public tabelas_cash:Object = {};

    constructor(private _http: HttpClient){}

    carteiraDeRenges(confronto:Confronto):Observable<object> {	

        var url = this._Url+'confronto/?estilo_oponente='+confronto.estilo_oponente+'&posicao_heroi='+confronto.posicao_heroi+'&posicao_vilao='+confronto.posicao_vilao+'&protagonista='+confronto.protagonista;
        var confronto_texto = confronto.protagonista+'|'+confronto.posicao_heroi+'_vs_'+confronto.posicao_vilao+':'+confronto.estilo_oponente;
        
        if(!this.tabelas_cash[confronto_texto]){
            var tabela = this._http.get(url).pipe(map((resposta:Response) => <object>resposta ));
            this.tabelas_cash[confronto_texto] = tabela;
        }
        return this.tabelas_cash[confronto_texto]
    }

    atualizarAcaoHoleCard(confronto:Confronto,carta:string,acao:string):Observable<object>{
        var url = this._Url+'confronto/';
        var params = {'estilo_oponente':confronto.estilo_oponente,
                      'protagonista':confronto.protagonista,
                      'posicao_heroi':confronto.posicao_heroi,
                      'posicao_vilao':confronto.posicao_vilao,
                      'carta':carta,
                      'acao':acao}
        
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        
        return this._http.put(url, params, {headers})
                         .pipe(map((resposta:Response) => <object>resposta ));
    }

}