import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  countries: Country[] = []
  searchValue: string = '';

  constructor(private countryService: CountryService) { }
  
  ngOnInit(): void {    
  }

  onSearchUpdate(searchTerm: string): void {
    this.searchValue = searchTerm;
    this.countryService.getCountriesByCapital(this.searchValue)
      .subscribe((countries) => {
        this.countries = countries;
      });
  }
}
