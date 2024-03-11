import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { DataTableComponent } from './data-table/data-table.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent, DataTableComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
