import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class PlanetsService {

  constructor(private http: HttpClient) { }

  get(page = 1) {
    let url = `https://swapi.co/api/planets/?page=${page}`;
    return this.http.get(url);
  }
}