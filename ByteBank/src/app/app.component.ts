import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank'


  constructor(private service: TransferenciasService){}

  transferirApp($event){
    this.service.adicionar($event);
  }

  exibirModalErro(mensagem){
    alert(mensagem);
  }
}
