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

  constructor(private apiService: ApiService){}
  
  info: any;
  
  name = new FormControl('')
  image = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')


ngOnInit(){
  this.apiService.getCharacters().subscribe((data:any)=>{
    this.info = data.results;
  });
}



}