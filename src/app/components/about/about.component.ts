import { LanguageService } from '../../services/language.service';
import { NavMenuService } from '../../services/nav-menu.service';
import { SoftSkill, SoftSkillsService } from './../../services/soft-skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMe: string = "";
  softSkills: SoftSkill[]
  impact: SoftSkill[] = [];
  title: string = ""

  constructor(
    private _sofSkillService: SoftSkillsService,
    private _languageService: LanguageService,
    private _menuService: NavMenuService,
  ) { }

  ngOnInit() {
    this._languageService.language$.subscribe(lang => {
      this.aboutMe = this._sofSkillService.getAboutMe(lang);
      this.softSkills = this._sofSkillService.getSoftSkills(lang);
      const title = this._menuService.getNavMenu(lang)[1].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
      this.impact = this._sofSkillService.getImpact(lang);
    })
  }
}
