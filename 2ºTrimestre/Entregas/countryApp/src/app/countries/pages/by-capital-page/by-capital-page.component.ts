import { Component } from '@angular/core';
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

export class ByCapitalPageComponent{

  countries: Country[] = []
  searchValue: string = '';
  exception : boolean = false;

  constructor(private countryService: CountryService) { }

  onSearch(searchTerm: string) {
    this.exception = false;
    this.searchValue  = searchTerm;

    this.countryService.getCountriesByCapital( this.searchValue )
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err) => {
        this.exception = true;
        this.countries = [];
      });

  }
}
