import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../people.service";
import { ClrDatagridStateInterface } from "@clr/angular";
import {SWapiResponse} from '../swapi-response';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: []
})
export class PeopleComponent {}