import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent implements OnInit {

 constructor(private cardsService: CardsService) {

 }

ngOnInit() {

  console.log(this.cardsService);
  
}


}
