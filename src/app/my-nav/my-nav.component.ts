import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {
  profile: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {}
  
  loginClicked()
  {
    this.authService.login();
  }

  ngOnInit() {
    // this.authService.getUserProfile();
  }

  checkLoggedIn()
  {
    if(this.authService.isAuthenticated()) {
      console.log(this.authService.userProfile.name + ' is logged in');
    }
    else console.log('not logged in');
  }
}
