import { Component, OnInit } from '@angular/core';
import { ContactItem } from './contact-item.model'
import { NavMenuService } from '../../services/nav-menu.service';
import { LanguageService } from '../../services/language.service';
import { LanguageEnum } from '../../enums/language.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  location: ContactItem;
  linkedin: ContactItem;
  email: ContactItem;
  whatsapp: ContactItem;
  title: string = '';

  constructor(
    private _menuService: NavMenuService,
    private _languageService: LanguageService
  ) { }

  ngOnInit() {

    this._languageService.language$.subscribe(lang => {
      const title = this._menuService.getNavMenu(lang)[5].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
      this.email = this.getEmail(lang);
      this.whatsapp = this.getWhatsapp(lang);
      this.linkedin = this.getLinkedin(lang);
    })

  }

  getEmail(lang: LanguageEnum) {
    return new ContactItem(
      LanguageEnum.EN === lang ? "Drop Me an Email" : "Envíame un Correo",
      "jesuseduaardo@gmail.com",
      "mailto:jesuseduaardo@gmail.com",
      "assets/img/gmail.svg"
    )
  }

  getLinkedin(lang: LanguageEnum) {
    return new ContactItem(
      LanguageEnum.EN === lang ? "Let's network" : "Conectemos",
      LanguageEnum.EN === lang ? "Check out my latest goals and background." : "Echa un vistazo a mis últimos logros y experiencia.",
      "https://www.linkedin.com/in/jesuseduaardo/",
      "assets/img/linkedin.svg"
    )
  }

  getWhatsapp(lang: LanguageEnum) {
    return new ContactItem(
      LanguageEnum.EN === lang ? "Start Instant Chat" : "Escribeme",
      LanguageEnum.EN === lang ? "Let's Build Something Scalable" : "Construyamos algo escalable",
      "https://api.whatsapp.com/send?phone=541127834634",
      "assets/img/whatsapp.svg"
    )
  }

}
