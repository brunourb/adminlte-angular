import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../models/index';
import { AlertType, Alert } from '../../models/all';
import { Message } from '../../models/message';
import { MessageService } from '../../../core/services/application/message.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService) {
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
    let thisObject = this;
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
          this.sendJoiningMails(thisObject);
          this.sendSpamMails(thisObject);
        },
        error => {
          this.alert = new Alert(AlertType.Error, "Failure!", `Registration Failure:-  ${error}`);
        }
      );
  }
  sendJoiningMails(thisObject: any) {
    let message: Message = {
      id: 0,
      from: "intelchiprules@yahoo.co.in",
      fromName: "Girish" + " " + "Nandgawe",
      to: thisObject.f.email.value,
      toName: thisObject.f.firstName.value + " " + thisObject.f.firstName.value,
      subject: "Well Come !!!!",
      body: "Well Come !!!!",
      type: "Starred",
      fromTeam: "Root",
      toTeam: "Root",
      time: new Date(),
      suggestion: "Well Come !!!!",
      imgSource: "https://github.com/Genuine-Identity.png",
    };
    this.messageService.register(message)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
        },
        error => {
          // console.log(error);
        }
      );
  }
  sendSpamMails(thisObject: any) {
    let message: Message = {
      id: 0,
      from: "spammer@fakemail.com",
      fromName: "spammer" + " " + "team",
      to: thisObject.f.email.value,
      toName: thisObject.f.firstName.value + " " + thisObject.f.firstName.value,
      subject: "Spam !!!!",
      body: "Well Come !!!!",
      type: "J",
      fromTeam: "spammer",
      toTeam: "Junk",
      time: new Date(),
      suggestion: "Well Come !!!!",
      imgSource: "https://github.com/Genuine-Identity.png",
    };
    this.messageService.register(message)
      .pipe(first())
      .subscribe(
        data => {
          // console.log(data);
        },
        error => {
          // console.log(error);
        }
      );
  }
}