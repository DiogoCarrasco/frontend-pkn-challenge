import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  

}
