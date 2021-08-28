import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigate(url: string): void {
    this.router.navigate([`/${url}`])
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
