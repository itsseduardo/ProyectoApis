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
  person:any;
  ApiService: any;
  
  onDeleteClick() {
    console.log('Delete button clicked for person:', this.person);

    
    this.apiService.deletePerson(this.person.id)
      .subscribe((response: any) => {
        console.log('Person deleted successfully:', response);
        
      }, (error: any) => {
        console.error('Error deleting person:', error);
        
      });
  }

  onEditClick() {
    
  }
}

