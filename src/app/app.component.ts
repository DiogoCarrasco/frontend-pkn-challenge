import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewComponent } from './components/new/new.component';
import {MatTableModule} from '@angular/material/table';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent,HeaderComponent, NewComponent, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor (private cardService: CardsService) { 

  }

  ngOnInit() {
    console.log('teste', this.cardService);
  }
  
}
