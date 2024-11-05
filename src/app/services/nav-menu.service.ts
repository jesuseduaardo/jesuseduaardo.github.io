import { Injectable } from '@angular/core';
import { LanguageEnum } from '../enums/language.enum';

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

  private navMenuES: NavMenu[] = [
    { menu: "inicio", view: "home-view" },
    { menu: "sobre Mi", view: "about-view" },
    { menu: "experiencia", view: "experience-view" },
    { menu: "habilidades", view: "skills-view" },
    { menu: "educación", view: "education-view" },
    { menu: "contacto", view: "contact-view" },
  ]

  constructor() { }

  getNavMenu(lang: LanguageEnum): NavMenu[] {
    if (lang == LanguageEnum.ES) {
      return this.navMenuES;
    }
    return this.navMenu;
  }
}

export interface NavMenu {
  menu: string,
  view: string
}
