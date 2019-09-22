import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { SkillService } from '../../../core/services/application/skill.service';
import { UserService } from '../../../core/services/application/user.service';
import { User } from '../../../shared/models/user';
import { Message } from '../../../shared/models/message';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';
import { MessageService } from '../../../core/services/application/message.service';

@Component({
  selector: 'app-mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.css'],
})
export class MailBodyComponent implements OnInit {
  private user: User;
  submitted = false;
  mailsTo: any;
  mailToIds: any[];

  mailComposeForm: FormGroup;



  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.bindUserDetails();
    this.bindDetails();

  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindDetails() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        console.log(params['id']);
        this.userService.getById(params['id']).subscribe((user: User) => {
        });
      }
    });
  }
} 