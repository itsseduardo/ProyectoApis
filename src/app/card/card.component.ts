import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private readonly  apiService:ApiService){}
  @Input()
  Product:any;
  ApiService: any;
  
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

  onEditClick() {
    console.log('Edit button clicked for product:', this.Product);
    
    
  }
}

