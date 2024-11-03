import { Component, OnInit } from '@angular/core';
import { HabilitiesService, Hability } from '../../services/habilities.service';
import { Achievement, AchievementService } from '../../services/achievement.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  habilities: Hability[] = [];
  achievements: Achievement[] = [];

  constructor(
    private _habilitiesService: HabilitiesService,
    private _achievementService: AchievementService
  ) { }

  ngOnInit(): void {
    this.habilities = this._habilitiesService.getHabilities();
    this.achievements = this._achievementService.getAchievements();
  }

}
