import { Injectable } from '@angular/core';

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

  private transferencias: any[];
  constructor() {
    this.transferencias = [];
  }
  get Transferencias(){
    return this.transferencias;
  }
  adicionar(transferencias: any){
    this.transferencias.push(transferencias);
  }

}
