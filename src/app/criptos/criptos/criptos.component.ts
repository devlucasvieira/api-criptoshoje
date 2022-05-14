import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CriptosService } from './../services/criptos.service';
import { Cripto } from './../model/cripto';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-criptos',
  templateUrl: './criptos.component.html',
  styleUrls: ['./criptos.component.scss']
})
export class CriptosComponent implements OnInit {

  // CriptosService: CriptosService;
  // Instanciar Array de Criptomoedas
  criptos$: Observable<Cripto[]>;
  displayedColumns = ['name','type'];

  constructor (private criptosService: CriptosService, public dialog: MatDialog) {
    // this.CriptosService = new CriptosService();
    this.criptos$ = this.criptosService.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao Carregar a lista de criptomoedas.')
        return of([]);
      })
    )

  }

  ngOnInit(): void {}

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }
}
