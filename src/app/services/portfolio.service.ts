import { Injectable } from '@angular/core';
import { Language, Frameworks } from "./habilities.service";

@Injectable()
export class PortfolioService {

  proyects : Proyects[] = [
    {
      name:"SpotiApp",
      description: "Applicacion que consume el api de spotify, para conocer nuevos lanzamientos y artistas",
      imageUrl:"https://iili.io/JM23FI.th.jpg",
      repoUrl:"",
      url:"https://jesuseduaardo-spotiapp.herokuapp.com/",
      lenguajes:[
        {name:"Java", version:"8", icon:""},
        {name:"TypeScript", version:"3.8", icon:""}
      ],
      frameworks:[
        {name:"SpringBoot", version:5, percent:0, icon:""}, 
        {name:"Angular", version:9, percent:0, icon:"" },
        {name:"Bootstrap", version: 4, percent:0, icon:""}
      ]
    },
    {
      name:"Galletas Dino",
      description: "Maqueta de portada de sitio para reconocida marca de galletas",
      imageUrl:"https://iili.io/w8fLNt.jpg",
      repoUrl:"",
      url:"https://jesuseduaardo.tech/portfolio/cancan/dino/",
      lenguajes:[
        {name:"HTML", version:"5", icon:""},
        {name:"CSS", version:"3", icon:""},
        {name:"Javascript", version:"ES6", icon:""},
        
      ],
      frameworks:[
        {name:"Bootstrap", version: 4.6, percent:0, icon:""}
      ]
    },
    {
      name:"Galletas Can Can",
      description: "Maqueta de portada de sitio para reconocida marca de galletas",
      imageUrl:"https://iili.io/w8ftxn.jpg",
      repoUrl:"",
      url:"https://jesuseduaardo.tech/portfolio/cancan/colorin/",
      lenguajes:[
        {name:"HTML", version:"5", icon:""},
        {name:"CSS", version:"3", icon:""},
        {name:"Javascript", version:"ES6", icon:""},
        
      ],
      frameworks:[
        {name:"Bootstrap", version: 4.6, percent:0, icon:""}
      ]
    },
    {
      name:"AsRemis",
      description: "Maqueta para empresa de servicios de transporte privado",
      imageUrl:"https://iili.io/w8frKv.jpg",
      repoUrl:"",
      url:"https://jesuseduaardo.tech/portfolio/asremis/",
      lenguajes:[
        {name:"HTML", version:"5", icon:""},
        {name:"CSS", version:"3", icon:""},
        {name:"Javascript", version:"ES6", icon:""},
        
      ],
      frameworks:[
        {name:"Bootstrap", version: 4.6, percent:0, icon:""}
      ]
    },
  ] 

  constructor() { }

  getPortfolio():Proyects[]{
    return this.proyects;
  }
}

export interface Proyects{
  name:string;
  description:string;
  imageUrl:string,
  repoUrl:string,
  url:string;
  lenguajes: Language[];
  frameworks: Frameworks[]
}
