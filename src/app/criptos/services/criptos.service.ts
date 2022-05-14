import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Cripto } from './../model/cripto';

@Injectable({
  providedIn: 'root'
})
export class CriptosService {

  private readonly API = 'assets/criptos.json';

  constructor(private httpClient: HttpClient) { }

  // Listar criptos (Moedas e Tokens)
  list() {
    return this.httpClient.get<Cripto[]>(this.API)
    .pipe(
      first(),
      delay(500),
      tap(criptos => console.log(criptos))
    );
  }


}
