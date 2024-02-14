import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { RouterLink } from '@angular/router';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CommonModule, CountryTableComponent, RouterLink, SearchBoxComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  searchValue : string = '';
  exception: boolean = false;
  countries  : Country[] = [];
 

  constructor( private countryService: CountryService ) { }

  search( searchTerm: string ) {
    
    this.exception = false;
    this.searchValue  = searchTerm;

    this.countryService.getCountriesByName( this.searchValue )
      .subscribe( (countries) => {        
        this.countries = countries;
        
      }, (err) => {
        this.exception = true;
        this.countries = [];
      });

  }
}
