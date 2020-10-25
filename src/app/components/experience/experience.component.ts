import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { EducationService, Education } from '../../services/education.service';
import { HabilitiesService, Hability } from '../../services/habilities.service';
import { CertificationsService, Certification } from '../../services/certifications.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  panelOpenState:boolean;

  experiences:Experience[] = [];
  education:Education[] = [];
  certifications:Certification[]=[];
  habilities:Hability[] = [];

  constructor(
    private _experienceService:ExperienceService, 
    private _educationService:EducationService,
    private _habilitiesService:HabilitiesService,
    private _certificationService:CertificationsService) { }

  ngOnInit() {
    this.experiences = this._experienceService.getExperience();
    this.education = this._educationService.getEducation();
    this.habilities = this._habilitiesService.getHabilities();
    this.certifications = this._certificationService.getCertifications();
  }

}
