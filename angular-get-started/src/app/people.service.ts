import { Injectable } from '@angular/core';
import { Person } from './person'

const PEOPLE: Person[] = [
  { id: 1, name: 'Luke Skywalker', height: 177, weight: 70 },
  { id: 2, name: 'Darth Vader', height: 200, weight: 100 },
  { id: 3, name: 'Han Solo', height: 185, weight: 85 },
];

@Injectable()
export class PeopleService {

  constructor() { }

  getAll(): Person[] {
    return PEOPLE;
  }

  // get(id: number): Person {
  //   return PEOPLE.find(p => p.id === id);
  // }
  get(id: number): Person {
    return this.clone(PEOPLE.find(p => p.id === p.id));
  }

  save(person: Person) {
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
  }

  private clone(object: any) {
    //hack
    return JSON.parse(JSON.stringify(object));
  }
}
