import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl, FormsModule  } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-respuesta-seleccionada',
  templateUrl: './respuesta-seleccionada.component.html',
  styleUrls: ['./respuesta-seleccionada.component.css']
})
export class RespuestaSeleccionadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
