import { Component, OnInit } from '@angular/core';
import { Person } from 'app/person'
import { PeopleService } from '../people.service'
@Component({
  selector: 'app-people-list',
  template: `
    <ul>
    <li *ngFor="let person of people">
      <!--<a href="#" (click)="selectPerson(person)">-->
      <a [routerLink]="['/persons', person.id]">
      {{person.name}}
      </a>
    </li>
    </ul>
    <section *ngIf="errorMessage">
      {{errorMessage}}
    </section>
    <!--<app-person-details></app-person-details>-->
    
    

  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson: Person;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }

  selectPerson(person) {
    this.selectedPerson = person;
  }

}
