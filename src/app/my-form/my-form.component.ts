import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './my-form.component.html',
})
export class MyFormComponent {
  orderForm = this.fb.group({
    title: ['', Validators.required],
    quatity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.group([]),
  });

  addPayment() {
    const paymentForm = this.fb.group({
      date: ['', Validators.required],
      amount: ['', Validators.required],
    });

    const payments = this.orderForm.get('payments') as FormArray;
    // c'est quoi FormArray, je me suis arreté ici.

    payments.push(paymentForm);
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('orderForm submitted: ', this.orderForm.value);
  }
}
