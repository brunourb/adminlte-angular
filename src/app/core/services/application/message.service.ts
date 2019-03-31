import { Injectable } from '@angular/core';
import { Message } from '../../../shared/models/message';

@Injectable()
export class MessageService {

  constructor() {
  }

  public getMessage(): Message[] {
    let message: Message[] = [
      {
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Support Team",
        time: "5 mins",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Design Team",
        time: "2 hours",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Developers",
        time: "Today",
        suggestion: "Why not buy a new awesome theme?"
      },
      {
        imgSource: "https://github.com/Genuine-Identity.png",
        team: "Sales Department",
        time: "1 hours",
        suggestion: "Why not buy a new awesome theme?"
      },
    ];
    return message;
  }
}