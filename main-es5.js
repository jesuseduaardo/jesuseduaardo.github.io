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


    __webpack_exports__["default"] = "<div class=\"experience\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h1>Mi experiencia</h1>\n            </div>\n            <div class=\"col-md\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">school</mat-icon> \n                    Educaci&oacute;n\n                </h3>\n                <mat-accordion multi=\"true\">\n                    <mat-expansion-panel [disabled]=\"true\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>T&eacute;cnico Superior en Inform&aacute;tica</h5>\n                                    <h6>I.U.T Jos&eacute; Mar&iacute;a Carre&ntilde;o</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Jul/2017</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>Responsive Web Design</h5>\n                                    <h6>FreeCodeCamp.org</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Nov/2018</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div>\n                            <p>Developer Certification, representing approximately 300 hours of coursework</p>\n                            <a href=\"https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design\" target=\"_blank\">\n                            Ver Certificaci&oacute;n\n                            </a>\n                        </div>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel [disabled]=\"true\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>Fundamentos ReactJS</h5>\n                                    <h6>Education IT</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Ago/2018</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n            <div class=\"col-md\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">create</mat-icon> \n                    Empleos\n                </h3>\n                <mat-accordion multi=\"true\">\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>IT Resources S.A.</h5>\n                                    <h6>Programador Java</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Jul/2019 - Actualidad</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div>\n                            <p>Proyectos</p>\n                            <ul class=\"proyects\">\n                                <li>\n                                    <div>\n                                        <h5>Banco Santander</h5>\n                                        <p>Desarrollo y mantenimiento de la aplicacion portal del Banco Santander</p>\n                                        <h6>Tecnologias Empleadas</h6>\n                                        <p class=\"tecnologies\">JavaEE | SpringMVC | jQuery | Git/SVN</p>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div>\n                                        <h5>Legal Security</h5>\n                                        <p>Desarrollo y mantenimiento de la aplicacion de seguridad personal \n                                            y empresarial de la Empresa Legal Security</p>\n                                        <h6>Tecnologias Empleadas</h6>\n                                        <p class=\"tecnologies\">JavaEE | SpringMVC | jQuery | Git/SVN</p>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\"(collapsedHeight)=\"90\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>Eglam Argentina S.A</h5>\n                                    <h6>Programador Backend</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Feb/2019 - Jul/2019</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div class=\"proyects\">\n                            <p>Gesti&oacute;n y desarrollo de modulos para e-commerces basados en Magento</p>\n                            <h6>Tecnologias Empleadas</h6>\n                            <p class=\"tecnologies\">PHP5 | Magento | Javascript/jQuery | Git/SVN</p>\n                        </div>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\"(collapsedHeight)=\"90\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>Tecnosoftware S.A</h5>\n                                    <h6>Programador Java</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Jul/2018 - Feb/2019</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div>\n                            <p>Proyectos</p>\n                            <ul class=\"proyects\">\n                                <li>\n                                    <div>\n                                        <h5>Banco Provincia</h5>\n                                        <p>Desarrollo y mantenimiento de la aplicacion BIP (Banca Internet Provincia) del Banco Provincia</p>\n                                        <h6>Tecnologias Empleadas</h6>\n                                        <p class=\"tecnologies\">JavaEE | SpringMVC | jQuery | Git/SVN</p>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\"(collapsedHeight)=\"90\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>Arkiteck C.A</h5>\n                                    <h6>Analista de Sistemas 3</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Nov/2017 - Feb/2018</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div>\n                            <p>Proyectos</p>\n                            <ul class=\"proyects\">\n                                <li>\n                                    <div>\n                                        <h5>Banco BBVA (Venezuela)</h5>\n                                        <p>Desarrollo y mantenimiento de la plataforma para usuarios corporativos del banco BBVA Provincial</p>\n                                        <h6>Tecnologias Empleadas</h6>\n                                        <p class=\"tecnologies\">JavaEE | SpringMVC | Javascript/jQuery | Bootstrap | Git</p>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </mat-expansion-panel>\n                    <mat-expansion-panel \n                        (opened)=\"panelOpenState = true\" \n                        (closed)=\"panelOpenState = false\"(collapsedHeight)=\"90\">\n                        <mat-expansion-panel-header [collapsedHeight]=\"'100px'\" [expandedHeight]=\"'100px'\">\n                            <mat-panel-title>\n                                <div class=\"company-and-date\">\n                                    <h5>La Victoria 3021 R.L</h5>\n                                    <h6>Web Developer</h6>\n                                </div>\n                            </mat-panel-title>\n                            <mat-panel-description>\n                                <p>Oct/2013 - Nov/2017</p>\n                            </mat-panel-description>\n                        </mat-expansion-panel-header>\n                        <div class=\"proyects\">\n                            <p>Creacion de sitios web para pymes</p>\n                            <h6>Tecnologias Empleadas</h6>\n                            <p class=\"tecnologies\">PHP5 | Codeigniter | Javascript/jQuery | Bootstrap | Git</p>\n                        </div>\n                    </mat-expansion-panel>\n                </mat-accordion>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3>\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">emoji_events</mat-icon> \n                    Habilidades\n                </h3>\n                <div class=\"stats\">\n                    <p>Java</p>\n                    <div class=\"bar\">\n                        <div id=\"priority\" class=\"percent\" style=\"width: 40%;\">\n                           <span style=\"width: 50%;\">JavaEE</span> \n                           <span style=\"width: 30%;\">SpringMVC<br>Spring Boot</span> \n                           <span style=\"width: 20%;\">Jpa<br>Hibernate</span> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"stats\">\n                    <p>JavaScript</p>\n                    <div class=\"bar\">\n                        <div class=\"percent\" style=\"width: 70%;\">\n                            <span style=\"width: 45%;\">jQuery</span> \n                            <span style=\"width: 45%;\">ReactJS</span> \n                            <span style=\"width: 10%;\">Angular</span> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"stats\">\n                    <p>HTML5 / CSS3</p>\n                    <div class=\"bar\">\n                        <div class=\"percent\" style=\"width: 85%;\">\n                            <span style=\"width: 60%;\">Bootstrap</span> \n                            <span style=\"width: 40%;\">Material-UI</span> \n                        </div>\n                    </div>\n                </div>\n                <div class=\"stats\">\n                    <p>PHP</p>\n                    <div class=\"bar\">\n                        <div class=\"percent\" style=\"width: 60%;\">\n                            <span style=\"width: 70%;\">Laravel</span> \n                            <span style=\"width: 30%;\">PHP5 / PHP7</span> \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n";
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


    __webpack_exports__["default"] = "<nav>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"nav-bar\">\n                <div class=\"nav-button\">\n                    <button mat-icon-button id=\"home-icon\" (click)=\"navigate('home')\" aria-label=\"Inicio\">\n                        <mat-icon>home</mat-icon>\n                    </button>\n                    <p>Inicio</p>\n                </div>\n                <div class=\"nav-button\">\n                    <button mat-icon-button id=\"about-icon\" (click)=\"navigate('about')\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>person</mat-icon>\n                    </button>\n                    <p>Sobre mi</p>\n                </div>\n                <div class=\"nav-button\">\n                    <button mat-icon-button id=\"experience-icon\" (click)=\"navigate('experience')\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>grade</mat-icon>\n                    </button>\n                    <p>Experiencia</p>\n                </div>\n                <div class=\"nav-button\">\n                    <button mat-icon-button id=\"contact-icon\" (click)=\"navigate('contact')\" aria-label=\"Example icon button with a home icon\">\n                        <mat-icon>local_post_office</mat-icon>\n                    </button>\n                    <p>Contacto</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-typed-js */
    "./node_modules/ngx-typed-js/fesm2015/ngx-typed-js.js");
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

    var rutas = [{
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
      data: {
        animation: 'isLeft'
      }
    }, {
      path: 'experience',
      component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"],
      data: {
        animation: 'isRight'
      }
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
      data: {
        animation: 'isLeft'
      }
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_15__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_16__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], ngx_skill_bar__WEBPACK_IMPORTED_MODULE_11__["NgxSkillBarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(rutas)],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
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


    __webpack_exports__["default"] = ".contact{\r\n    vertical-align: middle;\r\n    padding: 20px 0 70px;\r\n}\r\n.blue-color{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.col-12:first-of-type{\r\n    margin-bottom: 5rem;\r\n}\r\n.contact h1, .contact h2{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.contact-data{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: end;\r\n    text-align: center;\r\n}\r\n@media (max-width: 600px) {\r\n    .contact{\r\n        padding: 1rem 0 2rem;\r\n    }\r\n    .col-12:first-of-type{\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    .contact h1{\r\n       font-size: 2em;\r\n    }\r\n    .contact h2{\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtPQUNHLGNBQWM7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0e1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA3MHB4O1xyXG59XHJcbi5ibHVlLWNvbG9ye1xyXG4gICAgY29sb3I6IHJnYigwLCAxNDAsIDI1NSk7XHJcbn1cclxuLmNvbC0xMjpmaXJzdC1vZi10eXBle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG4uY29udGFjdCBoMSwgLmNvbnRhY3QgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNvbnRhY3QtZGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb250YWN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCAycmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbC0xMjpmaXJzdC1vZi10eXBle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250YWN0IGgxe1xyXG4gICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFjdCBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgfVxyXG59Il19 */";
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


    __webpack_exports__["default"] = ".experience{\r\n    padding: 20px 0 70px;\r\n}\r\n.experience h1{\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    margin-bottom: 25px;\r\n}\r\n.mat-expansion-panel-header[aria-disabled=true], .panel-header-description {\r\n    color: rgba(0,0,0,.54);\r\n}\r\n.company-and-date{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n.company-and-date h5, .company-and-date p{\r\n    margin-bottom: 0;\r\n    \r\n}\r\n.company-and-date h5{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.chronology-list{\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n.proyects h5{\r\n    color: rgb(0, 140, 255);\r\n}\r\n.proyects h6{\r\n    font-size: 14px;\r\n    text-decoration: underline;\r\n}\r\n.proyects p{\r\n    font-size: 14px;\r\n}\r\n.tecnologies{\r\n    font-family: monospace;\r\n}\r\n.data-card{\r\n    margin: 5px 0;\r\n}\r\n.stats p{\r\n    margin: 0;\r\n}\r\n.stats{\r\n    margin-bottom: 20px;\r\n}\r\n.bar{\r\n    background-color: #cccccc;\r\n    box-shadow: inset 1px 1px 3px #7d7d7d;\r\n    height: 35px;\r\n    border-radius: 50px;\r\n}\r\n.percent{\r\n    border-radius: 50px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    -webkit-animation: scale-up-hor-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: scale-up-hor-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n}\r\n.percent span{\r\n    height: 100%;\r\n    display: block;\r\n    font-size: 12px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    color: white;\r\n}\r\n.percent span:first-child{\r\n    border-radius: 50px 0 0 50px;\r\n    background-color: #008cff;\r\n}\r\n.percent span:nth-child(2){\r\n    background-color: #9400b9;\r\n}\r\n.percent span:last-child{\r\n    border-radius: 0 50px 50px 0;\r\n    background-color: #00c000;\r\n}\r\n@-webkit-keyframes scale-up-hor-left {\r\n    0% {\r\n      transform: scaleX(0.4);\r\n      transform-origin: 0% 0%;\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n      transform-origin: 0% 0%;\r\n    }\r\n  }\r\n@keyframes scale-up-hor-left {\r\n    0% {\r\n      transform: scaleX(0.4);\r\n      transform-origin: 0% 0%;\r\n    }\r\n    100% {\r\n      transform: scaleX(1);\r\n      transform-origin: 0% 0%;\r\n    }\r\n  }\r\n@media (max-width: 600px) {\r\n    .mat-expansion-panel-header-title{\r\n        margin-right: 5px !important;\r\n    }\r\n    .mat-expansion-panel-header-description{\r\n        margin-right: 5px !important;\r\n        text-align: right;\r\n    }\r\n    .company-and-date h5{\r\n        font-size: 1rem;\r\n    }\r\n    .percent span{\r\n        font-size: 0.6em;\r\n    }\r\n    h3{\r\n        margin: 15px 0;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxRkFBNkU7WUFBN0UsNkVBQTZFO0FBQ2pGO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSTtNQUNFLHNCQUFzQjtNQUN0Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLG9CQUFvQjtNQUNwQix1QkFBdUI7SUFDekI7RUFDRjtBQVRGO0lBQ0k7TUFDRSxzQkFBc0I7TUFDdEIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxvQkFBb0I7TUFDcEIsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFHRjtJQUNJO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZXtcclxuICAgIHBhZGRpbmc6IDIwcHggMCA3MHB4O1xyXG59XHJcbi5leHBlcmllbmNlIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdLCAucGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbn1cclxuLmNvbXBhbnktYW5kLWRhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY29tcGFueS1hbmQtZGF0ZSBoNSwgLmNvbXBhbnktYW5kLWRhdGUgcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxufSBcclxuLmNvbXBhbnktYW5kLWRhdGUgaDV7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE0MCwgMjU1KTtcclxufVxyXG4uY2hyb25vbG9neS1saXN0e1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm95ZWN0cyBoNXtcclxuICAgIGNvbG9yOiByZ2IoMCwgMTQwLCAyNTUpO1xyXG59XHJcbi5wcm95ZWN0cyBoNntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucHJveWVjdHMgcHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRlY25vbG9naWVze1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG4uZGF0YS1jYXJke1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4uc3RhdHMgcHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc3RhdHN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggM3B4ICM3ZDdkN2Q7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4ucGVyY2VudHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFuaW1hdGlvbjogc2NhbGUtdXAtaG9yLWxlZnQgMXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xyXG59XHJcblxyXG4ucGVyY2VudCBzcGFue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5wZXJjZW50IHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGNmZjtcclxufVxyXG4ucGVyY2VudCBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDAwYjk7XHJcbn1cclxuLnBlcmNlbnQgc3BhbjpsYXN0LWNoaWxke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGMwMDA7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjQpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5jb21wYW55LWFuZC1kYXRlIGg1e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5wZXJjZW50IHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjZlbTtcclxuICAgIH1cclxuICAgIGgze1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgfVxyXG59Il19 */";
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

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.chartType = 'horizontalBar';
        this.chartDatasets = [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'My First dataset'
        }];
        this.chartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
        this.chartColors = [{
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 2
        }];
        this.chartOptions = {
          responsive: true
        };
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "chartClicked",
        value: function chartClicked(e) {}
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {}
      }]);

      return ExperienceComponent;
    }();

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


    __webpack_exports__["default"] = ".nav-bar{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.nav-button{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\nnav{\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color:rgba(255, 255, 255, 0.85);\r\n    box-shadow: 0px 2px 7px 2px #333333;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n#home-icon{\r\n    color: #008cff;\r\n}\r\n#about-icon{\r\n    color: #ff003b;\r\n}\r\n#experience-icon{\r\n    color: #ffc800;\r\n}\r\n#contact-icon{\r\n    color: #00af56;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLG1DQUFtQztJQUNuQyxPQUFPO0lBQ1AsU0FBUztBQUNiO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5uYXYtYnV0dG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbm5hdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA3cHggMnB4ICMzMzMzMzM7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jaG9tZS1pY29ue1xyXG4gICAgY29sb3I6ICMwMDhjZmY7XHJcbn1cclxuI2Fib3V0LWljb257XHJcbiAgICBjb2xvcjogI2ZmMDAzYjtcclxufVxyXG4jZXhwZXJpZW5jZS1pY29ue1xyXG4gICAgY29sb3I6ICNmZmM4MDA7XHJcbn1cclxuI2NvbnRhY3QtaWNvbntcclxuICAgIGNvbG9yOiAjMDBhZjU2O1xyXG59Il19 */";
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