import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(payload) {
    if (!payload.query)
     {
      payload.query = 'all'
    }
    return this.httpClient.get<any[]>('https://api.github.com/search/repositories?page='+ payload.page +'&per_page=10&q='+ payload.query);
  }
}
