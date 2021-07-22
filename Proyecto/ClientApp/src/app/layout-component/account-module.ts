import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponentComponent } from './layout-component.component';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
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
    FormsModule
    ],
    declarations: [
        LayoutComponentComponent,
        AddClientComponent,
        RegisterComponent,
        
    ]
})
export class AccountModule { }