import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService{
    private experience:Experience[] = [
        {
            empresa:"BBVA S.A",
            puesto: "Analista de Sistemas",
            fechaIngreso: "2021-06-21",
            fechaEgreso: "",
            proyectos:[],
            resumenProyecto:"",
            tecnologias: ["Java", "Angular"],
            web:"https://www.bbva.com.ar/"
        },
        {
            empresa:"Globant S.A",
            puesto: "Java Developer",
            fechaIngreso: "2020-10-05",
            fechaEgreso: "2021-06-14",
            proyectos:[
                {
                    nombre:"Bimo (Prisma S.A)",
                    resumenProyecto:"Desarrollo de microservicios y consumo de apis de terceros para la e-wallet Bimo",
                    tecnologias: ["Java", "SpringBoot", "SQLServer", "Jenkins", "Spock", "Git"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.globant.com/"
        },
        {
            empresa:"IT Resources S.A",
            puesto: "Programador Java",
            fechaIngreso: "2019-07-01",
            fechaEgreso: "2020-10-02",
            proyectos:[
                {
                    nombre:"I+D - Kaiso App",
                    resumenProyecto:"Desarrollo de aplicacion web de soporte para personas con deterioro cognitivo",
                    tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
                },
                {
                    nombre:"Legal Security",
                    resumenProyecto:"Mantenimiento y desarrollo evolutivo de la aplicacion iSecurity para la Empresa Legal Security",
                    tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                },
                {
                    nombre:"Banco Santander",
                    resumenProyecto:"Desarrollo y mantenimiento de la aplicacion Portal del Banco Santander",
                    tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                }
            ],
            resumenProyecto:"",
            tecnologias: [],
            web:"https://www.itrsa.com.ar/"
        },
        {
            empresa:"Eglam Argentina S.A",
            puesto: "Programador Backend",
            fechaIngreso: "2019-02-01",
            fechaEgreso: "2019-07-01",
            proyectos:[],
            resumenProyecto:"Gestión y desarrollo de modulos para e-commerces basados en Magento",
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
                    resumenProyecto:"Mantenimiento y desarrollo evolutivo de la aplicacion BIP (Banca Internet Provincia) del Banco Provincia",
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
                    resumenProyecto:"Mantenimiento y desarrollo evolutivo de la plataforma para usuarios corporativos del banco BBVA Provincial",
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