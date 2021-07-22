import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/components/_helper/AuthGuard';


import { SolicitudComponent } from 'src/app/components/solicitud/solicitud.component';
import { RespuestaLegalComponent } from 'src/app/components/respuesta-legal/respuesta-legal.component';
import { RespuestaSeleccionadaComponent } from 'src/app/components/respuesta-seleccionada/respuesta-seleccionada.component';
import { SolicitudesPorResponderComponent } from 'src/app/components/solicitudes-por-responder/solicitudes-por-responder.component';
import { ResponderSolicitudComponent } from 'src/app/components/responder-solicitud/responder-solicitud.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
           
            {path: 'solicitud', component: SolicitudComponent,canActivate: [AuthGuard] },
            {path: 'respuesta-legal', component: RespuestaLegalComponent,canActivate: [AuthGuard] },
            {path: 'respuesta-seleccionada', component: RespuestaSeleccionadaComponent,canActivate: [AuthGuard] },
            {path: 'solicitudes-por-responder', component: SolicitudesPorResponderComponent,canActivate: [AuthGuard] },
            {path: 'responder-solicitud', component: ResponderSolicitudComponent,canActivate: [AuthGuard] }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }