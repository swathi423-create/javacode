import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private httpClient: HttpClient;
  private readonly baseUrl =
    '/';
  headers = new HttpHeaders().append('Content-Type', 'application/json');
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public addProject(project : any) : Observable<Object> {
    return this.httpClient.post(this.baseUrl + 'add-project', project, {
      headers: this.headers
    });
  }
  public getProject(id : any): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'get-project/' + id);
  }
  public getProjects(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'get-projects');
  }
  public updateProject(project : object): Observable<Object> {
    return this.httpClient.put(this.baseUrl + 'update-project', project, {
      headers: this.headers
    });
  }
  public deleteProject(id : any): Observable<Object> {
    return this.httpClient.delete(this.baseUrl + 'delete-project/' + id);
  }
  public getProfile(): Observable<Object> {
    return this.httpClient.get(this.baseUrl + 'get-profile');
  }

  addClient(client : any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'add-client', client, {
      headers: this.headers
    });
  }

  public getClient(id : any): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'get-client/' + id);
  }
  public getClients(): Observable<any> {
    return this.httpClient.get(this.baseUrl + 'get-clients');
  }
  public updateClient(client: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl + 'update-client', client, {
      headers: this.headers
    });
  }
  public deleteClient(id : any): Observable<Object> {
    return this.httpClient.delete(this.baseUrl + 'delete-client/' + id);
  }
  
  public login(userid: string, password: string): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'login', null, {
      params: new HttpParams()
        .append('userid', userid)
        .append('password', password)
    });
  }
}
