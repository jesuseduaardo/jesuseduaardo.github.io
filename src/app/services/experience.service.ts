import { Injectable } from "@angular/core";

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
          resumenProyecto: ["Built internal tool using Spring MVC and jQuery to manage company surveillance system"],
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

  getExperience(): Experience[] {
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
