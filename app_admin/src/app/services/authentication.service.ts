import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/users';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from './trip-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}

  public getToken(): string {
    return this.storage.getItem('travlr-token') || '';
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public login(user: User): Promise<void> {
    return this.tripDataService.login(user).then((authResp) => {
      if (authResp && authResp.token) {
        this.saveToken(authResp.token);
        return Promise.resolve();
      } else {
        return Promise.reject('Login failed: No token received.');
      }
    });
  }

  public register(user: User): Promise<void> {
    return this.tripDataService.register(user).then((authResp) => {
      if (authResp && authResp.token) {
        this.saveToken(authResp.token);
        return Promise.resolve();
      } else {
        return Promise.reject('Registration failed: No token received.');
      }
    });
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User | null {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
    return null;
  }
}
