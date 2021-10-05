import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;
  transferir() {
    alert(`Metodo invocado - valor: ${this.valor} - destino: ${this.destino}`);

    //** Propagação dos valores
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});
  }
}
