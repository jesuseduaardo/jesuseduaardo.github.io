import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  certifications:Certification[]=[
    {
      titulo:"Angular (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/bddba66b1683",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-angular(basic)_tn.jpg'
      
    },
    {
      titulo:"React (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/86772c3ab8a4",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-react(basic)_tn.jpg'
      
    },
    {
      titulo:"JavaScript Algorithms and Data Structures",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2020-05-01",
      fechaFin:"2020-05-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/fcc-javascript_algorithms_tn.jpg'
    },
    {
      titulo:"Responsive Web Desing",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2018-01-01",
      fechaFin:"2018-08-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/fcc-resposive_web_design_tn.jpg'
    },
    {
      titulo:"ReactJS",
      institucion:"Educacion IT",
      fechaInicio:"2018-07-25",
      fechaFin:"2018-08-25",
      certificacionUrl:"https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
      duracion:15,
      thumbnails:'/assets/img/certs/thumbnails/educacionit-reactjs_tn.jpg'
    }
  ]

  constructor() { }

  getCertifications(){
    return this.certifications;
  }
}


export interface Certification{
  titulo:string,
  institucion:string,
  fechaInicio:string,
  fechaFin:string,
  certificacionUrl:string,
  duracion:number,
  thumbnails:string
}
