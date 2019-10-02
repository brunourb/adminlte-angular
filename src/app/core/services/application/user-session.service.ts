import { Injectable } from "@angular/core";
import { LocalStorageService } from "../../../core/services/helpers/local-storage.service";

@Injectable()
export class UserSessionService {
  constructor(private localStorage: LocalStorageService) {}
  getUserSession(): any {
    return this.localStorage.getItem("userSession");
  }
  getUser(): string {
    let user = this.getUserSession();
    return user == null || user == undefined ? "System" : user.username;
  }
}
 