import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  valor: number;
  destino: number;
  transferencia: any;

  transferirApp($event){
    this.valor = $event.valor;
    this.destino = $event.destino;
    this.transferencia = $event;

   // alert(`Metodo invocado - valor: ${this.valor} - destino: ${this.destino}`);
  }

  exibirModalErro(mensagem){
    alert(mensagem);
  }
}
