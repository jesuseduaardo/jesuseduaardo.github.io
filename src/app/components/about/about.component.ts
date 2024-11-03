import { SoftSkill, SoftSkillsService } from './../../services/soft-skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMe: string = "";
  sofSkills: SoftSkill[]

  constructor(private sofSkillService: SoftSkillsService) { }

  ngOnInit() {
    this.aboutMe = this.sofSkillService.getAboutMe();
    this.sofSkills = this.sofSkillService.getSoftSkills();
  }
}
