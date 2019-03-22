import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  get(page = 1) {
    let url = `https://swapi.co/api/people/?page=${page}`;
    return this.http.get(url);
  }
}