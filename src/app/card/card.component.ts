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
  @Input()
  person:any;

}

