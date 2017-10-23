import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { MatSidenav } from '@angular/material';
import 'rxjs/add/operator/filter';
import * as domHelper from '../../../shared/helpers/dom.helper';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild(MatSidenav) private sideNave: MatSidenav;
  url:string;

  constructor(
    private router: Router
  ) { 
    router.events.filter(event => event instanceof NavigationEnd).subscribe((routeChange: NavigationEnd) => {
      this.url = routeChange.url;
      // if(this.isNavOver()) {
      //   this.sideNave.close();
      // }
    });
  }

  ngOnInit() {
  }
  
  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

}
