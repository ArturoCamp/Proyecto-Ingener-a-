import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthGuard } from './components/_helper/AuthGuard';
import { AuthenticationService } from './service/Auth/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userSubject: BehaviorSubject<any>;
  user: Observable<any>;
  
  title = 'proyecto';
  constructor(private auth: AuthenticationService,private router: Router) {
    
      this.userSubject = new BehaviorSubject<any>(auth.user);
      this.user = this.userSubject.asObservable();
      this.auth.user.subscribe(x => this.user = x);
  }

}
