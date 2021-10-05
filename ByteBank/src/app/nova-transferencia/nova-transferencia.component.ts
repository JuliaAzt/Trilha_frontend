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
  data: string;
  transferir() {

    if (this.isValid()) {
      let d = new Date();
      this.data = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      const valorEmitir = { valor: this.valor, destino: this.destino, data: this.data };
      this.aoTransferir.emit(valorEmitir);
    }

  }

  private isValid() {
    const valido = this.valor > 0;

    if (!valido) this.valoresComErro.emit('Informe um valor válido');

    return valido;
}
}
