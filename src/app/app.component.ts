import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule, NgForOf } from '@angular/common';
import { countReset, info } from 'console';
import { ApiService } from './service/api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, NgForOf, ReactiveFormsModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private apiService: ApiService){}
  
  info: any;
  
  name = new FormControl('')
  image = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')

  saveChanges() {
    console.log('Saving changes:', this.name, this.image, this.email, this.password); 
  
const newCharacter= {
  "name": this.name.value,
  "email": this.email.value,
  "password": this.password.value,
  "avatar": "https://picsum.photos/800",
}
  }


ngOnInit(){
  this.apiService.getCharacters().subscribe((data:any)=>{
    this.info = data.results;
  });
}



}