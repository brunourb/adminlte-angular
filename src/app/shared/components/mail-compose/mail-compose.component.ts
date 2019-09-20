import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
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
  mailsTo: NgOption[];
  private userMailOption: NgOption[]
  @ViewChild('editor') editor;

  constructor(
    private userService: UserService) {
  }

  ngOnInit() {
    this.bindSkills();
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

  getValue() {
    console.log(this.editor.value);
  }

  bindSkills() {
    this.userService.getAll().subscribe(
      data => {
       
        this.bindUserMailOption(data);
      },
      error => {
        console.log(error);
      });
  }
  bindUserMailOption(u: any) {
    for (let i in u) {
      console.log(u.data); // "0", "1", "2",
    }
    
  }
}