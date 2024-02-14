import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [CountryTableComponent, CommonModule],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  regions: string[] = ['Europe', 'Africa', 'Asia', 'Americas', 'Oceania'];
  activeRegion: string = '';
  countries: Country[] = [];  
  
  constructor( private countryService: CountryService ) { }

  activateRegion( region: string ) {

    if ( region === this.activeRegion ) { return; }

    this.activeRegion = region;
    this.countries = [];

    this.countryService.getCountriesByRegion( region )
      .subscribe( countries => this.countries = countries );
  }
}
