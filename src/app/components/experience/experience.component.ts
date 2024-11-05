import { Component, OnInit } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  panelOpenState: boolean = true;

  experiences: Experience[] = [];

  constructor(
    private _experienceService: ExperienceService,
  ) { }

  ngOnInit() {
    this.experiences = this._experienceService.getExperience();
  }

}
