import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get('http://localhost:8080/people');
  }

  getPrice() {
    return this.http.get('http://localhost:8080/price');
  }
}
