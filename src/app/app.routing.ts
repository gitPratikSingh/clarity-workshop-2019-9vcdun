import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'planets', component: PlanetsComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
