import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/users';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips`;

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  // Get all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripUrl);
  }

  // Add a new trip
  addTrip(trip: Trip): Observable<Trip> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.storage.getItem('travlr-token')}`
    });
    return this.http.post<Trip>(this.tripUrl, trip, { headers });
  }

  // Get trip by code
  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.tripUrl}/${tripCode}`);
  }

  // Update trip
  updateTrip(trip: Trip): Observable<Trip> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.storage.getItem('travlr-token')}`
    });
    return this.http.put<Trip>(`${this.tripUrl}/${trip.code}`, trip, { headers });
  }

  // Auth functions
  public login(user: User): Promise<AuthResponse | undefined> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse | undefined> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse | undefined> {
    const url = `${this.apiBaseUrl}${urlPath}`;
    return this.http.post<AuthResponse>(url, user).toPromise().catch(this.handleError);
  }

  private handleError(error: any): Promise<undefined> {
    console.error('API Error:', error);
    return Promise.resolve(undefined);
  }
}
