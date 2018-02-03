import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryEditComponent } from './country-edit/country-edit.component';
import { CountryComponent } from "./country.component";
import { CountryRoutingModule } from "./country-routing.module";
import { CountryService } from "./service/country.service";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        CountryRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        CountryComponent,
        AddCountryComponent,
        CountryListComponent,
        CountryDetailComponent,
        CountryEditComponent
    ],
    providers: [
        CountryService
    ]
})
export class CountryModule {}