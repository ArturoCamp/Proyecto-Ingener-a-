import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { MatSnackBarModule} from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { AlertComponent } from './components/alert/alert.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { AuthHtppInterceptorService } from './service/Interceptor/auth-htpp-interceptor.service';
import { HomeComponent } from "src/app/components/home/home.component";
import { NavigationComponent } from './components/navigation/navigation.component';







const appRoutes: Routes = [
  
  { path: '',
    redirectTo: '/pagination',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    NavigationComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
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
    MatSnackBarModule,
    RouterModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthHtppInterceptorService, multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
