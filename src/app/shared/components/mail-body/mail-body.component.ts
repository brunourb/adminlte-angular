import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
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
  private message: Message;
  private user: User;
  private id: number;
  private submitted = false;
  private userDetailsForm: FormGroup;
  skillIds: any[]

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
        console.log('aaaaa');
    this.bindUserDetails();
    this.bindDetails();
  }
  bindUserDetails() {
    this.user = JSON.parse(this.localStorage.getItem("userSession"));
  }
  bindDetails() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.messageService.getMessageById(params['id']).subscribe((message: Message) => {
          this.message = message;
        });
      }
    });
  }
  onDelete(id: any) {
    let messageType = this.message.type;
    this.submitted = true;
    this.message.type = "Trash";
    this.message.toType = "Trash";
    this.message.fromType = "Trash";
    this.messageService.update(this.message)
      .subscribe(
        data => {
          console.log('deleted/updated');
          if (this.message.from == this.user.username && this.message.to != this.user.username) {
            this.router.navigate(['/mail/sent']);
          }
          else {
            if (messageType === "Trash") {
              this.router.navigate(['/mail/trash']);
            }
            if (messageType === "Junk") {
              this.router.navigate(['/mail/junk']);
            }
            if (messageType === "Starred") {
              this.router.navigate(['/mail/inbox']);
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }
} 