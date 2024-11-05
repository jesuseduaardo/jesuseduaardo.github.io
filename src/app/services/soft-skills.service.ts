import { LanguageEnum } from './../enums/language.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  private aboutMe: string = `I am a creative Java developer with ${this.calculateYearsOfExperience(2018)}+ years of experience in full stack programming,  specializing in languages like Java and Javascript. I like about learning new technologies also to build solutions with great performance and intuitive design, making use of good practices and the best industry standards.`

  private aboutMeES: string = `Soy un creativo desarrollador Java con ${this.calculateYearsOfExperience(2018)}+ años de experiencia en programación full stack, especializado en lenguajes como Java y Javascript. Me gusta aprender nuevas tecnologías y aplicarlas en la construccion de soluciones de gran rendimiento y diseño intuitivo, haciendo uso de las buenas prácticas y los mejores estándares de la industria.`

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

  private softSkillsES: SoftSkill[] = [
    {
      name: "Comunicación Efectiva",
      description: "Expreso mis ideas técnicas de forma clara y concisa, tanto de forma oral como escrita. Entiendo las necesidades de los demás y respondo de manera adecuada. Expreso opiniones y preocupaciones de manera respetuosa y directa."
    },
    {
      name: "Aprendizaje  Continuo",
      description: "Me mantengo, en lo posible, actualizado con las últimas tecnologías y tendencias."
    },
    {
      name: "Adaptabilidad",
      description: "Me Adapto a cambios en los requisitos y tecnologías. Tengo alta tolerancia a la ambigüedad, he trabajado en entornos con información incompleta."
    },
    {
      name: "Trabajo en equipo",
      description: "Trabajo de manera conjunta con otros programadores y equipos. Me ajusto a los cambios y trabajo en entornos dinámicos. Manejo desacuerdos de manera constructiva."
    },
    {
      name: "Resiliencia",
      description: "Mantengo la calma bajo presión, persistir ante los desafíos"
    },
    {
      name: "Creatividad",
      description: "Propongo soluciones y enfoques. Busco encontrar soluciones creativas a desafíos complejos."
    },
  ]

  constructor() { }

  getSoftSkills(language: LanguageEnum): SoftSkill[] {
    if (language === LanguageEnum.ES) {
      return this.softSkillsES;
    }
    return this.softSkills;

  }

  getAboutMe(language: LanguageEnum): string {
    if (language === LanguageEnum.ES) {
      return this.aboutMeES;
    }
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
