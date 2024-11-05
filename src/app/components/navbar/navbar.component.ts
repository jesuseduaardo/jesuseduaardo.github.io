import { NavMenu } from './../../services/nav-menu.service';
import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { NavMenuService } from '../../services/nav-menu.service';
import { LanguageEnum } from '../../enums/language.enum';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private lastScrollTop = 0;
  showMenuBackground = false;
  hideNav = false;
  showMenu = false;
  navMenu: NavMenu[];
  lang: LanguageEnum = LanguageEnum.EN;

  constructor(
    private _router: Router,
    private _viewportScroller: ViewportScroller,
    private _navMenuService: NavMenuService,
    private _languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this._languageService.language$.subscribe(lang => {
      this.lang = lang;
      this.navMenu = this._navMenuService.getNavMenu(this.lang);
    })
  }

  public navigate(url: string): void {
    this._router.navigate([`/${url}`])
  }

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onClickScrollTo(elementId: string): void {
    this._viewportScroller.scrollToAnchor(elementId);
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

  changeLang(lang: string) {
    let langSelected = LanguageEnum.EN;
    if (lang === LanguageEnum.ES) {
      langSelected = LanguageEnum.ES
    }
    this._languageService.setLanguage(langSelected);
  }
}
