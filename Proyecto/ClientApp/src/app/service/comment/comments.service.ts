import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { Comment } from 'src/app/models/Comment';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({ providedIn: 'root' })
export class CommentService {
    private CommentSubject: BehaviorSubject<Comment>;
    public Comment: Observable<Comment>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        // this.ClientSubject = new BehaviorSubject<Client>(JSON.parse(localStorage.getItem('Client')));
        //  this.Comment = this.ClientSubject.asObservable();
    }

    // public get ClientValue(): Client {
    //     return this.ClientSubject.value;
    // }

    register(comment: Comment, param) {
        comment.report_Number = param;
        return this.http.post<Comment>(`${environment.apiUrl}/api/comment/add`, JSON.stringify(comment), httpOptions).pipe(
            tap((comment) => console.log("Added Comment"))
          );
    }

    getAll() {
        return this.http.get<Comment[]>(`${environment.apiUrl}/api/comment/comments/`+sessionStorage.getItem("issue_id"));
    }

    getById(id: string) {
        return this.http.get<Comment>(`${environment.apiUrl}/api/client/clients/${id}`);
    }

    update(comment : Comment) {
        return this.http.put(`${environment.apiUrl}/api/comment/update/`, comment)
            .pipe(
              tap((comment) => console.log('comment update')),
              catchError(this.handleError<any>('comment not updated'))
            );
    }

    delete(id: number) {
        return this.http.delete<any>(`${environment.apiUrl}/api/comment/delete/${id}`)
        .pipe(
            tap((comment) => console.log('comment delete')),
            catchError(this.handleError<any>('comment Delete'))
          );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
      
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
      
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}