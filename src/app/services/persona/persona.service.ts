import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestRespose } from '../../models/cadena';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_SERVER = "http://localhost:8080/cadena/";

  constructor(private httpClient: HttpClient) { }



  public getAllPersonas(){
    return this.httpClient.get<RequestRespose>(this.API_SERVER);
  }

  public savePersona (persona:any): Observable<any>{

    return this.httpClient.post(this.API_SERVER,persona);
  }

  public deletePersona(id:any):Observable<any>{
    return this.httpClient.delete<RequestRespose>(this.API_SERVER + "delete/"+id);
  }

}
