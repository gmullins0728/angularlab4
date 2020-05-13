import { Component, OnInit } from '@angular/core';
import { Item } from '../Interfaces/item';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  title = "Shopping Cart";
  displayedColumns: string[] = ["ID","Product", "Price", "Quantity"];
  // dataSource: Item[] = [];
  // dataSource;
  dataSource: Item[] = [
    {id: 1, product: "Final Fantasy VII Remake: 1st Class Edition", price: 350, quantity: 1, edit: false},
    {id: 2, product: "Final Fantasy VII Figurines", price: 20, quantity: 4, edit: false},
    {id: 3, product: "Final Fantasy VII OST CD", price: 12, quantity: 2, edit: false},
    {id: 4, product: "Final Fantasy VII Collector Cards", price: 4.99, quantity: 10, edit: false},
    {id: 5,product: "Final Fantasy VII Poster", price: 15.99, quantity: 2, edit: false},
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.getAllItems().subscribe((res) => {
      this.dataSource = res;
      console.log("Item Data", this.dataSource);
    });
  }

}
