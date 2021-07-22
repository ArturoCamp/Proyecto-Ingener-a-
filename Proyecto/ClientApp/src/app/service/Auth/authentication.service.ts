import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  
  constructor(private httpClient: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('username')));
        this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
}


  authenticate(username, password) {
    return this.httpClient
      .post<any>(`${environment.apiUrl}/authenticate`, { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("client_Id", userData.id);
          this.userSubject.next(sessionStorage.getItem("username"));
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    this.user=null;
  }
}
