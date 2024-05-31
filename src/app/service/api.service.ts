import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  deleteP(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get(URL);
  }

  createProduct(products: any): Observable<any> {
    return this.http.post(URL, products);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${URL}/${product.id}`, product);
  }
  
}
