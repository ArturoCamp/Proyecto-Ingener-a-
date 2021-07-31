import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl, FormsModule  } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from 'src/app/service/alert.service';
import { ClientService } from 'src/app/service/client.service';
import { Service } from 'src/app/models/Service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

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
      name: ['', Validators.required],
      first_Surname: ['', Validators.required],
      second_Surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre_solicitud: ['',[Validators.required]],
      phone: [''],
      Detalle_solicitud: ['',[Validators.required]]
    });

    if (!this.isAddMode) {
      this.clientService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          this.form.patchValue({
            name: x.name,
            first_Surname: x.first_Surname,
            second_Surname: x.second_Surname,
            email: x.email,
            nombre_solicitud: x.nombre_solicitud,
            phone: x.phone,
            Detalle_solicitud: x.Detalle_solicitud,

          });

        });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.updateUser();

  }

  private updateUser() {

    this.clientService.update(sessionStorage.getItem("client_Id"), this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.snackbar.open("Successfully updated!", "OK!", {
            duration: 4000,
            panelClass: ['green-snackbar', 'login-snackbar'],
          });
          this.loading = false;
        },
        error => {
          this.snackbar.open("An error has occurred", "Try Again!", {
            duration: 4000,
            panelClass: ['red-snackbar', 'login-snackbar'],
          });
          this.loading = false;
        });
  }
  
 //cargar archivos
 public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)

          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}