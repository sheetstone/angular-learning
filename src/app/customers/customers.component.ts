import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { Customer } from './customer';

// Customer Validator function for Email, check email and confirm email is matching.
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }

  return { 'match': true };
}
// Customer Validator function, check rating with in range.
function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null;
  };
}

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  public errorMessage = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
    rating: ''
  };

  private validationMessages = {
    firstName: {
      required: 'Please enter your first name.',
      minlength: 'The first name must be longer than 3 characters.'
    },
    lastName: {
      required: 'Please enter your last name.'
    },
    email: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.'
    },
    confirmEmail: {
      required: 'Please confirm your email address.',
      match: 'The confirmation does not match the email address.'
    },
    phone: {
      required: 'Please enter your phone number.',
      pattern: 'Please enter a valid phone number.'
    },
    rating: {
      range: 'Please rate your experience from 1 to 5'
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // User form builder
    this.customerForm = this.fb.group({ // create Form group by using form builder
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
        confirmEmail: ['', Validators.required]
      }, { validator: emailMatcher }),
      phone: ['', Validators.pattern('^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$')],
      rating: ['', ratingRange(1, 5)],
      notification: 'email',
      sendCatalog: true,
      addresses: this.fb.array([this.buildAddress()]),
    });

    // Valiation handler, notification radio handler
    this.customerForm.get('notification').valueChanges.subscribe(value =>
      this.setNotification(value));

    const firstNameControl = this.customerForm.get('firstName');
    firstNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(firstNameControl, 'firstName'));

    const lastNameControl = this.customerForm.get('lastName');
    lastNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(lastNameControl, 'lastName'));

    const phoneControl = this.customerForm.get('phone');
    phoneControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(phoneControl, 'phone'));

    const ratingControl = this.customerForm.get('rating');
    ratingControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(ratingControl, 'rating'));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(emailControl, 'email'));

    const confirmEmailControl = this.customerForm.get('emailGroup.confirmEmail');
    confirmEmailControl.valueChanges.pipe(debounceTime(1000)).subscribe(value =>
      this.setMessage(confirmEmailControl, 'confirmEmail'));

  }
  buildAddress() {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }
  addAddress() {
    this.addresses.push(this.buildAddress());
  }
  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestData() {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'Harkness',
      sendCatalog: false
    });
  }

  setNotification(notifyVar: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVar === 'text') {
      phoneControl.setValidators([
        Validators.required,
        Validators.pattern('^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$')]);
    } else {
      phoneControl.setValidators(Validators.pattern('^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$'));
    }
    phoneControl.updateValueAndValidity();
  }

  setMessage(fc: AbstractControl, k: string): void {
    this.errorMessage[k] = ''; // clear own error message
    if (fc.parent.valid) { // clear parent group message
      this.errorMessage.confirmEmail = '';
    }
    if ((fc.touched || fc.dirty) && fc.errors) {
      this.errorMessage[k] = Object.keys(fc.errors).map(key =>
        this.validationMessages[k][key]).join(' ');
    } else if (fc.parent.errors) {
      this.errorMessage.confirmEmail = Object.keys(fc.parent.errors).map(key =>
        this.validationMessages.confirmEmail[key]).join(' ');
    }
  }
}
