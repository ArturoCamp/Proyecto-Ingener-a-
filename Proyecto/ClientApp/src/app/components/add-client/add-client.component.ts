import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService}  from "src/app/service/Auth/authentication.service"
import { state } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
    user: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentication: AuthenticationService,
        private _snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        
        if (sessionStorage.getItem("username")) {
            this.router.navigate(['']);
        }
        this.user = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    
    get f() { return this.user.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.user.invalid) {
            return;
        }

        this.loading = true;
        
        this.authentication.authenticate(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigateByUrl('home', { skipLocationChange: true }).then(() => {
                        this.router.navigate(['home']);
                }); 
                },
                error => {
                    this._snackBar.open("Invalid Login Credentials", "Try again!", {
                        duration: 3000,
                        panelClass: ['red-snackbar','login-snackbar'],
                        });
                    this.loading = false;
                });
    }
}
