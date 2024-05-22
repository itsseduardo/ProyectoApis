import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private readonly  apiService:ApiService){}
  @Input()
  Product:any;
  ApiService: any;


    title = new FormControl('', Validators.required);
    price = new FormControl('', Validators.required);
    description = new FormControl('', Validators.required);
    images = new FormControl('', Validators.required);

  
  
  ngOnInit(){console.log(this.Product)}

  onDeleteClick() {
    console.log('Delete button clicked for product:', this.Product);

    
    this.apiService.deleteP(this.Product.id)
      .subscribe((response: any) => {
        console.log('Articulo deleted successfully:', response);
        
      }, (error: any) => {
        console.error('Error deleting articulo:', error);
        
      });
  }

  openEditModal() {
    
     this.title.setValue("")
      
    
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

 saveChanges() {
    const updatedProduct = {
      title:this.Product.title.value,
      price:this.Product.price.value,
      images: [this.images.value],
      description:this.description.value,
      
      
    }; 
    

    this.apiService.updateProduct(this.Product.id, updatedProduct).subscribe(response => {
      console.log('Producto actualizado:', response);
      Object.assign(this.Product, updatedProduct);
      this.closeEditModal();
    }, error => {
      console.error('Error al actualizar el producto:', error);
    });
  }
 
}

