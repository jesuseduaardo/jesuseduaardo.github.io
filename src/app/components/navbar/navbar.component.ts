import { NavMenu } from './../../services/nav-menu.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showMenu = false;
  navMenu: NavMenu[];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private navMenuService: NavMenuService
  ) {
    this.navMenu = navMenuService.getNavMenu();
  }

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
