// todoserviec.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviecService {

  constructor(private http: HttpClient) { }

  getdata(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/todos');
  }

  getsingledata(id:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/todos/${id}`);
  }

  putdata(id:number,data:any):Observable<any>{
    return this.http.put<any>(`http://localhost:8080/todos/${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/todos/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/todos",data);
  }
  
}
