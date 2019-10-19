import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { MenuTopComponent } from './painel/menu-top/menu-top.component';
import { MapaComponent } from './painel/mapa/mapa.component';
import { CaixaLateralComponent } from './painel/mapa/caixa-lateral/caixa-lateral.component';
import { CaixaTabelaComponent } from './painel/mapa/caixa-tabela/caixa-tabela.component';
import { TabelaComponent } from './painel/mapa/caixa-tabela/tabela/tabela.component';
import { HistoricoComponent } from './painel/mapa/caixa-tabela/historico/historico.component';
import { ConfrontoComponent } from './painel/mapa/caixa-tabela/confronto/confronto.component';
import { BoardComponent } from './painel/mapa/caixa-lateral/board/board.component';
import { EstiloComponent } from './painel/mapa/caixa-lateral/estilo/estilo.component';
import { JogadaComponent } from './painel/mapa/caixa-tabela/historico/jogada/jogada.component';
import { BoardCartaComponent } from './painel/mapa/caixa-lateral/board/board-carta/board-carta.component';
import { CaixaCabecarioComponent } from './painel/mapa/caixa-cabecario/caixa-cabecario.component';
import { SinalComponent } from './painel/mapa/caixa-tabela/sinal/sinal.component';
import { HolecardsComponent } from './painel/mapa/caixa-tabela/tabela/holecards/holecards.component';
import { TimelineComponent } from './painel/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    MenuTopComponent,
    MapaComponent,
    CaixaLateralComponent,
    CaixaTabelaComponent,
    TabelaComponent,
    HistoricoComponent,
    ConfrontoComponent,
    BoardComponent,
    EstiloComponent,
    JogadaComponent,
    BoardCartaComponent,
    CaixaCabecarioComponent,
    SinalComponent,
    HolecardsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
