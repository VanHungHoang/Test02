import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Person} from '../person';
import { ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from "../people.service";


@Component({
  selector: 'app-person-details',
  template: `
    <section *ngIf="person">
    <h2>You selected:  {{person.name}}</h2>
    <h3>Description</h3>
    <p>
       {{person.name}} weights {{person.weight}} and is {{person.height}} tall.
    </p>
  </section>
  <! -- NEW BUTTON HERE! -->
    <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  sub:any;

  constructor(private route:ActivatedRoute,
              private peopleService:PeopleService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
      // let link = ['/persons'];
      // this.router.navigate(link);
      window.history.back();
  }

}
