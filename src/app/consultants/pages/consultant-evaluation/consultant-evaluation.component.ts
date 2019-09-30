import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { Observable, from } from 'rxjs';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { tap, take } from 'rxjs/operators'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewerDetailsFormComponent } from '../../component/reviewer-details-form/reviewer-details-form.component';
import { Reviewer } from '../../models/reviewer';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consultant-evaluation',
  templateUrl: './consultant-evaluation.component.html',
  styleUrls: ['./consultant-evaluation.component.scss']
})
export class ConsultantEvaluationComponent implements OnInit {
  questions$: Observable<Question[]>;
  questionsFormArray: FormArray;

  get questionsFormGoups(): FormGroup[] {
    return <FormGroup[]>this.questionsFormArray.controls;
  }
  get totalScore() {
    return this.questionsFormArray ?
      this.calculateTotalScore() : 0
  }
  get reviewResult() {
    return {
      questions: this.questionsFormArray.value,
      totalScore: this.totalScore
    }
  }
  constructor(
    public questionService: QuestionService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private consultantService: ConsultantService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.questions$ = this.questionService.getAll()
      .pipe(tap(questions => this.initiateForm(this.sortQuestion(questions))));
  }

  initiateForm(questions: Question[]) {
    this.questionsFormArray =
      this.fb.array(questions.map(q => this.getQuestionFormGroup(q)));
  }

  sortQuestion(questions: Question[]): Question[] {
    return questions.sort((a, b) => a.type < b.type ? -1 : 1)
  }

  getQuestionFormGroup(question: Question): FormGroup {
    const qForm = this.fb.group({
      id: [],
      type: [],
      text: [],
      answer: [],
      isRequired: []
    });
    if (this.questionIsRequried(question))
      qForm.get('answer').setValidators([Validators.required])
    qForm.patchValue(question);

    return qForm;
  }

  onSubmit() {
    const modelRef = this.modalService
      .open(ReviewerDetailsFormComponent,
        { size: 'lg', centered: true, scrollable: true, backdrop: 'static' });
    from(modelRef.result).pipe(take(1)).subscribe(result => {
      if (result)
        this.submitReview(result);
    });
  }

  questionIsRequried(question: Question): boolean {
    return question.type == 1 || question.isRequired;
  }


  submitReview(reviewer: Reviewer) {
    const consultantId = this.activatedRoute.snapshot.params.id;
    const consultantReview = {
      ...this.reviewResult,
      reviewer,
    }
    this.consultantService.evaluateConsultant(consultantId, consultantReview)
      .pipe(take(1))
      .subscribe(x => {
        this.toastr.success(`Sent Successfully`, 'Thanks!')
        this.router.navigateByUrl('/')
      })
  }
  private calculateTotalScore() {
    const valuesOfControlsTypeRating = this.questionsFormArray.controls
      .filter(c => c.value.type == 1).map(x => +x.value.answer);
    const sum = valuesOfControlsTypeRating.reduce((previous, current) => current += previous, 0);
    const avg = sum / valuesOfControlsTypeRating.length;
    return avg.toFixed(2);
  }
}
