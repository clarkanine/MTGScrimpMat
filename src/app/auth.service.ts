import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({ providedIn: 'root'})
export class AuthService implements OnInit{

  auth0 = new auth0.WebAuth({
    clientID: 'oqfMcWTBz3tSrNfoxfR3dbIDpxj4NpHO',
    domain: 'scrimp.auth0.com',
    responseType: 'token id_token',
    audience: 'https://scrimp.auth0.com/userinfo',
    redirectUri: 'https://stark-headland-48165.herokuapp.com/callback',
    // redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });


  constructor(public router: Router) {}

  ngOnInit()
  {
    var temp = '';
  }

  public userProfile = {name: 'defaultUser'};

  public login(): void {
    this.auth0.authorize();
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.getUserProfile();
        // this.router.navigate(['/callback']);
      } else if (err) {
        // this.router.navigate(['/callback']);
        console.log(err);
      }
    });
  }

  private getUserInfo(authResult)
  {

  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.userProfile = null;
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time

    console.log(this);
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getUserProfile()
  {
    const self = this;
      this.getProfile((err, profile) => {
        console.log(profile.name + ' acquired')
      });
  }

  getEmail()
  {
    if(this.userProfile) {
      return this.userProfile.name;
    }
  }
}