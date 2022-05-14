import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CriptosRoutingModule } from './criptos-routing.module';
import { CriptosComponent } from './criptos/criptos.component';

@NgModule({
  declarations: [
    CriptosComponent
  ],
  imports: [
    CommonModule,
    CriptosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CriptosModule { }
