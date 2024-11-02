import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMenu = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  public navigate(url: string): void {
    this.router.navigate([`/${url}`])
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onClickScroollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
