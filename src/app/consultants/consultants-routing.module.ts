import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultantsListComponent } from './pages/consultants-list/consultants-list.component';
import { ConsultantEvaluationComponent } from './pages/consultant-evaluation/consultant-evaluation.component';


const routes: Routes = [
  { path: 'list', component: ConsultantsListComponent },
  { path: ':id/evaluation', component: ConsultantEvaluationComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantsRoutingModule { }
