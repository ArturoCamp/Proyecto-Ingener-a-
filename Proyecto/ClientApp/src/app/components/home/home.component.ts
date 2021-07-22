import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/service/Auth/authentication.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';





@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    user: any;
    
    constructor(private auth: AuthenticationService,private router: Router,private breakpointObserver: BreakpointObserver) {
        this.user = sessionStorage.getItem("username");
        if (!sessionStorage.getItem("username")) {
          this.router.navigateByUrl('account/login', { skipLocationChange: false }).then(() => {
            this.router.navigate(['account/login']);
        })
      }else{
          this.router.navigateByUrl('', { skipLocationChange: false }).then(() => {
            
        })
      }

    
  }

}