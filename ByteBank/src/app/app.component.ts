import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferencias: any[] = [];

  transferirApp($event){
    this.transferencias.push($event);
  }

  exibirModalErro(mensagem){
    alert(mensagem);
  }
}
