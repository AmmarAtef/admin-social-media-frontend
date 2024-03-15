import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-leagues',
  templateUrl: './list-leagues.component.html',
  styleUrl: './list-leagues.component.css'
})
export class ListLeaguesComponent {


  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.logIn();
  }

  onLogout() {
    this.authService.logOut();
  }

}
