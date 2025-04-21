import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private baseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // GET: all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  // POST: add a new trip
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip);
  }

  // GET: get a single trip by code (FIXED to return a single Trip object)
  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${tripCode}`);
  }

  // PUT: update a trip
  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${trip.code}`, trip);
  }

  // DELETE: delete a trip
  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${tripCode}`);
  }
}
