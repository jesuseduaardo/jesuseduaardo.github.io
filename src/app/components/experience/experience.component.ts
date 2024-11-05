import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { LanguageService } from '../../services/language.service';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  panelOpenState: boolean = true;

  experiences: Experience[] = [];
  title:string='';

  constructor(
    private _languageService: LanguageService,
    private _experienceService: ExperienceService,
    private _menuService:NavMenuService
  ) { }

  ngOnInit() {
    this._languageService.language$.subscribe(lang => {
      this.experiences = this._experienceService.getExperience(lang);
      const title = this._menuService.getNavMenu(lang)[2].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
    })
  }

}
