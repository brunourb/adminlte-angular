import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from "@angular/fire/firestore";

import { Log, Severity, User } from "../../../shared/models/index";
import { UserSessionService } from "../../../core/services/application/user-session.service";
@Injectable()
export class LoggerService {
  private basePath: string = "/log";
  private user: string;
  constructor(
    private db: AngularFirestore,
    private userSession: UserSessionService
  ) {
    this.user = this.userSession.getUser();
  }
  private;
  public Verbose(string, description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Verbose
    });
  }
  public Debug(description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Debug
    });
  }
  public Information(description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Information
    });
  }
  public Warning(description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Warning
    });
  }
  public Error(description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Error
    });
  }
  public Fatal(description: string): void {
    this.db.collection(this.basePath).add({
      userId: this.user,
      description: description,
      timeStamp: new Date(),
      severity: Severity.Fatal
    });
  }
}
 