import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl, FormsModule  } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/service/alert.service';
import { ClientService } from 'src/app/service/client.service';
import { Service } from 'src/app/models/Service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-respuesta-seleccionada',
  templateUrl: './respuesta-seleccionada.component.html',
  styleUrls: ['./respuesta-seleccionada.component.css']
})
export class RespuestaSeleccionadaComponent implements OnInit {

  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  service = new FormControl('',Validators.required);
    selected: Service[];
    service2 = new FormControl('',Validators.required);
    selected2: Service[];
    servicesList: Service[]=[{'service_Id':1,'name':'Proyecto de Ley'},
    {'service_Id':2,'name':'Consultas generales'},
    {'service_Id':3,'name':'Contratos Administrativos'},
    {'service_Id':4,'name':'Contratos Personal'}];
    servicesList2: Service[]=[{'service_Id':1,'name':'Proyecto de Ley'},
    {'service_Id':2,'name':'Consultas generales'},
    {'service_Id':3,'name':'Contratos Administrativos'},
    {'service_Id':4,'name':'Contratos Personal'}];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private alertService: AlertService,
    private snackbar: MatSnackBar,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = sessionStorage.getItem("client_Id");//this.route.snapshot.params['id'];
    this.isAddMode = !this.id;


    this.form = this.formBuilder.group({
      remitente: ['', Validators.required],
      respuesta: ['', Validators.required],
      
    });

    if (!this.isAddMode) {
      this.clientService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue({
            remitente: x.remitente,
            respuesta: x.respuesta

          });

        });
    }
  }

}
