import { Injectable } from "@angular/core";
import { LanguageEnum } from "../enums/language.enum";

@Injectable()
export class ExperienceService {
  private experience: Experience[] = [
    {
      empresa: "Itaú Unibanco / Macro BMA / Macro",
      puesto: "System Analyst Sr",
      fechaIngreso: "2022-03-09",
      fechaEgreso: "",
      proyectos: [],
      resumenProyecto: [
        'Developed and maintained banking applications tailored to branch operations, ensuring seamless functionality across multiple branches.',
        'Collaborated with cross-functional teams to ensure applications meet regulatory and security standards, enhancing user experience and operational efficiency.',
        'Provided ongoing support and optimization for deployed applications, troubleshooting issues and implementing upgrades to adapt to evolving banking needs.'
      ],
      tecnologias: ["SQLServer", "Java", "SpringBoot", "Angular", "TypeScript", "RxJs"],
      web: ""
    },
    {
      empresa: "BBVA",
      puesto: "System Analyst Ssr",
      fechaIngreso: "2021-06-21",
      fechaEgreso: "2022-03-07",
      proyectos: [],
      resumenProyecto: [
        'Collaborated in the design of solution architectures, contributing to the creation of efficient and secure banking solutions.',
        `Provided technical support for the bank's home banking application, troubleshooting issues, and implementing improvements to enhance user experience and reliability.`,
        'Worked closely with cross-functional teams to meet project requirements and align technical solutions with business needs.'
      ],
      tecnologias: ["Java", "SpringMVC", "Angular", "Git"],
      web: ""
    },
    {
      empresa: "Globant",
      puesto: "Java Developer Ssr",
      fechaIngreso: "2020-10-05",
      fechaEgreso: "2021-06-14",
      proyectos: [
        {
          nombre: "Bimo (Prisma S.A)",
          resumenProyecto: [
            `Contributed to the design and development of microservices for a virtual wallet application, ensuring efficient and reliable backend operations.`,
            `Integrated third-party APIs to gather user information, enabling personalized promotions and enhancing the user experience.`,
            `Collaborated closely with team members to align microservice functionality with application requirements and user needs.`
          ],
          tecnologias: ["Java", "SpringBoot", "SQLServer", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringBoot", "SQLServer", "Git"],
      web: ""
    },
    {
      empresa: "IT Resources",
      puesto: "Java Developer Jr",
      fechaIngreso: "2019-07-01",
      fechaEgreso: "2020-10-02",
      proyectos: [
        {
          nombre: "I+D - Kaiso App",
          resumenProyecto: [
            `Collaborated in the development of an application to support individuals with mental disabilities, such as Alzheimer's, integrating Microsoft biometric APIs to enhance user interaction and security.`,
            `Contributed to both backend and frontend development, designing and implementing microservices and building intuitive user interfaces.`,
            `Worked closely with cross-functional teams to ensure that all application components were user-friendly and met accessibility standards.`,
            `Ensured seamless integration between front-end elements and microservices, optimizing performance and reliability.`
          ],
          tecnologias: ["Microsoft Azure Cognitive Services Face service", "Java", "JHipster", "SpringBoot", "MySql", "Bootstrap", "Angular", "Git"]
        },
        {
          nombre: "Legal Security",
          resumenProyecto: ["Collaborated in the development of an internal tool built using Spring MVC and jQuery to manage the company's surveillance system."],
          tecnologias: ["Java", "SpringMVC", "MySql", "Bootstrap", "Javascript", "Git"]
        },
        {
          nombre: "Banco Santander",
          resumenProyecto: ["Development and maintenance of the Santander Bank portal application"],
          tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "MySql", "Bootstrap", "Javascript", "Angular", "Git"],
      web: ""
    },
    {
      empresa: "Eglam Argentina",
      puesto: "Backend Developer Ssr",
      fechaIngreso: "2019-02-01",
      fechaEgreso: "2019-07-01",
      proyectos: [],
      resumenProyecto: ["Develop magento based applications, for example: dashboard reports, console applications, etc."],
      tecnologias: ["PHP", "Magento", "MySql", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "Tecnosoftware S.A",
      puesto: "Java Developer Jr",
      fechaIngreso: "2018-07-01",
      fechaEgreso: "2019-02-01",
      proyectos: [
        {
          nombre: "Banco Provincia",
          resumenProyecto: ["Built and Maintained Home Banking Application, Communicating With Cross-Functional Teams Regarding Product and Design"],
          tecnologias: ["Java", "SpringMVC", "OracleDB", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "OracleDB", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "Arkiteck C.A",
      puesto: "System Analyst 3",
      fechaIngreso: "2017-11-01",
      fechaEgreso: "2018-02-01",
      proyectos: [
        {
          nombre: "Banco BBVA Provincial (Venezuela)",
          resumenProyecto: ["Collaborated with contact center team members to implement new UI. Using Spring MVC with Java7 and jQuery"],
          tecnologias: ["Java", "SpringMVC", "Bootstrap", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "Bootstrap", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "La Victoria 3021 R.L (Venezuela)",
      puesto: "Web Developer",
      fechaIngreso: "2013-10-01",
      fechaEgreso: "2017-11-01",
      proyectos: [],
      resumenProyecto: ["Development of web sites/applications both in frontend and backend following the demands of each project"],
      tecnologias: ["PHP", "Codeigniter", "MySql", "Bootstrap", "Javascript", "Git"]
    },

  ];

  private experienceES: Experience[] = [
    {
      empresa: "Itaú Unibanco / Macro BMA / Macro",
      puesto: "Analista de Sistemas Sr",
      fechaIngreso: "2022-03-09",
      fechaEgreso: "",
      proyectos: [],
      resumenProyecto: [
        'Desarrollé y mantuve aplicaciones bancarias adaptadas a las operaciones de las sucursales, garantizando una funcionalidad perfecta en múltiples sucursales.',
        'Colaboré con equipos multifuncionales para garantizar que las aplicaciones cumplan con los estándares regulatorios y de seguridad, mejorando la experiencia del usuario y la eficiencia operativa.',
        'Proporcioné soporte y optimización continuos para aplicaciones implementadas, solución de problemas e implementación de actualizaciones para adaptarse a las necesidades bancarias en evolución.'
      ],
      tecnologias: ["SQLServer", "Java", "SpringBoot", "Angular", "TypeScript", "RxJs"],
      web: ""
    },
    {
      empresa: "BBVA",
      puesto: "Analista de Sistemas Sr",
      fechaIngreso: "2021-06-21",
      fechaEgreso: "2022-03-07",
      proyectos: [],
      resumenProyecto: [
        'Colaboré en el diseño de arquitecturas de soluciones, contribuyendo a la creación de soluciones bancarias eficientes y seguras.',
        `Proporcioné soporte técnico para la aplicación de homebanking, solucioné problemas e implementé mejoras para mejorar la experiencia y la confiabilidad del usuario.`,
        'Trabajé en estrecha colaboración con equipos multifuncionales para cumplir con los requisitos del proyecto y alinear las soluciones técnicas con las necesidades comerciales.'
      ],
      tecnologias: ["Java", "SpringMVC", "Angular", "Git"],
      web: ""
    },
    {
      empresa: "Globant",
      puesto: "Java Developer Ssr",
      fechaIngreso: "2020-10-05",
      fechaEgreso: "2021-06-14",
      proyectos: [
        {
          nombre: "Bimo (Prisma S.A)",
          resumenProyecto: [
            `Contribuí al diseño y desarrollo de microservicios para una aplicación de billetera virtual, asegurando operaciones backend eficientes y confiables.`,
            `API de terceros integradas para recopilar información del usuario, permitiendo promociones personalizadas y mejorando la experiencia del usuario.`,
            `Colaboré estrechamente con los miembros del equipo para alinear la funcionalidad del microservicio con los requisitos de la aplicación y las necesidades del usuario.`
          ],
          tecnologias: ["Java", "SpringBoot", "SQLServer", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringBoot", "SQLServer", "Git"],
      web: ""
    },
    {
      empresa: "IT Resources",
      puesto: "Java Developer Jr",
      fechaIngreso: "2019-07-01",
      fechaEgreso: "2020-10-02",
      proyectos: [
        {
          nombre: "I+D - Kaiso App",
          resumenProyecto: [
            `Colaboré en el desarrollo de una aplicación para ayudar a personas con discapacidades mentales, como Alzheimer, integrando las API biométricas de Microsoft para mejorar la interacción y la seguridad del usuario.`,
            `Contribuí al desarrollo backend y frontend, diseñando e implementando microservicios y creando interfaces de usuario intuitivas.`,
            `Trabajé en estrecha colaboración con equipos multifuncionales para garantizar que todos los componentes de la aplicación fueran fáciles de usar y cumplieran con los estándares de accesibilidad.`,
            `Aseguró una integración perfecta entre elementos front-end y microservicios, optimizando el rendimiento y la confiabilidad.`
          ],
          tecnologias: ["Microsoft Azure Cognitive Services Face service", "Java", "JHipster", "SpringBoot", "MySql", "Bootstrap", "Angular", "Git"]
        },
        {
          nombre: "Legal Security",
          resumenProyecto: ["Colaboré en el desarrollo de una herramienta interna construida utilizando Spring MVC y jQuery para gestionar el sistema de vigilancia de la empresa."],
          tecnologias: ["Java", "SpringMVC", "MySql", "Bootstrap", "Javascript", "Git"]
        },
        {
          nombre: "Banco Santander",
          resumenProyecto: ["Desarrollo y mantenimiento de la aplicación del portal del Banco Santander"],
          tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "MySql", "Bootstrap", "Javascript", "Angular", "Git"],
      web: ""
    },
    {
      empresa: "Eglam Argentina",
      puesto: "Backend Developer Ssr",
      fechaIngreso: "2019-02-01",
      fechaEgreso: "2019-07-01",
      proyectos: [],
      resumenProyecto: ["Desarrollar aplicaciones basadas en magento, por ejemplo: informes de panel, aplicaciones de consola, etc."],
      tecnologias: ["PHP", "Magento", "MySql", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "Tecnosoftware S.A",
      puesto: "Java Developer Jr",
      fechaIngreso: "2018-07-01",
      fechaEgreso: "2019-02-01",
      proyectos: [
        {
          nombre: "Banco Provincia",
          resumenProyecto: ["Aplicación de homebanking, que se comunica con equipos multifuncionales en relación con el producto y el diseño"],
          tecnologias: ["Java", "SpringMVC", "OracleDB", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "OracleDB", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "Arkiteck C.A",
      puesto: "Analista de Sistemas 3",
      fechaIngreso: "2017-11-01",
      fechaEgreso: "2018-02-01",
      proyectos: [
        {
          nombre: "Banco BBVA Provincial (Venezuela)",
          resumenProyecto: ["Collaborated with contact center team members to implement new UI. Using Spring MVC with Java7 and jQuery"],
          tecnologias: ["Java", "SpringMVC", "Bootstrap", "Javascript", "Git"]
        }
      ],
      resumenProyecto: [],
      tecnologias: ["Java", "SpringMVC", "Bootstrap", "Javascript", "Git"],
      web: ""
    },
    {
      empresa: "La Victoria 3021 R.L (Venezuela)",
      puesto: "Desarrollador Web",
      fechaIngreso: "2013-10-01",
      fechaEgreso: "2017-11-01",
      proyectos: [],
      resumenProyecto: ["Colaboré con los miembros del equipo del centro de contacto para implementar una nueva interfaz de usuario. Usando Spring MVC con Java7 y jQuery"],
      tecnologias: ["PHP", "Codeigniter", "MySql", "Bootstrap", "Javascript", "Git"]
    },

  ];


  getExperience(language?: LanguageEnum): Experience[] {
    if (language === LanguageEnum.ES) {
      return this.experienceES;
    }
    return this.experience;
  }
}

export interface Experience {
  empresa: string,
  puesto: string,
  fechaIngreso: string,
  fechaEgreso: string,
  proyectos: Proyects[],
  resumenProyecto: string[],
  tecnologias: string[],
  web?: string
}

interface Proyects {
  nombre: string,
  resumenProyecto: string | string[],
  tecnologias: string[]
}
