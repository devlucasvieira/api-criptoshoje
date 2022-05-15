import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { TypePipe } from './pipes/type.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    TypePipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    TypePipe
  ]
})
export class SharedModule { }
