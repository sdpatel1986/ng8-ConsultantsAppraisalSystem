import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantEvaluationComponent } from './consultant-evaluation.component';

describe('ConsultantEvaluationComponent', () => {
  let component: ConsultantEvaluationComponent;
  let fixture: ComponentFixture<ConsultantEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
