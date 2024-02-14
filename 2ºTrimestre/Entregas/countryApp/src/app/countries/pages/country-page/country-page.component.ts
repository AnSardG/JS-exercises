import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  country!: Country;    

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ code }) => this.countryService.searchCountryByAlphaCode( code )  )
      )
      .subscribe( country => {
        if (!country) {
          this.router.navigateByUrl('');
        } else {
          this.country = country;
          console.log(this.country);
        }
      });
  }
}
