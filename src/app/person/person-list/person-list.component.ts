import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../service/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[];

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.persons = this.personService.getPersons()
    //   .subscribe(response => response.json().data);
    // this.personService.getPersons().subscribe(persons => this.persons = persons);
    //this.persons = this.personService.getPersons()
    //  .map(response => response.data);
      //.subscribe(persons => this.persons = persons.json());

    this.personService.getPersons()
      .subscribe((persons: Person[]) => {
        this.persons = persons;
      });

    console.log(this.persons);
  }

  goToEdit(person: Person) {
    this.router.navigate([ person.personId ], {relativeTo: this.route});
  }
}
