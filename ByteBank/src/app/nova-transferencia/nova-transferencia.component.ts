import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: string;

  constructor(private service: TransferenciasService, private router: Router){}

  transferir() {

    if (this.isValid()) {
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino, data:new Date() };
      this.service.adicionar(valorEmitir).subscribe((resultado) => {
        console.log(resultado);
        this.router.navigateByUrl('extrato');

      }, (error) => {
        this.exibirModalErro(error);
      });

    }
    else {
      this.exibirModalErro('Informe um valor válido');
    }


  }

  private isValid() {
    return this.valor > 0;
  }

  private exibirModalErro(mensagem){
    alert(mensagem);
  }
}
