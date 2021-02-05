import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(public _http : HttpClient) { }

  getProducts() : Observable<Array<any>>{
   return this._http.get<any>('/products');
  }
}
