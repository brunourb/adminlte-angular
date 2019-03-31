import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css'],
})

export class TermsAndConditionsComponent implements OnInit {
  submitted: boolean = false;
  loginForm: FormGroup;

  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.bindLoginFormGroup();
  }

  bindLoginFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['intelchiprules@yahoo.co.in', [Validators.required, Validators.email]],
      password: ['admin@123', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    
  }
}