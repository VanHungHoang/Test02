import { Component, OnInit } from '@angular/core';
import {Person} from 'app/person'
import {PeopleService} from '../people.service'
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

    <!--<app-person-details></app-person-details>-->
    
    

  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  selectedPerson: Person;
  constructor(private _peopleService: PeopleService) { 
    
  }

  ngOnInit() {
    this.people = this._peopleService.getAll();
  }

  selectPerson(person){
    this.selectedPerson = person;
  }

}
