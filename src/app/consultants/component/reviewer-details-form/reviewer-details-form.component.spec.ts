import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerDetailsFormComponent } from './reviewer-details-form.component';

describe('ReviewerDetailsFormComponent', () => {
  let component: ReviewerDetailsFormComponent;
  let fixture: ComponentFixture<ReviewerDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
