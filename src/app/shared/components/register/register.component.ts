import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../models/index';
import { AlertType, Alert } from '../../models/all';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  alert: Alert;
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.bindRegistrationFormGroup();
  }

  bindRegistrationFormGroup() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let user = new User(this.f.email.value, this.f.password.value, this.f.firstName.value, this.f.lastName.value, "", [], 1);
    this.userService.register(user)
      .pipe(first())
      .subscribe(
        data => {
          this.alert = new Alert(AlertType.Success, "Success!", " Registered Successfully!!");
        },
        error => {
          this.alert = new Alert(AlertType.Error, "Failure!", `Registration Failure:-  ${error}`);
        }
      );
  }
}