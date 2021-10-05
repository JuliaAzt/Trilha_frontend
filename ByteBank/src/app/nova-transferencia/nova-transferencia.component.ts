import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;
  transferir() {

    if (this.isValid()) {
      const valorEmitir = { valor: this.valor, destino: this.destino, data: new Date() };
      this.aoTransferir.emit(valorEmitir);
    }

  }

  private isValid() {
    const valido = this.valor > 0;

    if (!valido) this.valoresComErro.emit('Informe um valor válido');

    return valido;
}
}
