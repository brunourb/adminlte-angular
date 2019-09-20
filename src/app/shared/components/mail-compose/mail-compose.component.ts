import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { SkillService } from '../../../core/services/application/skill.service';


import { first } from 'rxjs/operators'
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../../shared/models/user';
import { AlertType, Alert } from '../../models/all';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertModule } from '../../widgets/alert/alert.module';



@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css'],
})
export class MailComposeComponent implements OnInit {

  id: number;
  submitted = false;
  alert: Alert;
  user: User;

  skills: NgOption[];
  skillIds: any[]


  constructor() { }
  ngOnInit() { }
  @ViewChild('editor') editor;
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
}