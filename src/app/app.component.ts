/*********************************************************************************
* WEB422 – Assignment 06
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Boae Park  Student ID: 075194100  Date: 2022-04-10
*
* Angular App (Deployed) Link: ..
*
* User API (Heroku) Link: https://secure-peak-24880.herokuapp.com
*
********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web422-a4';
  searchString: string = "";
  token: any;

  constructor( private router: Router, private authService: AuthService ){ }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.authService.readToken();
      }
    });
  }

  handleSearch() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchString } });
    this.searchString = "";
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
