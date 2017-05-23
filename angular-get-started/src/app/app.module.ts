import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import {PeopleService} from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
