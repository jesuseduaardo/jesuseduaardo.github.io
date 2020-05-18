import { Injectable } from '@angular/core';

@Injectable()
export class HabilitiesService {

  java7:Language={name:"JavaEE", version:7}
  javaScript:Language={name:"JavaScript", version:"ES6"}
  php:Language={name:"PHP", version:7}
  sql:Language={name:"SQL", version:0}
  html:Language={name:"Html", version:5}
  css:Language={name:"Css", version:3}

  habilities:Hability[] = [
    {
      language:this.java7,
      frameworks:[
        {
          name:"SpringMVC",
          version:5,
          percent:60
        },
        {
          name:"SpringBoot",
          version:2,
          percent:30
        },
        {
          name:"JPA/Hibernate",
          version:0,
          percent:20
        },
      ]
    },
    {
      language:this.sql,
      frameworks:[
        {
          name:"MySql",
          version:0,
          percent:60
        },
        {
          name:"PL/SQL",
          version:0,
          percent:10
        }
      ]
    },
    {
      language:this.javaScript,
      frameworks:[
        {
          name:"ReactJS",
          version:16,
          percent:75
        },
        {
          name:"jQuery",
          version:3,
          percent:80
        },
        {
          name:"Angular",
          version:8,
          percent:30
        }
      ]
    },
    {
      language:this.php,
      frameworks:[
        {
          name:"Laravel",
          version:5.8,
          percent:60
        }
      ]
    },
    {
      language:this.css,
      frameworks:[
        {
          name:"Bootstrap",
          version:4,
          percent:80
        }
      ]
    },
  ];

  constructor() { }

  getHabilities():Hability[]{
    return this.habilities;
  }

}

export interface Hability{
  language:Language,
  frameworks:Frameworks[]
}
export interface Language{
  name:string,
  version:any
}
export interface Frameworks{
  name:string,
  version:number,
  percent:number,
}