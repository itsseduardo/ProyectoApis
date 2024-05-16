import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { countReset, info } from 'console';
import { ApiService } from './service/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, NgIf, ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent implements OnInit {
  apiUrl = 'http://localhost:3000/products';
  products: any[] = [];
  tittle = 'ProyectoApis';
  product: any;

  price = new FormControl('');
  description = new FormControl('');
  title = new FormControl('');
  categoryId = new FormControl('');
  images = new FormControl('');

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getAllProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  onSummit(){
    const NewProduct = {
      title: this.title.value,
      price: this.price.value,
      description: this.description.value,
      images: ['https://placeimg.com/640/480/any'],
      categoryId: 1
    }
    this.apiservice.createProduct(NewProduct).subscribe((data: any) => {
      console.log(data);
      this.product.push(data);
    })
  }
}