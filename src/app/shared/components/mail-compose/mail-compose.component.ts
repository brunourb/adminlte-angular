import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { SkillService } from '../../../core/services/application/skill.service';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../../shared/models/user';
import { Message } from '../../../shared/models/message';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css'],
})
export class MailComposeComponent implements OnInit {
  submitted = false;
  mailsTo: any;
  mailToIds: any[];
  @ViewChild('editor') editor;

  mailComposeForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit() {
    this.bindMailToList();
    this.bindFormGroup();
  }
  bindFormGroup() {
    this.mailComposeForm = this.formBuilder.group({
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
    return this.mailComposeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.mailComposeForm.invalid) {
      return;
    }
    this.f.mailToIds.value.forEach(function (data) {
      console.log(data);
      this.SendMail(data);
    });
  }

  private SendMail(data: any): void {
    let message: Message = {
      id: 0,
      from: "intelchiprules@yahoo.co.in",
      fromName: "Girish Nandgawe",
      to: "test@test.com",
      toName: "Test Name",
      subject: "Test Subject",
      body: "content",
      type: "Junk",
      team: "Support Team",
      time: "5 mins",
      suggestion: "Why not buy a new awesome theme?",
      imgSource: "https://github.com/Genuine-Identity.png",
    };

    // this.messageService.register(message)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       // console.log(data);
    //     },
    //     error => {
    //       // console.log(error);
    //     });
  }
}