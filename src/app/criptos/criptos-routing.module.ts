import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriptosComponent } from './criptos/criptos.component';

const routes: Routes = [
  { path: '', component: CriptosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriptosRoutingModule { }
