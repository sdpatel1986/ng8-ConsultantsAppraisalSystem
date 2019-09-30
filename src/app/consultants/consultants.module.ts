import { NgModule } from '@angular/core';

import { ConsultantsListComponent } from './pages/consultants-list/consultants-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConsultantEvaluationComponent } from './pages/consultant-evaluation/consultant-evaluation.component';
import { NgbRatingModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewerDetailsFormComponent } from './component/reviewer-details-form/reviewer-details-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ConsultantsRoutingModule } from './consultants-routing.module';

@NgModule({
  declarations: [ConsultantsListComponent, ConsultantEvaluationComponent, ReviewerDetailsFormComponent,],
  imports: [
    ConsultantsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbRatingModule,
    NgbModalModule,
    MatCheckboxModule
  ], entryComponents: [ReviewerDetailsFormComponent]
})
export class ConsultantsModule { }
