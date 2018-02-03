import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../service/country.service';
import { Country } from '../country';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {
  country: Country;

  countryForm = new FormGroup({
    name: new FormControl(),
    capital: new FormControl(),
    currency: new FormControl()
  });
  
  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.countryService.getCountry(+params['country-id']))
      .subscribe(country => {
        this.country = country;
        this.setFormValues();
      });
  }

  setFormValues() {
    this.countryForm.setValue({name: this.country.countryName, capital: this.country.capital, currency: this.country.currency});
  }

  onFormSubmit() {
    this.country.countryName = this.countryForm.get('name').value;
    this.country.capital = this.countryForm.get('capital').value;
    this.country.currency = this.countryForm.get('currency').value;

    this.countryService.updateCountry(this.country)
      .map(() => this.router.navigate(['../../'], {relativeTo: this.route}));
  }
}
