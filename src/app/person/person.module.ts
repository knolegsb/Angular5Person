import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonService } from './service/person.service';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PersonRoutingModule
    ],
    declarations: [     
        PersonComponent,
        PersonListComponent,
        PersonEditComponent
    ],
    providers: [ PersonService ]
})
export class PersonModule {}