import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Log, Severity, User } from "../../../shared/models/index";
import { UserSessionService } from "../../../core/services/application/user-session.service";
@Injectable()
export class LoggerService {
  private basePath: string = "/log";
  private userName: string;
  private angularFirestoreCollection: AngularFirestoreCollection<Log>;
  Logs: Observable<Log[]>;
  constructor(
    private db: AngularFirestore,
    private userSession: UserSessionService
  ) {
    this.userName = this.userSession.getUserName();
  }
  private;
  public Verbose(string, description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Verbose]
    });
  }
  public Debug(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Debug]
    });
  }
  public Information(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Information]
    });
  }
  public Warning(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Warning]
    });
  }
  public Error(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Error]
    });
  }
  public Fatal(description: string): void {
    this.db.collection(this.basePath).add({
      userName: this.userName,
      description: description,
      timeStamp: new Date(),
      severity: Severity[Severity.Fatal]
    });
  }
  public get(): Observable<any[]> {
    return this.db.collection<Log>(this.basePath).valueChanges();
  }
}
