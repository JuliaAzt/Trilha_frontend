import { Component, Input, OnInit } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import {Transferencia} from '../models/transferencia.model';
@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() extrato: any[] = [];

  constructor(private service: TransferenciasService) { }

  ngOnInit(): void {
    this.service.buscaExtrato().subscribe((transferencias: Transferencia[]) => {
      this.extrato = transferencias
    });
  }

}
