import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "https://api.escuelajs.co/api/v1/products"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  deleteP(id: number) {
    return this.http.delete(`${URL}/${id}`)
  }

  getAllProducts(): Observable<any> {
    return this.http.get(URL);
  }

  createProduct(products: any) {
    return this.http.post(URL, products);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${URL}/${id}`, product);
  }
}