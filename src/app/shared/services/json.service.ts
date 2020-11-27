import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient ) { }

  getPosts(){
    return this.http.get(environment.apiUrl+"posts/1/comments");
  }
}
