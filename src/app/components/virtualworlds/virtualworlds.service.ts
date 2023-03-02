import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VirtualWorld } from './virtualworld';

@Injectable({
  providedIn: 'root'
})
export class VirtualworldsService {

  private readonly API = 'http://localhost:3030/virtualworlds';

  constructor(
    private http: HttpClient
  ) { }

  // show a VW list
  show(): Observable<VirtualWorld[]> {
    return this.http.get<VirtualWorld[]>(this.API);
  }

  // open the VW
  access(id: number): Observable<VirtualWorld> {
    const url = `${this.API}/${id}`;
    return this.http.get<VirtualWorld>(url);
  }
}
