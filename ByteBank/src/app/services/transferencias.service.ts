import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Transferencia} from '../models/transferencia.model';
@Injectable({
  providedIn: 'root'
})

/*
  * Services
    São unidades centrais para algumas funções comuns em todo o aplicativo.
    São classes simples com funções e membros.
    Usado quando existe duplicação de código, acessar / armazenar dados.
    Não existe nenhum decorador para os serviços, ao contrário de @Component e @Directive.
    @Injectable é usado apenas quando um serviço precisa ser usado por um componente, diretiva ou outro serviço.

  * Componente
    É basicamente uma classe com um @Component que informa ao angular que a classe é um componente.
    Eles estão sempre associados a um template HTML e algum CSS.
*/

export class TransferenciasService {

  /*json-server --watch db.json*/
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
  }

  buscaExtrato(){
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia){
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

}
