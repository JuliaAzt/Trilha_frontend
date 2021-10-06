import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: string;

  constructor(private service: TransferenciasService){}

  transferir() {

    if (this.isValid()) {
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino, data:new Date() };
      this.service.adicionar(valorEmitir).subscribe((resultado) => {
        console.log(resultado);
        this.limpaCampos();
      }, (error) => {
        this.valoresComErro.emit(error);
      });

    }
    else {
      this.valoresComErro.emit('Informe um valor válido');
    }


  }
  private limpaCampos(){
    this.valor = 0;
    this.destino = '' ;
  }

  private isValid() {
    return this.valor > 0;
  }
}
