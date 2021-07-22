import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponentComponent } from './layout-component.component';
import { AddClientComponent } from 'src/app/components/add-client/add-client.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponentComponent,
        children: [
            { path: 'login', component: AddClientComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }