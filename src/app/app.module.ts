import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ROUTING } from "./app.routing";
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleService } from './people.service';
import { PlanetsService } from './planets.service';

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, ClarityModule, FormsModule, HttpClientModule, ROUTING ],
  declarations: [ AppComponent, PeopleComponent, PlanetsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PeopleService, PlanetsService]
})
export class AppModule { }
