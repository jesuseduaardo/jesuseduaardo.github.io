import { LanguageEnum } from './../enums/language.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  private aboutMe: string = `Senior Full Stack Engineer specialized in cloud-native architectures, microservices and enterprise modernization with ${this.calculateYearsOfExperience(2018)}+ years of experience building scalable systems that process thousands of transactions securely and efficiently.`

  private aboutMeES: string = `Ingeniero senior Full Stack especializado en arquitecturas nativas de la nube, microservicios y modernización empresarial, con más de ${this.calculateYearsOfExperience(2018)} años de experiencia en la creación de sistemas escalables que procesan miles de transacciones de forma segura y eficiente.`

  private softSkills: SoftSkill[] = [
    {
      name: "Java & Spring Boot",
      description: ""
    },
    {
      name: "AWS Cloud Architecture",
      description: ""
    },
    {
      name: "Event-Driven Systems",
      description: ""
    },
    {
      name: "Microservices",
      description: ""
    },
    {
      name: "Angular & React",
      description: ""
    },
  ]

  private softSkillsES: SoftSkill[] = [
    {
      name: "Liderazgo y Diseño Arquitectónico (Architectural Ownership)",
      description: "Diseño de microservicios resilientes, escalables y desacoplados. Asumo la responsabilidad total del ciclo de vida del software: desde la concepción de la arquitectura y la infraestructura cloud hasta el despliegue y su mantenimiento."
    },
    {
      name: "Colaboración Remota de Alto Rendimiento",
      description: "Integración fluida en equipos distribuidos bajo metodologías Agile/Scrum. Comunicación técnica clara y directa que garantiza la alineación con los objetivos del negocio."
    },
    {
      name: "Procesamiento de Datos a Gran Escala (Event-Driven Data)",
      description: "Especialista en la creación de pipelines asíncronos para la ingesta y preparación de datos masivos. Experiencia integral integrando streaming, arquitecturas orientadas a eventos y notificaciones concurrentes en la nube."
    },
    {
      name: "Ingeniería Continua y Evolutiva",
      description: "Rápida adaptabilidad a frameworks modernos y requisitos técnicos complejos. Capacidad demostrada para absorber nuevas tecnologías y refactorizar sistemas críticos sin interrumpir la operación del negocio."
    }
  ]

  private impact: SoftSkill[] = [
    {
      name: "Architected event-driven pipelines processing 500K+ daily transactions in retail banking.",
      description: "End-to-end design using AWS SQS, S3 multi-part streaming and DynamoDB — zero memory overhead, high availability."
    },
    {
      name: "Delivered secure banking applications under financial-grade compliance standards.",
      description: "Clean Code + TDD enforced across the full stack — Java/Spring Boot backend, Angular/React frontend — in regulated environments where security isn't optional."
    },
    {
      name: "Drove architecture decisions on cloud-native microservices migration.",
      description: "Sole technical owner of infrastructure design choices — decoupled, resilient services deployed on AWS, aligned with modern engineering standards."
    },
    {
      name: "Adapted rapidly to evolving tech requirements without sacrificing delivery quality",
      description: `${this.calculateYearsOfExperience(2018)}+ years navigating framework upgrades, new cloud services and changing business rules in fast-moving Agile/Scrum environments.`
    },
  ]

  private impactEs: SoftSkill[] = [
    {
      name: "Arquitecté pipelines orientados a eventos procesando más de 500K transacciones diarias en banca retail.",
      description: "Diseño end-to-end utilizando AWS SQS, S3 multipart streaming y DynamoDB — sin overhead de memoria, alta disponibilidad."
    },
    {
      name: "Entregué aplicaciones bancarias seguras bajo estándares de cumplimiento de nivel financiero.",
      description: "Clean Code + TDD aplicados en todo el stack — backend Java/Spring Boot, frontend Angular/React — en entornos regulados donde la seguridad no es opcional."
    },
    {
      name: "Lideré decisiones de arquitectura en la migración a microservicios cloud-native.",
      description: "Responsable técnico único de las decisiones de diseño de infraestructura — servicios desacoplados y resilientes desplegados en AWS, alineados con estándares modernos de ingeniería."
    },
    {
      name: "Me adapté rápidamente a requisitos tecnológicos cambiantes sin sacrificar la calidad de entrega.",
      description: `${this.calculateYearsOfExperience(2018)}+ años navegando actualizaciones de frameworks, nuevos servicios cloud y reglas de negocio cambiantes en entornos Agile/Scrum de ritmo acelerado.`
    },
  ]

  constructor() { }

  getSoftSkills(language: LanguageEnum): SoftSkill[] {
    if (language === LanguageEnum.ES) {
      return this.softSkillsES;
    }
    return this.softSkills;

  }

  getImpact(language: LanguageEnum): SoftSkill[] {
    if (language === LanguageEnum.ES) {
      return this.impactEs;
    }
    return this.impact;
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
