import { NavMenu } from './../../services/nav-menu.service';
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from "@angular/router"
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private lastScrollTop = 0;
  showMenuBackground = false;
  hideNav = false;
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

  onClickScrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop) {
      this.hideNav = true;
    } else {
      this.hideNav = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    this.showMenuBackground = !this.hideNav && (this.lastScrollTop > window.screen.height);
  }

}
