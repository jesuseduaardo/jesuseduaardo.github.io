import { Component, OnInit } from '@angular/core';
import { HabilitiesService, Hability } from '../../services/habilities.service';
import { Achievement, AchievementService } from '../../services/achievement.service';
import { LanguageService } from '../../services/language.service';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  habilities: Hability[] = [];
  achievements: Achievement[] = [];
  title:string='';

  constructor(
    private _habilitiesService: HabilitiesService,
    private _achievementService: AchievementService,
    private _languageService: LanguageService,
    private _menuService: NavMenuService
  ) { }

  ngOnInit(): void {
    this._languageService.language$.subscribe(lang => {
      this.achievements = this._achievementService.getAchievements(lang);
      this.habilities = this._habilitiesService.getHabilities();
      const title = this._menuService.getNavMenu(lang)[3].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
    })
  }

}
