import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { SkillService } from '../../../core/services/application/skill.service';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css'],
})
export class MailComposeComponent implements OnInit {
  submitted = false;
  mailsTo: any;
  userDetailsForm: FormGroup;
  mailToIds: any[];
  @ViewChild('editor') editor;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit() {
    this.bindMailToList();
    this.bindFormGroup();
  }
  bindFormGroup() {
    this.userDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      education: ['', Validators.required],
      mailToIds: [null, Validators.required],
    });
  }
  ngAfterViewInit() {
    this.editor.setTheme("eclipse");
    this.editor.getEditor().setOptions({
      enableBasicAutocompletion: true
    });
    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) { }
    })
  }


  bindMailToList() {
    this.userService.getAll().subscribe(
      data => {
        this.bindUserMailOption(data);
      },
      error => {
        console.log(error);
      });
  }
  bindUserMailOption(users: User[]) {
    let To: NgOption[] = [];
    users.forEach(function (data) {
      var option: NgOption = {
        id: data.id,
        name: data.username
      }
      console.log(option)
      console.log("this.mailsTo")
      To.push(option);

    });
    this.mailsTo = To;
  }
  getValue() {
    console.log(this.editor.value);
  }
  get f() {
    return this.userDetailsForm.controls;
  }
  onSubmit() {
    console.log('a');
    console.log(this.f.mailToIds.value);
    this.submitted = true;
    if (this.userDetailsForm.invalid) {
      return;
    }

    // let user = new User(this.f.email.value, this.f.password.value, this.f.firstName.value, this.f.lastName.value, "", [], 1);
    // this.userService.register(user)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.alert = new Alert(AlertType.Success, "Success!", " Registered Successfully!!");
    //     },
    //     error => {
    //       this.alert = new Alert(AlertType.Error, "Failure!", `Registration Failure:-  ${error}`);
    //     }
    //   );
  }
}