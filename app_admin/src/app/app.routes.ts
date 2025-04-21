import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { LoginComponent } from './login/login.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'list-trips',
    loadComponent: () => import('./trip-listing/trip-listing.component').then(m => m.TripListingComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./add-trip/add-trip.component').then(m => m.AddTripComponent)
  },
  {
    path: 'edit/:tripCode',
    loadComponent: () => import('./edit-trip/edit-trip.component').then(m => m.EditTripComponent)
  }
];
