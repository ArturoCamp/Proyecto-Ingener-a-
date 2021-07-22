import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from 'src/app/service/alert.service';
import { ClientService } from 'src/app/service/client.service'
import { Service } from 'src/app/models/Service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    service = new FormControl('',Validators.required);
    selected: Service[];
    servicesList: Service[]=[{'service_Id':1,'name':'Telefonía Fija'},
    {'service_Id':2,'name':'Telefonía Movil'},
    {'service_Id':3,'name':'Cable'},
    {'service_Id':4,'name':'Internet'}];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private clientService: ClientService,
        private alertService: AlertService,
        private formModule: FormsModule,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        
        localStorage.setItem('id', '2');
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            first_Surname: ['', Validators.required],
            second_Surname: ['', Validators.required],
            email: ['',[Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            adress: [''] ,
            phone: ['']   
            
        });
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.clientService.register(this.form.value,this.selected)
            .pipe(first())
            .subscribe(
                data => {
                    this.snackbar.open("Successfully registered", "OK", {
                        duration: 3000,
                        panelClass: ['green-snackbar', 'login-snackbar'],
                    });
                    this.loading = false;
                },
                error => {
                    this.snackbar.open("Verify the email or try again later", "Error!", {
                        duration: 3000,
                        panelClass: ['red-snackbar','login-snackbar'],
                    });
                    this.snackbar.open("Verify the email or try again later", "Error!", {
                        duration: 5000,
                        horizontalPosition: 'center',
                        verticalPosition: 'top',
                      });
                      
                    this.loading = false;
                });
        
        
    }
}