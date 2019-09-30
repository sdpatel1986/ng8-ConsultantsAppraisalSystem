import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reviewer-details-form',
  templateUrl: './reviewer-details-form.component.html',
  styleUrls: ['./reviewer-details-form.component.scss']
})
export class ReviewerDetailsFormComponent implements OnInit {

  reviewerDetailsForm: FormGroup;
  get formValues() {
    return this.reviewerDetailsForm.value;
  }
  get formErrors() {
    return this.reviewerDetailsForm.errors;
  }
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.initiateForm();
  }

  ngOnInit() {

  }
  initiateForm() {
    this.reviewerDetailsForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [, [Validators.required, Validators.email]],
      membershipNumber: [, this.membershiplength],
      isAnonymous: [],
      isAlias: [],
      aliasName: [],
    }, {
      validators: this.membershipOrNameNotSet
    });
  }
  membershiplength(control: AbstractControl) {
    if (control.value != null && control.value.toString().length != 8) {
      return { membershipNumberShouldBe8: true };
    }
    return null;
  }
  membershipOrNameNotSet(form: FormGroup) {
    const nameHasValue =
      form.get('firstName').value && form.get('lastName').value;
    const membershipControl = form.get('membershipNumber')

    if (!nameHasValue && membershipControl.value == null) {
      return { shouldDefineNameOrMembershipNumber: true };
    }

    return null;
  }

  hasError(controlName: string, errorName: string) {
    const control = this.reviewerDetailsForm.get(controlName);
    if (!control.touched)
      return null;
    return control.errors && control.errors[errorName];
  }

  formHasError() {
    const controlsIsToucher = (this.reviewerDetailsForm.get('firstName').touched &&
      this.reviewerDetailsForm.get('lastName').touched || this.reviewerDetailsForm.get('membershipNumber').touched);
    return controlsIsToucher &&
      this.formErrors &&
      this.formErrors['shouldDefineNameOrMembershipNumber'];
  }
  close() {
    this.activeModal.close();
  }
  onSubmit() {
    this.activeModal.close(this.formValues)
  }
}
