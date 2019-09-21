import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { _ } from 'lodash';

import { UserSessionService } from '../../../core/services/application/user-session.service';
import { LocalStorageService } from '../../../core/services/helpers/local-storage.service';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor(private localStorage: LocalStorageService, private userSessionService: UserSessionService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let users: any[] = JSON.parse(this.localStorage.getItem('db.users')) || [];
    let messages: any[] = JSON.parse(this.localStorage.getItem('db.messages')) || [];
    return of(null).pipe(mergeMap(() => {
      /* User Fake backend service Starts here*/
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        let filteredUsers = users.filter(user => {
          return user.username === request.body.username && user.password === request.body.password;
        });
        if (filteredUsers.length) {
          let user = filteredUsers[0];
          let body = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            team: user.team,
            token: 'fake-jwt-token'
          };
          return of(new HttpResponse({ status: 200, body: body }));
        } else {
          return throwError({ error: { message: 'Username or password is incorrect' } });
        }
      }
      if (request.url.endsWith('/users') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: users }));

        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          return of(new HttpResponse({ status: 200, body: users }));
        } else {
          return throwError({ error: { message: 'Unauthorised' } });
        }

      }
      if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let urlParts = request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          let matchedUsers = users.filter(user => { return user.id === id; });
          let user = matchedUsers.length ? matchedUsers[0] : null;
          return of(new HttpResponse({ status: 200, body: user }));
        } else {
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }
      if (request.url.endsWith('/users/register') && request.method === 'POST') {
        let newUser = request.body;
        let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
        if (duplicateUser) {
          return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
        }
        newUser.id = (newUser.username === 'intelchiprules@yahoo.co.in') ? 1 : users.length + 1;
        users.push(newUser);
        this.localStorage.setItem('db.users', JSON.stringify(_.sortBy(users, user => user.id)));
        return of(new HttpResponse({ status: 200 }));
      }
      if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let urlParts = request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.id === id) {
              users.splice(i, 1);
              this.localStorage.setItem('db.users', JSON.stringify(_.sortBy(users, user => user.id)));
              // this.localStorage.setItem('db.users', null);
              break;
            }
          }
          return of(new HttpResponse({ status: 200 }));
        } else {
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }
      if (request.url.match(/\/users\/\d+$/) && request.method === 'PUT') {
        let isUpdated: boolean = false;
        let currentUser = request.body;
        for (let i = 0; i < users.length; i++) {
          let user = users[i];
          if (
            user.username !== "intelchiprules@yahoo.co.in" &&
            user.username !== "intelchiprules@fakemail.com" &&
            user.username !== "spammer@fakemail.com" &&
            user.username !== "admin@fakemail.com" &&
            user.username !== "support@fakemail.com" &&
            user.username !== "design@fakemail.com" &&
            user.username !== "developer@fakemail.com" &&
            user.username !== "sales@fakemail.com" &&
            user.username !== "info@fakemail.com"
          ) {
            if (user.id === currentUser.id) {
              users.splice(i, 1);
              users.push(currentUser);
              isUpdated = true;
              this.localStorage.setItem('db.users', JSON.stringify(_.sortBy(users, user => user.id)));
              break;
            }
          }
        }
        if (!isUpdated) {
          return throwError({ error: { message: 'Admin cannot be Updated.' } });
        }
        return of(new HttpResponse({ status: 200 }));
      }
      /* User Fake backend service Ends here*/




      /* Message Fake backend service Starts here*/
      if (request.url.endsWith('/message/register') && request.method === 'POST') {
        let message = request.body;
        message.id = messages.length + 1;
        messages.push(message);
        this.localStorage.setItem('db.messages', JSON.stringify(_.sortBy(messages, message => message.id)));
        return of(new HttpResponse({ status: 200 }));
      }

      if (request.url.match(`/message/id/`) && request.method === 'GET') {
        if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          let urlParts = request.url.split('/');
          let id = urlParts[urlParts.length - 1];
          let mail = messages.filter(message => { return message.to === id && message.type == "Starred"; });
          return of(new HttpResponse({ status: 200, body: _.re(mail, message => message.time) }));
        } else {
          return throwError({ error: { message: 'Unauthorised' } });
        }
      }
      if (request.url.match(`/message/checkdatabaseintialize/`) && request.method === 'GET') {
        let urlParts = request.url.split('/');
        let id = urlParts[urlParts.length - 1];
        let matchedMessages = messages.filter(message => { return message.to === id; });
        let mails = matchedMessages.length ? matchedMessages[0] : null;
        return of(new HttpResponse({ status: 200, body: mails == null ? false : true }));
      }
      /* Message Fake backend service Ends here*/
      return next.handle(request);
    }))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let FakeBackendInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};