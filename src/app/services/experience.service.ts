import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService{
    private experience:Experience[] = [
        {
            empresa:"Itaú Unibanco",
            puesto: "System Analyst",
            fechaIngreso: "2022-03-09",
            fechaEgreso: "",
            proyectos:[],
            resumenProyecto:`
            - Development a bank Teller application for daily bank operations.\n
            - Develop tools for test and debug the app.\n
            - Active participate in Scrum ceremonies, Code review and Pair Programing`,
            tecnologias: ["MS Sql","Java 11","SpringBoot2", "Angular13", "TypeScript3", "RxJs6"],
            web:"https://www.itau.com.ar/"
        },
        {
            empresa:"BBVA",
            puesto: "System Analyst",
            fechaIngreso: "2021-06-21",
            fechaEgreso: "2022-03-07",
            proyectos:[],
            resumenProyecto:"Evolutive development and bug fixing for the home banking web app.",
            tecnologias: ["Java", "SpringMVC", "Angular", "Git"],
            web:"https://www.bbva.com.ar/"
        },
        {
            empresa:"Globant",
            puesto: "Java Developer",
            fechaIngreso: "2020-10-05",
            fechaEgreso: "2021-06-14",
            proyectos:[
                {
                    nombre:"Bimo (Prisma S.A)",
                    resumenProyecto:"Build RESTful apis what consume third party apis and served data to the E-Wallet BIMO",
                    tecnologias: ["Java", "SpringBoot", "SQLServer", "Jenkins", "Spock", "Git"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.globant.com/"
        },
        {
            empresa:"IT Resources",
            puesto: "Java Developer",
            fechaIngreso: "2019-07-01",
            fechaEgreso: "2020-10-02",
            proyectos:[
                {
                    nombre:"I+D - Kaiso App",
                    resumenProyecto:"Develop web App with memory exercises aimed at people with cognitive disabilities",
                    tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
                },
                {
                    nombre:"Legal Security",
                    resumenProyecto:"Built internal tool using Spring MVC and jQuery to manage company surveillance system",
                    tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                },
                {
                    nombre:"Banco Santander",
                    resumenProyecto:"Development and maintenance of the Santander Bank portal application",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.itrsa.com.ar/"
        },
        {
            empresa:"Eglam Argentina",
            puesto: "Programador Backend",
            fechaIngreso: "2019-02-01",
            fechaEgreso: "2019-07-01",
            proyectos:[],
            resumenProyecto:"Develop magento based applications, for example: dashboard reports, console applications, etc.",
            tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
            web:"https://www.glamit.com.ar/"
        },
        {
            empresa:"Tecnosoftware S.A",
            puesto: "Programador Java",
            fechaIngreso: "2018-07-01",
            fechaEgreso: "2019-02-01",
            proyectos:[
                {
                    nombre:"Banco Provincia",
                    resumenProyecto:"Built and Maintained Home Banking Application, Communicating With Cross-Functional Teams Regarding Product and Design",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript/jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.tecnosoftware.com/"
        },
        {
            empresa:"Arkiteck C.A",
            puesto: "Analista de Sistemas 3",
            fechaIngreso: "2017-11-01",
            fechaEgreso: "2018-02-01",
            proyectos:[
                {
                    nombre:"Banco BBVA Provincial (Venezuela)",
                    resumenProyecto:"Collaborated with contact center team members to implement new UI. Using Spring MVC with Java7 and jQuery",
                    tecnologias: ["JavaEE", "SpringMVC", "Bootstrap3","Javascript/jQuery", "Git"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"http://www.arkiteck.net/"
        },
        {
            empresa:"La Victoria 3021 R.L (Venezuela)",
            puesto: "Web Developer",
            fechaIngreso: "2013-10-01",
            fechaEgreso: "2017-11-01",
            proyectos:[],
            resumenProyecto:"Desarrollo de sitios/aplicaciones web tanto en frontend y backend siguiendo las exigencias de cada proyecto",
            tecnologias: ["PHP5", "Codeigniter", "MySql", "Bootstrap3", "Javascript/jQuery", "Git"]
        },

    ];

    getExperience():Experience[]{
        return this.experience;
    }
}

export interface Experience{
    empresa:string,
    puesto:string,
    fechaIngreso:string,
    fechaEgreso:string,
    proyectos:Proyects[],
    resumenProyecto:string,
    tecnologias:string[],
    web?:string
}

interface Proyects{
    nombre:string,
    resumenProyecto:string,
    tecnologias:string[]
}
