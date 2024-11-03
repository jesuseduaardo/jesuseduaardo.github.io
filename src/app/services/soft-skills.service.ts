import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  private aboutMe: string = `I am a creative Java developer with ${this.calculateYearsOfExperience(2018)} years of experience in full stack programming,  specializing in languages like Java and Javascript. I like about learning new technologies also to build solutions with great performance and intuitive design, making use of good practices and the best industry standards.`

  private softSkills: SoftSkill[] = [
    {
      name: "Effective communication",
      description: "Expreso mis ideas técnicas de forma clara y concisa, tanto de forma oral como escrita. Entiendo las necesidades de los demás y respondo de manera adecuada. Expreso opiniones y preocupaciones de manera respetuosa y directa."
    },
    {
      name: "Continuous learning",
      description: "Me mantengo, en lo posible, actualizado con las últimas tecnologías y tendencias."
    },
    {
      name: "Adaptability",
      description: "Me Adapto a cambios en los requisitos y tecnologías. Tengo alta tolerancia a la ambigüedad, he trabajado en entornos con información incompleta."
    },
    {
      name: "Teamwork",
      description: "Trabajo de manera conjunta con otros programadores y equipos. Me ajusto a los cambios y trabajo en entornos dinámicos. Manejo desacuerdos de manera constructiva."
    },
    {
      name: "Resilience",
      description: "Mantengo la calma bajo presión, persistir ante los desafíos"
    },
    {
      name: "Creativity",
      description: "Propongo soluciones y enfoques. Busco encontrar soluciones creativas a desafíos complejos."
    },
  ]

  constructor() { }

  getSoftSkills(): SoftSkill[] {
    return this.softSkills;
  }
  getAboutMe(): string {
    return this.aboutMe;
  }

  calculateYearsOfExperience(pastYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - pastYear;
  }

}

export interface SoftSkill {
  name: string,
  description: string
}
