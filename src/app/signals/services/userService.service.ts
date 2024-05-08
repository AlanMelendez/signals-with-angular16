import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //injection HTTPClient
 private http = inject(HttpClient);
 private baseUrl = 'https://reqres.in/api/users/';




    //Method to get all users
    public getUserById(id: number): Observable<User> {
      return this.http.get<SingleUserResponse>(`${this.baseUrl}${id}`)
        .pipe(
          map((response: SingleUserResponse) => response.data), //return the first user
          tap((user: User) => console.log(user)) //log the user
        );
    }



}
