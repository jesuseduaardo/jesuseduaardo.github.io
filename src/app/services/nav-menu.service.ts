import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  private navMenu: NavMenu[] = [
    { menu: "home", view: "home-view" },
    { menu: "about", view: "about-view" },
    { menu: "experience", view: "experience-view" },
    { menu: "skills", view: "skills-view" },
    { menu: "education", view: "education-view" },
    { menu: "contact", view: "contact-view" },
  ]

  constructor() { }

  getNavMenu(): NavMenu[] {
    return this.navMenu;
  }
}

export interface NavMenu {
  menu: string,
  view: string
}
