export class Confronto {
    constructor(public estilo_oponente: string = '', 
                public protagonista: string = '',
                public posicao_heroi: string = '', 
                public posicao_vilao: string = '',
                public acao: string = 'F',
                public board_etapa: string = '',
                public heroi_combo:string = ''){}
            

    carregar(lista_de_dados:object):void{
        this.estilo_oponente = lista_de_dados['estilo_oponente']
        this.protagonista = lista_de_dados['protagonista']
        this.posicao_heroi = lista_de_dados['posicao_heroi']
        this.posicao_vilao = lista_de_dados['posicao_vilao']
        this.board_etapa = lista_de_dados['board_etapa']
        this.heroi_combo = lista_de_dados['heroi_combo']
    }
} 