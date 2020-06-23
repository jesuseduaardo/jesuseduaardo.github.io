function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<div class=\"main\">\n    <main [@routeAnimations]=\"prepareRoute(outlet)\" >\n        <router-outlet #outlet=\"outlet\"></router-outlet>\n    </main>\n    <app-navbar></app-navbar>\n</div>\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md\">\n                <h1>Programador <span class=\"blue-color\">FullStack</span></h1>\n                <p>Trabajo desde el 2012 como desarrollador web con distintas tecnologias del backend y frontend.\n                <br>Poseo habilidades en retoque fotográfico y diseño gráfico con herramientas como Adobe Photoshop e Illustrator.\n                <br>Trato de brindar la mayor creatividad a mis proyectos así como la máxima funcionalidad posible.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <img id=\"imageProfile\" src=\"/assets/img/EduardoCastillo.jpeg\" alt=\"J.Eduardo Castillo\">\n                <a href=\"https://drive.google.com/file/d/1u_0HkF9jw47OSqUDSCiRhlg8bfILtcqJ/view\" \n                    target=\"_blank\"\n                    class=\"btn btn-success\" \n                    style=\"margin: 20px auto;display: block;\"\n                    >Descargar CV</a>\n\n            </div>\n            <div class=\"col-md-8 bio\">\n                <h3>J. Eduardo Castillo</h3>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"bio-details\">\n                            <li><strong>Cumpleaños:</strong> 23/07/1986</li>\n                            <li><strong>Edad:</strong> {{ '1986/07/23' | birthDay }}</li>\n                            <li><strong>Educacion:</strong> Tecnico Superior Informatica</li>\n                            <li><strong>Ciudad:</strong> Capital Federal, Buenos Aires</li>\n                            <li><strong>Hobbies: </strong> \n                                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">sports_esports</mat-icon>  \n                                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">fitness_center</mat-icon>  \n                                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">directions_bike</mat-icon>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>J. Eduardo Castillo</h1>\n                <h2>Programador <span class=\"blue-color\">FullStack</span></h2>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 contact-data\">\n                <img src=\"assets/img/geo.svg\" alt=\"Ubicacion\" width=\"50\" >\n                <p>Av. Belgrano 1265<br>Buenos Aires<br>Argentina</p>\n            </div>\n            <div class=\"col-md-3 contact-data\">\n                <img src=\"assets/img/whatsapp.svg\" alt=\"Whatsapp\" width=\"50\">\n                <p>+54 11 27834634</p>\n            </div>\n            <div class=\"col-md-3 contact-data\">\n                <img src=\"assets/img/skype.svg\" alt=\"Skype\" width=\"50\">\n                <p>jesus.eduaardo</p>\n            </div>\n            <div class=\"col-md-3 contact-data\">\n                <img src=\"assets/img/gmail.svg\" alt=\"Gmail\" width=\"50\">\n                <p>jesuseduaardo@gmail.com</p>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"experience\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>Mi experiencia</h1>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">school</mat-icon> \n                    Educaci&oacute;n\n                </h3>\n                <mat-accordion multi=\"true\">\n                    <mat-expansion-panel \n                        *ngFor=\"let educ of education\" \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\" \n                        >\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>{{ educ.titulo }}</h5>\n                                    <h6>{{ educ.institucion }}</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description class=\"fecha-ingreso-egreso\">\n                                <p>{{ educ.fechaFin | date:\"MMM-y\" }}</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div>\n                            <p *ngIf=\"educ.duracion > 0\">Duracion: {{ educ.duracion }}Hrs</p>\n                            <a href=\"{{educ.certificacionUrl}}\" target=\"_blank\">\n                            Ver Certificaci&oacute;n\n                            </a>\n                        </div>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"empleos\">keyboard</mat-icon> \n                    Empleos\n                </h3>\n                <mat-accordion multi=\"true\">\n                    <mat-expansion-panel \n                        *ngFor=\"let experience of experiences\" \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>{{ experience.empresa }}</h5>\n                                    <h6>{{ experience.puesto }}</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description class=\"fecha-ingreso-egreso\">\n                                <p>\n                                    <span>{{ experience.fechaIngreso | date:'MMM-y' }}</span> / \n                                    <span *ngIf=\"experience.fechaEgreso\">{{ experience.fechaEgreso | date:'MMM-y' }}</span>\n                                    <span *ngIf=\"!experience.fechaEgreso\">Actualidad</span>\n                                </p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div *ngIf=\"experience.proyectos.length > 0\" class=\"proyects-list\">\n                            <h5>Proyectos</h5>\n                            <hr>\n                            <ul class=\"proyects\">\n                                <li *ngFor=\"let proyect of experience.proyectos\">\n                                    <div>\n                                        <h5>{{ proyect.nombre }}</h5>\n                                        <p>{{ proyect.resumenProyecto }}</p>\n                                        <div class=\"tecnologies\">\n                                            <h6>Tecnologias Empleadas</h6>\n                                            <ul>\n                                                <li *ngFor=\"let tecnologia of proyect.tecnologias\">{{ tecnologia }}</li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div *ngIf=\"experience.proyectos.length == 0 && experience.resumenProyecto.length\">\n                            <p>{{ experience.resumenProyecto }}</p>\n                            <div class=\"tecnologies\">\n                                <h6>Tecnologias Empleadas</h6>\n                                <ul>\n                                    <li *ngFor=\"let tecnologia of experience.tecnologias\">{{ tecnologia }}</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">emoji_events</mat-icon> \n                    Habilidades\n                </h3>\n                <app-skill *ngFor=\"let hability of habilities\" [hability]=\"hability\"></app-skill>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md info\">\n                <h1>J. Eduardo Castillo</h1>\n                <ngx-typed-js \n                    [strings]=\"['Backend', 'Frontend', 'FullStack^3000']\" \n                    [typeSpeed]=\"100\" \n                    [backSpeed]=\"100\"  \n                    [loop]=\"true\">\n                    <h2>Programador <span class=\"typing\"></span></h2>\n                </ngx-typed-js>\n                <a href=\"https://www.linkedin.com/in/jesuseduaardo/\" target=\"_blank\">\n                    <img id=\"linkedin_icon\" src=\"/assets/img/linkedin.svg\" alt=\"LinkedIn\">\n                </a>\n            </div>\n            <div class=\"col-md\">\n                <div class=\"round-pic\">\n                    <img src=\"/assets/img/perfil_pic.jpg\" alt=\"J.Eduardo Castillo\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"nav-bar\">\n                <div class=\"nav-button\" routerLinkActive=\"active\" [routerLink]=\"['home']\">\n                    <a mat-icon-button id=\"home-icon\" aria-label=\"Inicio\">\n                        <mat-icon>home</mat-icon>\n                    </a>\n                    <p>\n                        <span class=\"d-none d-md-block\">Inicio</span>\n                    </p>\n                </div>\n                <div class=\"nav-button\" routerLinkActive=\"active\" [routerLink]=\"['about']\">\n                    <a mat-icon-button id=\"about-icon\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>person</mat-icon>\n                    </a>\n                    <p>\n                        <span class=\"d-none d-md-block\">Sobre mi</span>\n                    </p>\n                </div>\n                <div class=\"nav-button\" routerLinkActive=\"active\" [routerLink]=\"['experience']\">\n                    <a mat-icon-button id=\"experience-icon\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>grade</mat-icon>\n                    </a>\n                    <p>\n                        <span class=\"d-none d-md-block\">Experiencia</span>\n                    </p>\n                </div>\n                <div class=\"nav-button\" routerLinkActive=\"active\" [routerLink]=\"['portfolio']\">\n                    <a mat-icon-button id=\"experience-icon\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>work</mat-icon>\n                    </a>\n                    <p>\n                        <span class=\"d-none d-md-block\">Portafolio</span>\n                    </p>\n                </div>\n                <div class=\"nav-button\" routerLinkActive=\"active\" [routerLink]=\"['contact']\">\n                    <a mat-icon-button id=\"contact-icon\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>local_post_office</mat-icon>\n                    </a>\n                    <p>\n                        <span class=\"d-none d-md-block\">Contacto</span>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portfolio/portfolio.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/portfolio/portfolio.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPortfolioPortfolioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"portfolio\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 text-center\">\n                <h1>Portafolio</h1>\n                <p>Una muestra de proyectos que llevo a cabo en mi tiempo libre con nuevas tecnolog&iacute;as.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <mat-card class=\"card mx-auto my-2\" *ngFor=\"let proyect of portfolio\">\n                <mat-card-header>\n                    <mat-card-title>{{ proyect.name }}</mat-card-title>\n                    <mat-card-subtitle></mat-card-subtitle>\n                </mat-card-header>\n                <img mat-card-image [src]=\"proyect.imageUrl\" [alt]=\"proyect.name\">\n                <mat-card-content>\n                    <p>{{proyect.description}}</p>\n                    <small>Tecnologias aplicadas</small><br>\n                    <span class=\"badge badge-primary mx-1\" *ngFor=\"let lang of proyect.lenguajes\">{{lang.name}} {{lang.version}}</span>\n                    <span class=\"badge badge-success mx-1\" *ngFor=\"let frame of proyect.frameworks\">{{frame.name}} {{frame.version}}</span>\n                </mat-card-content>\n                <mat-card-actions class=\"actions\">\n                    <a [href]=\"proyect.url\" target=\"_blank\">VISITAR</a>\n                    <!-- <a [href]=\"proyect.repoUrl\" target=\"_blank\">CODIGO</a> -->\n                </mat-card-actions>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill/skill.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill/skill.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"stats\">\n    <div class=\"hability-title\">\n        <img [src]=\"hability.language.icon\" [alt]=\"hability.language.name\" class=\"img-thumbnail\">\n        <h5>{{ hability.language.name }}  <small *ngIf=\"hability.language.version !== 0\">v.{{ hability.language.version }}</small></h5>\n    </div>\n    <div *ngFor=\"let framework of hability.frameworks\" class=\"framework-info\">\n        <img [src]=\"framework.icon\" [alt]=\"framework.name\" class=\"img-thumbnail\">\n        <div class=\"progress my-1\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{'width': framework.percent +'%'}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                <p>\n                    <span>{{ framework.name }}</span><span *ngIf=\"framework.version !== 0\">- v.{{ framework.version }}</span>\n                </p>\n            </div>\n        </div>\n    </div>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main{\r\n    min-height:100vh;\r\n    background-color: #f7f7f7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../route-animation */
    "./src/route-animation.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'J. Eduardo CV online';
      }

      _createClass(AppComponent, [{
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      animations: [_route_animation__WEBPACK_IMPORTED_MODULE_2__["fader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-typed-js */
    "./node_modules/ngx-typed-js/fesm2015/ngx-typed-js.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var ngx_skill_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-skill-bar */
    "./node_modules/ngx-skill-bar/fesm2015/ngx-skill-bar.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/birth-day.pipe */
    "./src/app/pipes/birth-day.pipe.ts");
    /* harmony import */


    var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/experience/experience.component */
    "./src/app/components/experience/experience.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/portfolio/portfolio.component */
    "./src/app/components/portfolio/portfolio.component.ts");
    /* harmony import */


    var _services_experience_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/experience.service */
    "./src/app/services/experience.service.ts");
    /* harmony import */


    var _services_education_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./services/education.service */
    "./src/app/services/education.service.ts");
    /* harmony import */


    var _services_habilities_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/habilities.service */
    "./src/app/services/habilities.service.ts");
    /* harmony import */


    var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/portfolio.service */
    "./src/app/services/portfolio.service.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/skill/skill.component */
    "./src/app/components/skill/skill.component.ts"); //Servicios
    //Rutas


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_15__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_18__["PortfolioComponent"], _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_24__["SkillComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], ngx_skill_bar__WEBPACK_IMPORTED_MODULE_11__["NgxSkillBarModule"], _app_routes__WEBPACK_IMPORTED_MODULE_23__["app_routing"]],
      providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_19__["ExperienceService"], _services_education_service__WEBPACK_IMPORTED_MODULE_20__["EducationService"], _services_habilities_service__WEBPACK_IMPORTED_MODULE_21__["HabilitiesService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_22__["PortfolioService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: app_routing */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "app_routing", function () {
      return app_routing;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/experience/experience.component */
    "./src/app/components/experience/experience.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/portfolio/portfolio.component */
    "./src/app/components/portfolio/portfolio.component.ts");

    var app_routes = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
      data: {
        animation: 'isLeft'
      }
    }, {
      path: 'experience',
      component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: 'portfolio',
      component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"],
      data: {
        animation: 'isLeft'
      }
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/home'
    }];

    var app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, {
      useHash: true
    });
    /***/

  },

  /***/
  "./src/app/components/about/about.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/about/about.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about{\r\n    padding: 20px 0 70px;\r\n}\r\n\r\n.about .bio{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.about h1{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.about h3{\r\n    font-weight: bolder;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.blue-color{\r\n    color: rgb(0, 140, 255);\r\n}\r\n\r\n.about p{\r\n    text-align: center;\r\n    font-size: 14px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.about strong{\r\n    font-weight: 600;\r\n}\r\n\r\n#imageProfile{\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.bio-details{\r\n    list-style: none;\r\n    padding: 0;\r\n    font-size: 14px;\r\n}\r\n\r\n.bio-details li{\r\n    padding: 12px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XHJcbn1cclxuXHJcbi5hYm91dCAuYmlve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0IGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uYWJvdXQgaDN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmJsdWUtY29sb3J7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE0MCwgMjU1KTtcclxufVxyXG4uYWJvdXQgcHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5hYm91dCBzdHJvbmd7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiNpbWFnZVByb2ZpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uYmlvLWRldGFpbHN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYmlvLWRldGFpbHMgbGl7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/components/about/about.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/contact/contact.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact{\r\n    vertical-align: middle;\r\n    padding: 20px 0 70px;\r\n}\r\n.blue-color{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.col-12:first-of-type{\r\n    margin-bottom: 5rem;\r\n}\r\n.contact h1, .contact h2{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.contact-data{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    text-align: center;\r\n}\r\n@media (max-width: 600px) {\r\n    .contact{\r\n        padding: 1rem 0 2rem;\r\n    }\r\n    .col-12:first-of-type{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    .contact h1{\r\n       font-size: 2em;\r\n    }\r\n    .contact h2{\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtPQUNHLGNBQWM7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA3MHB4O1xyXG59XHJcbi5ibHVlLWNvbG9ye1xyXG4gICAgY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7XHJcbn1cclxuLmNvbC0xMjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG4uY29udGFjdCBoMSwgLmNvbnRhY3QgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhY3QtZGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29udGFjdHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMnJlbTtcclxuICAgIH1cclxuICAgIC5jb2wtMTI6Zmlyc3Qtb2YtdHlwZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFjdCBoMXtcclxuICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/components/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/experience/experience.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/experience/experience.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsExperienceExperienceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fecha-ingreso-egreso{\r\n    flex-flow: row-reverse;\r\n}\r\n.experience{\r\n    padding: 20px 0 70px;\r\n}\r\n.experience h1{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    margin-bottom: 25px;\r\n}\r\nhr{\r\n    margin: 0.75em 0 0.75em 0;\r\n}\r\n.mat-expansion-panel-header[aria-disabled=true], .panel-header-description {\r\n    color: rgba(0,0,0,.54);\r\n}\r\n.company-and-date{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n.company-and-date h5, .company-and-date p{\r\n    margin-bottom: 0;\r\n    \r\n}\r\n.company-and-date h5{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.chronology-list{\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n.proyects{\r\n    padding-left: 0.85em;\r\n}\r\n.proyects-list{\r\n    color: #777777;\r\n}\r\n.proyects h5{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.proyects h6{\r\n    font-size: 14px;\r\n    text-decoration: underline;\r\n}\r\n.proyects p{\r\n    font-size: 14px;\r\n}\r\n.proyects > li{\r\n    padding-bottom: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    border-bottom: 1px solid #e6e6e6;\r\n}\r\n.proyects > li:last-child{\r\n    border-bottom: 0;\r\n}\r\n.tecnologies{\r\n    color: #4b4b4b;\r\n}\r\n.tecnologies ul{\r\n    list-style: none;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: unset;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n}\r\n.tecnologies li{\r\n    font-family: monospace;\r\n    margin: 2px;\r\n}\r\n.tecnologies li::after{\r\n    content: \"|\";\r\n    color: #cccccc;\r\n}\r\n.tecnologies li:last-child::after{\r\n    content: \"\";\r\n}\r\n.data-card{\r\n    margin: 5px 0;\r\n}\r\n@-webkit-keyframes scale-up-hor-left {\r\n    0% {\r\n      transform: scaleX(0.4);\r\n      transform-origin: 0% 0%;\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n      transform-origin: 0% 0%;\r\n    }\r\n  }\r\n@keyframes scale-up-hor-left {\r\n    0% {\r\n      transform: scaleX(0.4);\r\n      transform-origin: 0% 0%;\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n      transform-origin: 0% 0%;\r\n    }\r\n  }\r\n@media (max-width: 600px) {\r\n    .mat-expansion-panel-header-title{\r\n        margin-right: 5px !important;\r\n    }\r\n    .mat-expansion-panel-header-description{\r\n        margin-right: 5px !important;\r\n        text-align: right;\r\n    }\r\n    .company-and-date h5{\r\n        font-size: 1rem;\r\n    }\r\n    .percent span{\r\n        font-size: 0.6em;\r\n    }\r\n    h3{\r\n        margin: 15px 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFURjtJQUNJO01BQ0Usc0JBQXNCO01BQ3RCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0Usb0JBQW9CO01BQ3BCLHVCQUF1QjtJQUN6QjtFQUNGO0FBR0Y7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksNEJBQTRCO1FBQzVCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlY2hhLWluZ3Jlc28tZWdyZXNve1xyXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcclxufVxyXG4uZXhwZXJpZW5jZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA3MHB4O1xyXG59XHJcbi5leHBlcmllbmNlIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgbWFyZ2luOiAwLjc1ZW0gMCAwLjc1ZW0gMDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0sIC5wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjU0KTtcclxufVxyXG4uY29tcGFueS1hbmQtZGF0ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb21wYW55LWFuZC1kYXRlIGg1LCAuY29tcGFueS1hbmQtZGF0ZSBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG59IFxyXG4uY29tcGFueS1hbmQtZGF0ZSBoNXtcclxuICAgIGNvbG9yOiByZ2IoMCwgMTQwLCAyNTUpO1xyXG59XHJcbi5jaHJvbm9sb2d5LWxpc3R7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ucHJveWVjdHN7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuODVlbTtcclxufVxyXG5cclxuLnByb3llY3RzLWxpc3R7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLnByb3llY3RzIGg1e1xyXG4gICAgY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7XHJcbn1cclxuLnByb3llY3RzIGg2e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5wcm95ZWN0cyBwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wcm95ZWN0cyA+IGxpe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxufVxyXG5cclxuLnByb3llY3RzID4gbGk6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50ZWNub2xvZ2llc3tcclxuICAgIGNvbG9yOiAjNGI0YjRiO1xyXG59XHJcbi50ZWNub2xvZ2llcyB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiB1bnNldDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4udGVjbm9sb2dpZXMgbGl7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbi50ZWNub2xvZ2llcyBsaTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcInxcIjtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcbi50ZWNub2xvZ2llcyBsaTpsYXN0LWNoaWxkOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5kYXRhLWNhcmR7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWhvci1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuY29tcGFueS1hbmQtZGF0ZSBoNXtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAucGVyY2VudCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/experience/experience.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/experience/experience.component.ts ***!
    \***************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppComponentsExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/experience.service */
    "./src/app/services/experience.service.ts");
    /* harmony import */


    var _services_education_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/education.service */
    "./src/app/services/education.service.ts");
    /* harmony import */


    var _services_habilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/habilities.service */
    "./src/app/services/habilities.service.ts");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent(_experienceService, _educationService, _habilitiesService) {
        _classCallCheck(this, ExperienceComponent);

        this._experienceService = _experienceService;
        this._educationService = _educationService;
        this._habilitiesService = _habilitiesService;
        this.experiences = [];
        this.education = [];
        this.habilities = [];
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.experiences = this._experienceService.getExperience();
          this.education = this._educationService.getEducation();
          this.habilities = this._habilitiesService.getHabilities();
          console.log(this.habilities);
        }
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ctorParameters = function () {
      return [{
        type: _services_experience_service__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]
      }, {
        type: _services_education_service__WEBPACK_IMPORTED_MODULE_3__["EducationService"]
      }, {
        type: _services_habilities_service__WEBPACK_IMPORTED_MODULE_4__["HabilitiesService"]
      }];
    };

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.css */
      "./src/app/components/experience/experience.component.css"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".content{\r\n    vertical-align: middle;\r\n    padding: 5rem 0;\r\n}\r\n.info{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n.round-pic{\r\n    text-align: center;\r\n}\r\n.round-pic img{\r\n    border-radius: 165px;\r\n    max-width: 315px;\r\n    box-shadow: 3px 3px 3px #dadada, -3px -3px 3px #fafafa;\r\n}\r\n.typing{\r\n    color: rgb(0, 140, 255);\r\n}\r\n#linkedin_icon{\r\n    margin-top: 20px;\r\n    width: 30px;\r\n}\r\n@media (max-width: 600px) {\r\n    .info {\r\n        text-align: center;\r\n        padding-bottom: 30px;\r\n    }\r\n    .info h1{\r\n        font-size: 2rem;\r\n    }\r\n    .info h2{\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbn1cclxuLmluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucm91bmQtcGlje1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yb3VuZC1waWMgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTY1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDMxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggI2RhZGFkYSwgLTNweCAtM3B4IDNweCAjZmFmYWZhO1xyXG59XHJcbi50eXBpbmd7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE0MCwgMjU1KTtcclxufVxyXG5cclxuI2xpbmtlZGluX2ljb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5pbmZvIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5pbmZvIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-bar{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.nav-button{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.nav-button:focus{\r\n    outline: none;\r\n}\r\nnav{\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color:rgba(255, 255, 255, 0.85);\r\n    box-shadow: 0px 2px 7px 2px #dadada;\r\n    left: 0;\r\n    bottom: -2.5em;\r\n    transition: bottom 1s;\r\n}\r\nnav:hover{\r\n    bottom: 0em;\r\n}\r\n.active{\r\n    color: #007fe7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsbUNBQW1DO0lBQ25DLE9BQU87SUFDUCxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLm5hdi1idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5hdi1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbm5hdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggMnB4ICNkYWRhZGE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMi41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMXM7XHJcbn1cclxuXHJcbm5hdjpob3ZlcntcclxuICAgIGJvdHRvbTogMGVtO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgY29sb3I6ICMwMDdmZTc7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigate",
        value: function navigate(url) {
          this.router.navigate(["/".concat(url)]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/portfolio/portfolio.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/portfolio/portfolio.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPortfolioPortfolioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".portfolio{\r\n    padding: 20px 0 70px;\r\n}\r\n.portfolio h1{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    margin-bottom: 25px;\r\n}\r\n.card {\r\n    max-width: 250px;\r\n  }\r\n.header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n.actions{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7QUFFRjtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW97XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgNzBweDtcclxufVxyXG4ucG9ydGZvbGlvIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgXHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/portfolio/portfolio.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/portfolio/portfolio.component.ts ***!
    \*************************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppComponentsPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/portfolio.service */
    "./src/app/services/portfolio.service.ts");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent(_portafolioService) {
        _classCallCheck(this, PortfolioComponent);

        this._portafolioService = _portafolioService;
        this.portfolio = [];
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.portfolio = this._portafolioService.getPortfolio();
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ctorParameters = function () {
      return [{
        type: _services_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]
      }];
    };

    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portfolio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portfolio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/portfolio/portfolio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portfolio.component.css */
      "./src/app/components/portfolio/portfolio.component.css"))["default"]]
    })], PortfolioComponent);
    /***/
  },

  /***/
  "./src/app/components/skill/skill.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/skill/skill.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSkillSkillComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stats p{\r\n    margin: 0;\r\n}\r\n.stats{\r\n    margin-bottom: 20px;\r\n}\r\n.hability-title{\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.hability-title h5{\r\n    margin-left: 5px;\r\n}\r\n.hability-title img{\r\n    width: 50px;\r\n    border:0\r\n}\r\n.framework-info{\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n.framework-info .progress{\r\n    height: 50px;\r\n    width: 100%;\r\n    border-radius: 0px 5px 5px 0px;\r\n}\r\n.framework-info img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 5px 0px 0px 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC9za2lsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1g7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxsL3NraWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHMgcHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc3RhdHN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGFiaWxpdHktdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oYWJpbGl0eS10aXRsZSBoNXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5oYWJpbGl0eS10aXRsZSBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjowXHJcbn1cclxuLmZyYW1ld29yay1pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnJhbWV3b3JrLWluZm8gLnByb2dyZXNze1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5mcmFtZXdvcmstaW5mbyBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/skill/skill.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/skill/skill.component.ts ***!
    \*****************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppComponentsSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillComponent = /*#__PURE__*/function () {
      function SkillComponent() {
        _classCallCheck(this, SkillComponent);
      }

      _createClass(SkillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SkillComponent.prototype, "hability", void 0);
    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skill/skill.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.css */
      "./src/app/components/skill/skill.component.css"))["default"]]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/pipes/birth-day.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/birth-day.pipe.ts ***!
    \*****************************************/

  /*! exports provided: BirthDayPipe */

  /***/
  function srcAppPipesBirthDayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BirthDayPipe", function () {
      return BirthDayPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BirthDayPipe = /*#__PURE__*/function () {
      function BirthDayPipe() {
        _classCallCheck(this, BirthDayPipe);
      }

      _createClass(BirthDayPipe, [{
        key: "transform",
        value: function transform(value) {
          if (!value) {
            return value;
          }

          var today = new Date();
          var birthDate = new Date(value);
          console.log(value);
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();

          if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
            age--;
          }

          return age;
        }
      }]);

      return BirthDayPipe;
    }();

    BirthDayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'birthDay'
    })], BirthDayPipe);
    /***/
  },

  /***/
  "./src/app/services/education.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/education.service.ts ***!
    \***********************************************/

  /*! exports provided: EducationService */

  /***/
  function srcAppServicesEducationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationService", function () {
      return EducationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EducationService = /*#__PURE__*/function () {
      function EducationService() {
        _classCallCheck(this, EducationService);

        this.educations = [{
          titulo: "Técnico Superior en Informatica",
          institucion: "I.U.T José María Carreño",
          fechaInicio: "2007-07-01",
          fechaFin: "2012-07-01",
          certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
          duracion: 0
        }, {
          titulo: "JavaScript Algorithms and Data Structures",
          institucion: "FreeCodeCamp.org",
          fechaInicio: "2020-05-01",
          fechaFin: "2020-05-01",
          certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
          duracion: 300
        }, {
          titulo: "Responsive Web Desing",
          institucion: "FreeCodeCamp.org",
          fechaInicio: "2018-01-01",
          fechaFin: "2018-08-01",
          certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
          duracion: 300
        }, {
          titulo: "ReactJS",
          institucion: "Educacion IT",
          fechaInicio: "2018-07-25",
          fechaFin: "2018-08-25",
          certificacionUrl: "https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
          duracion: 15
        }];
      }

      _createClass(EducationService, [{
        key: "getEducation",
        value: function getEducation() {
          return this.educations;
        }
      }]);

      return EducationService;
    }();

    EducationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EducationService);
    /***/
  },

  /***/
  "./src/app/services/experience.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/experience.service.ts ***!
    \************************************************/

  /*! exports provided: ExperienceService */

  /***/
  function srcAppServicesExperienceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
      return ExperienceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceService = /*#__PURE__*/function () {
      function ExperienceService() {
        _classCallCheck(this, ExperienceService);

        this.experience = [{
          empresa: "IT Resources S.A",
          puesto: "Programador Java",
          fechaIngreso: "2019-07-01",
          fechaEgreso: "",
          proyectos: [{
            nombre: "Legal Security",
            resumenProyecto: "Mantenimiento y desarrollo evolutivo de la aplicacion iSecurity para la Empresa Legal Security",
            tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
          }, {
            nombre: "Banco Santander",
            resumenProyecto: "Desarrollo y mantenimiento de la aplicacion Portal del Banco Santander",
            tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
          }],
          resumenProyecto: "",
          tecnologias: []
        }, {
          empresa: "Eglam Argentina S.A",
          puesto: "Programador Backend",
          fechaIngreso: "2019-02-01",
          fechaEgreso: "2019-07-01",
          proyectos: [],
          resumenProyecto: "Gestión y desarrollo de modulos para e-commerces basados en Magento",
          tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"]
        }, {
          empresa: "Tecnosoftware S.A",
          puesto: "Programador Java",
          fechaIngreso: "2018-07-01",
          fechaEgreso: "2019-02-01",
          proyectos: [{
            nombre: "Banco Provincia",
            resumenProyecto: "Mantenimiento y desarrollo evolutivo de la aplicacion BIP (Banca Internet Provincia) del Banco Provincia",
            tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript/jQuery", "Git/SVN"]
          }],
          resumenProyecto: "",
          tecnologias: []
        }, {
          empresa: "Arkiteck C.A",
          puesto: "Analista de Sistemas 3",
          fechaIngreso: "2017-11-01",
          fechaEgreso: "2018-02-01",
          proyectos: [{
            nombre: "Banco BBVA Provincial (Venezuela)",
            resumenProyecto: "Mantenimiento y desarrollo evolutivo de la plataforma para usuarios corporativos del banco BBVA Provincial",
            tecnologias: ["JavaEE", "SpringMVC", "Bootstrap3", "Javascript/jQuery", "Git"]
          }],
          resumenProyecto: "",
          tecnologias: []
        }, {
          empresa: "La Victoria 3021 R.L (Venezuela)",
          puesto: "Desarrollador Web",
          fechaIngreso: "2013-10-01",
          fechaEgreso: "2017-11-01",
          proyectos: [],
          resumenProyecto: "Desarrollo de sitios/aplicaciones web tanto en frontend y backend siguiendo las exigencias de cada proyecto",
          tecnologias: ["PHP5", "Codeigniter", "MySql", "Bootstrap3", "Javascript/jQuery", "Git"]
        }];
      }

      _createClass(ExperienceService, [{
        key: "getExperience",
        value: function getExperience() {
          return this.experience;
        }
      }]);

      return ExperienceService;
    }();

    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ExperienceService);
    /***/
  },

  /***/
  "./src/app/services/habilities.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/habilities.service.ts ***!
    \************************************************/

  /*! exports provided: HabilitiesService */

  /***/
  function srcAppServicesHabilitiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HabilitiesService", function () {
      return HabilitiesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HabilitiesService = /*#__PURE__*/function () {
      function HabilitiesService() {
        _classCallCheck(this, HabilitiesService);

        this.java7 = {
          name: "JavaEE",
          version: 7,
          icon: '../assets/img/pro-icon/icons8-java-50.png'
        };
        this.javaScript = {
          name: "JavaScript",
          version: "ES6",
          icon: '../assets/img/pro-icon/icons8-javascript-50.png'
        };
        this.php = {
          name: "PHP",
          version: 7,
          icon: '../assets/img/pro-icon/icons8-php-logo-50.png'
        };
        this.sql = {
          name: "SQL",
          version: 0,
          icon: '../assets/img/pro-icon/icons8-database-50.png'
        };
        this.html = {
          name: "Html",
          version: 5,
          icon: '../assets/img/pro-icon/icons8-html-5-50.png'
        };
        this.css = {
          name: "Css",
          version: 3,
          icon: '../assets/img/pro-icon/icons8-css3-50.png'
        };
        this.versionado = {
          name: "Versionado",
          version: 0,
          icon: '../assets/img/pro-icon/icons8-code-fork-50.png'
        };
        this.habilities = [{
          language: this.java7,
          frameworks: [{
            name: "SpringMVC",
            icon: '../assets/img/pro-icon/icons8-spring-logo-50.png',
            version: 5,
            percent: 60
          }, {
            name: "SpringBoot",
            icon: '../assets/img/pro-icon/icons8-spring-logo-50.png',
            version: 2,
            percent: 30
          }, {
            name: "JPA/Hibernate",
            icon: '../assets/img/pro-icon/hibernate.png',
            version: 0,
            percent: 20
          }]
        }, {
          language: this.sql,
          frameworks: [{
            name: "MySql",
            icon: '../assets/img/pro-icon/mysql.png',
            version: 0,
            percent: 60
          }, {
            name: "PL/SQL",
            icon: '../assets/img/pro-icon/icons8-oracle-logo-50.png',
            version: 0,
            percent: 10
          }]
        }, {
          language: this.javaScript,
          frameworks: [{
            name: "ReactJS",
            icon: '../assets/img/pro-icon/icons8-react-native-50.png',
            version: 16,
            percent: 75
          }, {
            name: "jQuery",
            icon: '../assets/img/pro-icon/jquery.png',
            version: 3,
            percent: 80
          }, {
            name: "Angular",
            icon: '../assets/img/pro-icon/angular.png',
            version: 8,
            percent: 30
          }, {
            name: "Angular Material",
            icon: '../assets/img/pro-icon/angular-material.png',
            version: 9,
            percent: 30
          }, {
            name: "Ionic",
            icon: '../assets/img/pro-icon/Ionic.png',
            version: 5,
            percent: 25
          }, {
            name: "Typescript",
            icon: '../assets/img/pro-icon/typescript.svg',
            version: 3,
            percent: 65
          }]
        }, {
          language: this.php,
          frameworks: [{
            name: "Laravel",
            icon: '../assets/img/pro-icon/laravel.png',
            version: 5.8,
            percent: 60
          }]
        }, {
          language: this.css,
          frameworks: [{
            name: "Bootstrap",
            icon: '../assets/img/pro-icon/icons8-bootstrap-50.png',
            version: 4,
            percent: 80
          }]
        }, {
          language: this.versionado,
          frameworks: [{
            name: "GIT",
            icon: '../assets/img/pro-icon/icons8-git-50.png',
            version: 0,
            percent: 50
          }, {
            name: "SVN",
            icon: '../assets/img/pro-icon/svn.png',
            version: 0,
            percent: 30
          }]
        }];
      }

      _createClass(HabilitiesService, [{
        key: "getHabilities",
        value: function getHabilities() {
          return this.habilities;
        }
      }]);

      return HabilitiesService;
    }();

    HabilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HabilitiesService);
    /***/
  },

  /***/
  "./src/app/services/portfolio.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/portfolio.service.ts ***!
    \***********************************************/

  /*! exports provided: PortfolioService */

  /***/
  function srcAppServicesPortfolioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
      return PortfolioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PortfolioService = /*#__PURE__*/function () {
      function PortfolioService() {
        _classCallCheck(this, PortfolioService);

        this.proyects = [{
          name: "SpotiApp",
          description: "Applicacion que consume el api de spotify, para conocer nuevos lanzamientos y artistas",
          imageUrl: "https://iili.io/JM23FI.th.jpg",
          repoUrl: "",
          url: "https://jesuseduaardo-spotiapp.herokuapp.com/",
          lenguajes: [{
            name: "Java",
            version: "8",
            icon: ""
          }, {
            name: "TypeScript",
            version: "3.8",
            icon: ""
          }],
          frameworks: [{
            name: "SpringBoot",
            version: 5,
            percent: 0,
            icon: ""
          }, {
            name: "Angular",
            version: 9,
            percent: 0,
            icon: ""
          }, {
            name: "Bootstrap",
            version: 4,
            percent: 0,
            icon: ""
          }]
        }, {
          name: "Saenca",
          description: "Ecommerce completo con panel de administracion creado con laravel 5.8 y ReactJs 16",
          imageUrl: "https://iili.io/JM2d6N.th.jpg",
          repoUrl: "",
          url: "http://saenca.com/",
          lenguajes: [{
            name: "PHP",
            version: "7",
            icon: ""
          }, {
            name: "Javascript",
            version: "ES6",
            icon: ""
          }],
          frameworks: [{
            name: "Laravel",
            version: 5.8,
            percent: 0,
            icon: ""
          }, {
            name: "ReactJS",
            version: 16,
            percent: 0,
            icon: ""
          }, {
            name: "MaterialUI",
            version: 8,
            percent: 0,
            icon: ""
          }]
        }];
      }

      _createClass(PortfolioService, [{
        key: "getPortfolio",
        value: function getPortfolio() {
          return this.proyects;
        }
      }]);

      return PortfolioService;
    }();

    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PortfolioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/route-animation.ts":
  /*!********************************!*\
    !*** ./src/route-animation.ts ***!
    \********************************/

  /*! exports provided: fader, slider, transformer, stepper */

  /***/
  function srcRouteAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fader", function () {
      return fader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slider", function () {
      return slider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "transformer", function () {
      return transformer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stepper", function () {
      return stepper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js"); // Basic


    var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'absolute',
      left: 0,
      width: '100%',
      opacity: 0,
      transform: 'scale(0) translateY(100%)'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1,
      transform: 'scale(1) translateY(0)'
    }))])])]); // Positioned

    var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isLeft', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isRight', slideTo('right')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isRight => *', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isLeft => *', slideTo('right'))]);
    var transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isLeft', translateTo({
      x: -100,
      y: -100,
      rotate: -720
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => isRight', translateTo({
      x: 100,
      y: -100,
      rotate: 90
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isRight => *', translateTo({
      x: -100,
      y: -100,
      rotate: 360
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('isLeft => *', translateTo({
      x: 100,
      y: -100,
      rotate: -360
    }))]);

    function slideTo(direction) {
      var _Object;

      var optional = {
        optional: true
      };
      return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])((_Object = {
        position: 'absolute',
        top: 0
      }, _defineProperty(_Object, direction, 0), _defineProperty(_Object, "width", '100%'), _Object))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(_defineProperty({}, direction, '-100%'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(_defineProperty({}, direction, '100%')))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])(_defineProperty({}, direction, '0%')))])])];
    }

    function translateTo(_ref) {
      var _ref$x = _ref.x,
          x = _ref$x === void 0 ? 100 : _ref$x,
          _ref$y = _ref.y,
          y = _ref$y === void 0 ? 0 : _ref$y,
          _ref$rotate = _ref.rotate,
          rotate = _ref$rotate === void 0 ? 0 : _ref$rotate;
      var optional = {
        optional: true
      };
      return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
      }))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        transform: "translate(0, 0) rotate(0)"
      }))])])];
    } // Keyframes


    var stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      position: 'absolute',
      left: 0,
      width: '100%'
    })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(0) translateX(100%)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(0.5) translateX(25%)',
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(1) translateX(0%)',
      offset: 1
    })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(1)',
      offset: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale(0.5) translateX(-25%) rotate(0)',
      offset: 0.35
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: 'translateX(-50%) rotate(-180deg) scale(6)',
      offset: 1
    })]))])])])]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jesus_castillo\Desktop\Proyectos\jesuseduaardo.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map