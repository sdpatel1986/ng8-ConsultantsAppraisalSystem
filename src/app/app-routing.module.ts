import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/pages/layout/layout.component';


const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: 'consultants', loadChildren: () =>
        import('./consultants/consultants.module')
          .then(m => m.ConsultantsModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'consultants' }]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
