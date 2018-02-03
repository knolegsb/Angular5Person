import { Injectable } from '@angular/core';
import { Country } from '../country';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const COUNTRIES = [
    new Country(1, "USA", 'Washington DC', 'USD'),
    new Country(2, 'SOUTH KOREA', 'Seoul', 'WON')
];

let contriesPromise = Observable.of(COUNTRIES);

@Injectable()
export class CountryService {

    constructor() { }

    getCountries(): Observable<Country[]> {
        return contriesPromise;
    }

    getCountry(id: number): Observable<Country> {
        return this.getCountries()
            .map(countries => countries.find(country => country.countryId === id));
    }

    updateCountry(country: Country): Observable<Country> {
        return this.getCountries()
            .map(countries => {
                let maxIndex = countries.length - 1;
                let countryWithMaxIndex = countries[maxIndex];
                country.countryId = countryWithMaxIndex.countryId + 1;
                countries.push(country);
                return country;
            });
    }

    addCountry(country: Country): Observable<Country> {
        return this.getCountries()
            .map(countries => {
                let maxIndex = countries.length - 1;
                let countryWithMaxIndex = countries[maxIndex];
                country.countryId = countryWithMaxIndex.countryId + 1;
                console.log(country.countryId);
                countries.push(country);
                
                return country;
            });
    }
}