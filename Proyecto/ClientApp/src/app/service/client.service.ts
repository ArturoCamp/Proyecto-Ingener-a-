import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Client } from 'src/app/models/Client';
import { Service } from '../models/Service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({ providedIn: 'root' })
export class ClientService {
    private ClientSubject: BehaviorSubject<Client>;
    public Client: Observable<Client>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.ClientSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('Client')));
        this.Client = this.ClientSubject.asObservable();
    }

    public get ClientValue(): Client {
        return this.ClientSubject.value;
    }

    login(Clientname, password) {
        return this.http.post<Client>(`${environment.apiUrl}/api/clients/authenticate`, { Clientname, password })
            .pipe(map(Client => {
                localStorage.setItem('Client', JSON.stringify(Client));
                this.ClientSubject.next(Client);
                return Client;
            }));
    }

    register(Client: Client, param) {
        Client.services = param;
        return this.http.post<any>(`${environment.apiUrl}/api/client/add`, JSON.stringify(Client), httpOptions).pipe(
            tap((student) => console.log('added student'))
        );
    }

    getById(id: string) {
        return this.http.get<Client>(`${environment.apiUrl}/api/client/clients/${id}`);
    }

    update(id, params) {
        return this.http.put<any>(`${environment.apiUrl}/api/client/update/${id}`, JSON.stringify(params), httpOptions).pipe(
            tap((Client) => console.log('update method'))
        );
    }


    getServices(id: number) {
        return this.http.get<Service[]>(`${environment.apiUrl}/api/services/byClient/${id}`);
    }
}