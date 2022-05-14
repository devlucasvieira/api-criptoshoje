import { Cripto } from './../model/cripto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criptos',
  templateUrl: './criptos.component.html',
  styleUrls: ['./criptos.component.scss']
})
export class CriptosComponent implements OnInit {

   // Instanciar Array de Criptomoedas
  criptos: Cripto[] = [
    { _id: '1', name: 'Bitcoin', type: 'Criptomoeda' },
    { _id: '2', name: 'Litecoin', type: 'Criptomoeda' },
  ];

  displayedColumns = ['name','type'];

  constructor() {
    this.criptos = [];
  }

  ngOnInit(): void {

  }

}
