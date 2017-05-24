import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Person} from '../person';
import { ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from "../people.service";


@Component({
  moduleId: module.id,
  selector: 'app-person-details',
  templateUrl: 'person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  person: Person;
  sub:any;
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

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


  savePersonDetails(){
    alert(`saved!!! ${JSON.stringify(this.person)}`);
    this.peopleService.save(this.person);
  }
}
