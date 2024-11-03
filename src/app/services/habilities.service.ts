import { Injectable } from '@angular/core';

@Injectable()
export class HabilitiesService {
  java: Language = { name: "Java", version: "11", icon: '../assets/img/pro-icon/java.svg' }
  virtualization: Language = { name: "Virtualization", version: 0, icon: '../assets/img/pro-icon/cloud_icon.png' }
  cloud: Language = { name: "Cloud", version: 0, icon: '../assets/img/pro-icon/cloud_icon.png' }
  android: Language = { name: "Android", version: 0, icon: '../assets/img/pro-icon/android-original.svg' }
  javaScript: Language = { name: "JavaScript", version: "ES6", icon: '../assets/img/pro-icon/javascript-original.svg' }
  php: Language = { name: "PHP", version: 7, icon: '../assets/img/pro-icon/php-original.svg' }
  sql: Language = { name: "Database", version: 0, icon: '../assets/img/pro-icon/database_icon.png' }
  html: Language = { name: "Html", version: 5, icon: '../assets/img/pro-icon/icons8-html-5-50.png' }
  css: Language = { name: "Css", version: 3, icon: '../assets/img/pro-icon/css3-original.svg' }
  versionado: Language = { name: "Version control", version: 0, icon: '../assets/img/pro-icon/367559.svg' }

  private habilities: Hability[] = [
    {
      language: this.java,
      frameworks: [
        {
          name: "Java",
          icon: '../assets/img/pro-icon/java.svg',
          version: 11,
          percent: 70
        },
        {
          name: "SpringBoot",
          icon: '../assets/img/pro-icon/spring-original.png',
          version: 2,
          percent: 65
        },
        {
          name: "JPA/Hibernate",
          icon: '../assets/img/pro-icon/hibernate.svg',
          version: 0,
          percent: 40
        },
      ]
    },
    {
      language: this.javaScript,
      frameworks: [
        {
          name: "Javascript",
          icon: '../assets/img/pro-icon/javascript-original.svg',
          version: 6,
          percent: 85
        },
        {
          name: "Typescript",
          icon: '../assets/img/pro-icon/typescript.svg',
          version: 3,
          percent: 75
        },
        {
          name: "Angular",
          icon: '../assets/img/pro-icon/angularjs-original.svg',
          version: 13,
          percent: 65
        },
        {
          name: "RxJs",
          icon: '../assets/img/pro-icon/rxjslogo.com.svg',
          version: 7,
          percent: 25
        },
        {
          name: "ReactJS",
          icon: '../assets/img/pro-icon/reactjs-icon.svg',
          version: 16,
          percent: 15
        },
      ]
    },
    {
      language: this.css,
      frameworks: [
        {
          name: "CSS",
          icon: '../assets/img/pro-icon/css3-original.svg',
          version: 3,
          percent: 80
        },
        {
          name: "Saas",
          icon: '../assets/img/pro-icon/sass-original.svg',
          version: 1.38,
          percent: 75
        },
        {
          name: "Bootstrap",
          icon: '../assets/img/pro-icon/bootstrap-original.svg',
          version: 4,
          percent: 95
        }
      ]
    },
    {
      language: this.sql,
      frameworks: [
        {
          name: "MySql",
          icon: '../assets/img/pro-icon/mysql-original.png',
          version: 0,
          percent: 60
        },
        {
          name: "MS SQL",
          icon: '../assets/img/pro-icon/microsoft-sql-server.svg',
          version: 0,
          percent: 40
        },
      ]
    },
    {
      language: this.versionado,
      frameworks: [
        {
          name: "GIT",
          icon: '../assets/img/pro-icon/git-original.svg',
          version: 0,
          percent: 75
        },
      ]
    },
    {
      language: this.virtualization,
      frameworks: [
        {
          name: "Docker",
          icon: '../assets/img/pro-icon/docker.svg',
          version: 1.5,
          percent: 15
        },
        {
          name: "Kubernetes",
          icon: '../assets/img/pro-icon/kubernets.svg',
          version: 1.5,
          percent: 5
        }
      ]
    },
    {
      language: this.cloud,
      frameworks: [
        {
          name: "AWS",
          icon: '../assets/img/pro-icon/amazon-web-services.png',
          version: 0,
          percent: 13
        },
        {
          name: "GCP",
          icon: '../assets/img/pro-icon/google-cloud.svg',
          version: 0,
          percent: 10
        }
      ]
    },
  ];

  constructor() { }

  getHabilities(): Hability[] {
    return this.habilities;
  }

}

export interface Hability {
  language: Language,
  frameworks: Frameworks[]
}
export interface Language {
  name: string,
  version: any,
  icon: string
}
export interface Frameworks {
  name: string,
  icon: string,
  version: number,
  percent: number,
}
