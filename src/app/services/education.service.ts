import { LanguageEnum } from './../enums/language.enum';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {

  private educations: Education[] = [
    {
      titulo: "Associate Degree in Information Technology",
      institucion: "I.U.T José María Carreño - Miranda. Venezuela",
      fechaInicio: "2007-07-01",
      fechaFin: "2012-07-01",
      certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
      duracion: 0
    },
  ];
  private educationsES: Education[] = [
    {
      titulo: "Técnico Superior Universitario en Informática",
      institucion: "I.U.T José María Carreño - Miranda. Venezuela",
      fechaInicio: "2007-07-01",
      fechaFin: "2012-07-01",
      certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
      duracion: 0
    },
  ];

  constructor() { }

  getEducation(language: LanguageEnum) {
    if (language === LanguageEnum.ES) {
      return this.educationsES;
    }
    return this.educations;
  }

}

export interface Education {
  titulo: string,
  institucion: string,
  fechaInicio: string,
  fechaFin: string,
  certificacionUrl: string,
  duracion: number
}
