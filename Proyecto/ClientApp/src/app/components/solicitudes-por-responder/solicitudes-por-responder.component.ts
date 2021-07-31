import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-por-responder',
  templateUrl: './solicitudes-por-responder.component.html',
  styleUrls: ['./solicitudes-por-responder.component.css']
})
export class SolicitudesPorResponderComponent implements OnInit {

  
  posts = [
    {
      ID: 1,
      Nombre_de_la_solicitud: "pago",
      Remitente: "Arturo",	
      Tipo_de_la_solicitud: "salario",
      Detalle_de_la_solicitud: "consulta"
    },
    {
      ID: 1,
      Mobre_de_la_solicitud: "vacaciones",
      Remitente: "jeremy",	
      Tipo_de_la_solicitud: "salario",
      Detalle_de_la_solicitud: "consulta"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
