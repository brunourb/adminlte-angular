// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// import { LocalStorageService } from '../../.../../../../core/services/helpers/local-storage.service';

// @Injectable()
// export class AuthService {

//   constructor(private http: HttpClient,
//     private localStorage: LocalStorageService) {
//   }

//   public login(username: string, password: string) {
//     return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
//       .pipe(map((user: any) => {
//         if (user && user.token) {
//           this.localStorage.setItem('userSession', JSON.stringify(user));
//         }
//         return user;
//       }));
//   }
// }