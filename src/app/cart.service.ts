import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../app/Interfaces/item';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000/api/cart-items";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  // items: Item[];

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(apiUrl);
  }
  
  // getAllItems() {
  //   return this.http.get("apiUrl", {
  //     responseType: "json"});
  // }

  addItem(newItem) {
    return this.http.post(
      apiUrl, { name: newItem},
      {responseType: "json"}
    );
  }

  getItem(id) {
    return this.http.get<{
      id: number;
      product: string;
      price: number;
      quantity: number;
    }>(`${apiUrl}/${id}`);
  }

}
