import { Injectable } from '@angular/core';

@Injectable()
export class EducationService {

  educations:Education[] = [
    {
      titulo:"Técnico Superior en Informatica",
      institucion:"I.U.T José María Carreño",
      fechaInicio:"2007-07-01",
      fechaFin:"2012-07-01",
      certificacionUrl:"https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
      duracion:0
    },
    {
      titulo:"Responsive Web Desing",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2018-01-01",
      fechaFin:"2018-08-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
      duracion:300
    },
    {
      titulo:"ReactJS",
      institucion:"Educacion IT",
      fechaInicio:"2018-07-25",
      fechaFin:"2018-08-25",
      certificacionUrl:"https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
      duracion:15
    }
  ];

  constructor() { }

  getEducation(){
    return this.educations;
  }

}

export interface Education{
  titulo:string,
  institucion:string,
  fechaInicio:string,
  fechaFin:string,
  certificacionUrl:string,
  duracion:number
}
