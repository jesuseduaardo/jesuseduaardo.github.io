import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { EducationService, Education } from '../../services/education.service';
import { HabilitiesService, Hability } from '../../services/habilities.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  panelOpenState:boolean;

  experiences:Experience[] = [];
  education:Education[] = [];
  habilities:Hability[] = [];

  constructor(
    private _experienceService:ExperienceService, 
    private _educationService:EducationService,
    private _habilitiesService:HabilitiesService) { }

  ngOnInit() {
    this.experiences = this._experienceService.getExperience();
    this.education = this._educationService.getEducation();
    this.habilities = this._habilitiesService.getHabilities();
    console.log(this.habilities);
  }

}
