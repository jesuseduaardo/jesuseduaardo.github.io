import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  certifications:Certification[]=[
    {
      titulo:"Especializacion en React",
      institucion:"Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
      fechaInicio:"",
      fechaFin:"2023-07",
      certificacionUrl:"https://drive.google.com/file/d/1sGARFiKQyTmN3eVHlAIDjgFdJi-4AoHF/view",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/especializacion-en-react-codo-a-codo.jpg'
    },
    {
      titulo:"Docker Mastery: with Kubernetes+Swarm from a Docker Captain",
      institucion:"Udemy",
      fechaInicio:"",
      fechaFin:"2023-05-05",
      certificacionUrl:"https://www.udemy.com/certificate/UC-dba836d8-3518-481c-a11d-6ba9f27a0210/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/docker-mastery-with-kubernetes+swarm-from-docker-captain.jpg'
    },
    {
      titulo:"Microservicios Spring Cloud Eureka & Angular Full-stack",
      institucion:"Udemy",
      fechaInicio:"",
      fechaFin:"2022-09-11",
      certificacionUrl:"https://www.udemy.com/certificate/UC-3490da41-2672-4c0d-b2b5-7c30dfb34657/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/microservicios-spring-cloud-eureka-angular-full-stack.jpg'
    },
    {
      titulo:"ReactiveX - RxJs: De cero hasta los detalles",
      institucion:"Udemy",
      fechaInicio:"",
      fechaFin:"2022-04-17",
      certificacionUrl:"https://www.udemy.com/certificate/UC-c4490a71-ae86-48de-afa8-9dfd6d8b12d7/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/ReactiveX-RxJs-De cero-hasta-los-detalles_tn.jpg'
    },
    {
      titulo:"Full Stack: Angular and Java Spring Boot E-Commerce Website",
      institucion:"Udemy",
      fechaInicio:"",
      fechaFin:"2022-03-24",
      certificacionUrl:"https://www.udemy.com/certificate/UC-7fd4765f-a9da-40cc-94e9-28bd91d57664/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/Full-Stack-Angular-and-Java-Spring Boot-E-Commerce-Website_tn.jpg'
    },
    {
      titulo:"Javascript Desarrollador Avanzado",
      institucion:"Educacion IT",
      fechaInicio:"",
      fechaFin:"2022-01-05",
      certificacionUrl:"https://api.alumni.education/course/certificate/generate?hash=49573409-1092-4d27-b394-76abad260a46&format=pdf",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/Javascript-desarrollador-avanzado_tn.jpg'
    },
    {
      titulo:"Programando con Java para aplicaciones Android",
      institucion:"Universidad Nacional Autónoma de México (Coursera)",
      fechaInicio:"2021-05-18",
      fechaFin:"2021-09-11",
      certificacionUrl:"https://www.coursera.org/account/accomplishments/certificate/99NWVU3UT93V",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
    },
    {
      titulo:"Fundamentos de Android",
      institucion:"Universidad Nacional Autónoma de México (Coursera)",
      fechaInicio:"2021-05-18",
      fechaFin:"2021-07-12",
      certificacionUrl:"https://www.coursera.org/account/accomplishments/verify/MN6LWA5PM44V",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
    },
    {
      titulo:"Java Advanced Programming: Threads, Networking, J2SE",
      institucion:"EducacionIT",
      fechaInicio:"2021-05-18",
      fechaFin:"2021-07-12",
      certificacionUrl:"https://api.alumni.education/course/certificate/generate?hash=150b02c8-086e-4af4-8e8e-db165031a29e&format=pdf",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/educacionit.thumb.png'
    },
    {
      titulo:"Liquibase Fundamentals Certification",
      institucion:"Liquibase University",
      fechaInicio:"2020-12-18",
      fechaFin:"2021-02-12",
      certificacionUrl:"https://www.credential.net/28060f9f-ebd1-4eea-a916-c5aaf81b67ef#gs.ta2u98",
      duracion:0,
      thumbnails:'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28715111'
    },
    {
      titulo:"Programación Reactiva con Spring Boot 2 y Spring WebFlux",
      institucion:"Udemy",
      fechaInicio:"2020-12-18",
      fechaFin:"2021-01-01",
      certificacionUrl:"https://www.udemy.com/certificate/UC-e70f78d5-6756-4af2-8473-d80d15b668ba/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/programacion-reactiva-springboot.thumb.png'
    },
    {
      titulo:"Apache Kafka con Java, Spring framework y AWS",
      institucion:"Udemy",
      fechaInicio:"2020-10-18",
      fechaFin:"2020-10-24",
      certificacionUrl:"https://www.udemy.com/certificate/UC-a78a1a84-0acc-47c9-8ae7-a458c1e67a95/",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/kafka-java-spring-aws.thumb.png'
    },
    {
      titulo:"Angular (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/bddba66b1683",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-angular(basic).thumb.png'
    },
    {
      titulo:"React (Basic) ",
      institucion:"HackerRank",
      fechaInicio:"2020-06-01",
      fechaFin:"2020-06-01",
      certificacionUrl:"https://www.hackerrank.com/certificates/86772c3ab8a4",
      duracion:0,
      thumbnails:'/assets/img/certs/thumbnails/hackerrank-react(basic).thumb.png'
    },
    {
      titulo:"JavaScript Algorithms and Data Structures",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2020-05-01",
      fechaFin:"2020-05-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/fcc-javascript_algorithms.thumb.png'
    },
    {
      titulo:"Responsive Web Desing",
      institucion:"FreeCodeCamp.org",
      fechaInicio:"2018-01-01",
      fechaFin:"2018-08-01",
      certificacionUrl:"https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
      duracion:300,
      thumbnails:'/assets/img/certs/thumbnails/fcc-resposive_web_design.thumb.png'
    },
    {
      titulo:"ReactJS",
      institucion:"Educacion IT",
      fechaInicio:"2018-07-25",
      fechaFin:"2018-08-25",
      certificacionUrl:"https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
      duracion:15,
      thumbnails:'/assets/img/certs/thumbnails/educacionit-reactjs.thumb.png'
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
