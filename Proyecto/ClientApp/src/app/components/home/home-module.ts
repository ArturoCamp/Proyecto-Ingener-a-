import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule} from '@angular/material/tabs';

import { HomeRoutingModule } from './home-routing.module';

import { CommonModule } from '@angular/common';

import { SolicitudComponent } from 'src/app/components/solicitud/solicitud.component';
import { RespuestaLegalComponent } from 'src/app/components/respuesta-legal/respuesta-legal.component';


import { from } from 'rxjs';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        RouterModule,
        FormsModule,
        MatTabsModule
    ],
    declarations: [
        SolicitudComponent,
        RespuestaLegalComponent
        
    ]
})
export class HomeModule { }