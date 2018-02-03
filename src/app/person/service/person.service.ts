import { Injectable } from '@angular/core';
import { Person } from '../person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

const PERSONS = [
    new Person (1, 'Kimberly', 'Anaheim'),
    new Person (2, 'Sam', 'Irvine'),
    new Person (3, 'Kris', 'Fullerton')
];

let personPromise = Observable.of(PERSONS);

@Injectable()
export class PersonService {

    getPersons(): Observable<Person[]> {
        return personPromise;
    }

    getPerson(id: number): Observable<Person> {
        return this.getPersons()
            .map(persons => persons.find(person => person.personId === id));
    }

    updatePerson(person: Person): Observable<Person> {
        return this.getPersons()
            .map(persons => {
                let personObj = persons.find(ob => ob.personId === person.personId);
                personObj = person;
                return personObj;
            });
    }
}