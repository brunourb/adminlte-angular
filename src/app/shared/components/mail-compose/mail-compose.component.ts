import { Component, Input, OnInit, Output, EventEmitter, ElementRef, Injectable, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css'],
})
export class MailComposeComponent implements OnInit {
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