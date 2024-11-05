import { Injectable } from '@angular/core';
import { SoftSkillsService } from './soft-skills.service';
import { ExperienceService } from './experience.service';
import { LanguageEnum } from '../enums/language.enum';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(
    private sofSkillService: SoftSkillsService,
    private experienceService: ExperienceService
  ) { }

  getAchievements(language:LanguageEnum): Achievement[] {
    const yoe = this.sofSkillService.calculateYearsOfExperience(2018);
    const projectsParticipation = this.getProjectParticipation();
    return [
      { number: yoe, description: language === LanguageEnum.ES ? "Años de Experiencia" : "Years Experience" },
      { number: projectsParticipation, description: language === LanguageEnum.ES ? "Colaboracion en proyectos" : "Projects Collaboration" }
    ]
  }

  private getProjectParticipation(): number {
    const experiences = this.experienceService.getExperience();
    let count = 0;
    for (const experience of experiences) {
      if (experience.proyectos.length > 0) {
        count += experience.proyectos.length;
      } else {
        count++;
      }
    }
    return count;
  }

}

export interface Achievement {
  number: number,
  description: string
}
