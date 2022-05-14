import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'criptos' },
  { path: 'criptos',
    loadChildren: () => import('./criptos/criptos.module').then(m => m.CriptosModule) // ~ Importar módulo de exibição de criptos.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
