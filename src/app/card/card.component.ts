import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private readonly apiService: ApiService) { }
  @Input() Product: any;

  modal = false;

  id = new FormControl('', Validators.required);
  title = new FormControl('', Validators.required);
  price = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  images = new FormControl('', Validators.required);

  ngOnInit() {
    if (this.Product) {
      this.id.setValue(this.Product.id);
      this.title.setValue(this.Product.title);
      this.price.setValue(this.Product.price);
      this.description.setValue(this.Product.description);
      this.images.setValue(this.Product.images);
    }
    console.log(this.Product);
  }

  onDeleteClick() {
    console.log('Delete button clicked for product:', this.Product);

    this.apiService.deleteP(this.Product.id)
      .subscribe((response: any) => {
        console.log('Producto eliminado exitosamente:', response);
      }, (error: any) => {
        console.error('Error al eliminar el producto:', error);
      });
  }

  openEditModal() {
    this.modal = true;
  }

  closeEditModal() {
    this.modal = false;
  }

  saveChanges() {
    const updatedProduct = {
      id: this.Product.id,
      title: this.title.value,
      price: this.price.value,
      images: this.images.value,
      description: this.description.value,
    };

    console.log('Actualizando producto con datos:', updatedProduct);

    this.apiService.updateProduct(updatedProduct).subscribe(response => {
      console.log('Producto actualizado:', response);
      Object.assign(this.Product, updatedProduct);
      this.closeEditModal();
    }, error => {
      console.error('Error al actualizar el producto:', error);
    });
  }
}
