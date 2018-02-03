import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressComponent } from './address/address.component';

import { AppRoutingModule } from './app-routing.module';
import { CountryModule } from './country/country.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AddressComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
