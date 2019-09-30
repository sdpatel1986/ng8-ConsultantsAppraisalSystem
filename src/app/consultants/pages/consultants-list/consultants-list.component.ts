import { Component, OnInit } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { Observable, of, concat, merge, forkJoin } from 'rxjs';
import { Consultant } from '../../models/consultant';
import { EvaluationService } from '../../services/evaluation.service';
import { mergeMap, map } from 'rxjs/operators';
import { Evaluation } from '../../models/evaluation';

@Component({
  selector: 'app-consultants-list',
  templateUrl: './consultants-list.component.html',
  styleUrls: ['./consultants-list.component.scss']
})
export class ConsultantsListComponent implements OnInit {

  consultants$: Observable<Consultant[]>;
  constructor(
    private consultantService: ConsultantService,
    private evaluationService: EvaluationService,
  ) { }

  ngOnInit() {
    this.consultants$ = forkJoin(this.consultantService.getAll(), this.evaluationService.getAll())
      .pipe(map((result: [Consultant[], Evaluation[]]) =>
        result[0]
          .map(consultant =>
            Object.assign(consultant, { evaluations: result[1].filter(e => e.consultantId == consultant.id).map(e => +e.totalScore) }))))
  }

  totalScoreAvg(scores: number[]) {
    const sum = scores.reduce((previous, current) => current += previous,0);
    const avg = sum / scores.length;
    return avg.toFixed(2);
  }

}
