import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  searchValue: string = '';

  constructor() { }
  
  ngOnInit(): void {    
  }

  onSearchUpdate(searchTerm: string): void {
    this.searchValue = searchTerm;
    console.log('Búsqueda:', this.searchValue);
  }
}
