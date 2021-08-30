(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DhY":
    /*!*****************************************************!*\
      !*** ./src/app/components/about/about.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function DhY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

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

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 37,
        vars: 0,
        consts: [[1, "about"], [1, "about__bio-image"], [1, "about__bio"], [1, "bio"], [1, "row"], [1, "col-12", "col-md-4", "text-center", "py-2"], [1, "fas", "fa-birthday-cake", "fa-2x"], ["alt", "Cumplea\xF1os"], [1, "fas", "fa-user-graduate", "fa-2x"], [1, "fas", "fa-smile-beam", "fa-2x"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "text-center"], ["mat-raised-button", "", "href", "https://drive.google.com/file/d/1fu6g1u774mksjEI7XL5K82X1jIRjpCdC/view?usp=sharing", "target", "_blank", 1, "download_button"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "J. Eduardo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Castillo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Trabajo desde el 2012 como desarrollador web con distintas tecnologias del backend y frontend. Poseo habilidades en retoque fotogr\xE1fico y dise\xF1o gr\xE1fico con herramientas como Adobe Photoshop e Illustrator. Trato de brindar la mayor creatividad a mis proyectos as\xED como la m\xE1xima funcionalidad posible. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cumplea\xF1os");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "23/07/1986");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Estudios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tecnico Superior Informatica ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " (Analista de Sistemas) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Hobies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "sports_esports");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "fitness_center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "directions_bike");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Descargar CV ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.7)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  line-height: 1.5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.about__bio[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n\n.about__bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.about__bio[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  width: 80vw;\n  margin: 1rem auto 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  text-align: center;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.about[_ngcontent-%COMP%]   .download_button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #272727;\n  background-color: #ff652f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUFEQTtFQUNFLG9CQUFBO0FBSUY7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFIQUFBO0VBTUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtNO0VBQ0UsY0RoQ1U7QUM2QmxCOztBQU9JO0VBQ0Usb0JBQUE7QUFMTjs7QUFTRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVFJO0VBQ0Usa0JBQUE7QUFOTjs7QUFTRTtFQUNFLHFCQUFBO0VBQ0EsY0R2RFk7RUN3RFoseUJEdkRjO0FDZ0RsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuLmFib3V0X19iaW8taW1hZ2Uge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzksIDM5LCAzOSwgMC45KSwgcmdiYSgzOSwgMzksIDM5LCAwLjcpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuLmFib3V0X19iaW8taW1hZ2UgcCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYWJvdXRfX2JpbyB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dF9fYmlvIGgyIHNwYW4ge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cbi5hYm91dF9fYmlvIC50ZXh0LXNlY29uZGFyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLmFib3V0IC5iaW8ge1xuICB3aWR0aDogODB2dztcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1nYXA6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dCAuYmlvIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQgLmRvd25sb2FkX2J1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1MmY7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "/655":
    /*!***********************************************!*\
      !*** ./src/app/services/portfolio.service.ts ***!
      \***********************************************/

    /*! exports provided: PortfolioService */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
        return PortfolioService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      PortfolioService.ɵfac = function PortfolioService_Factory(t) {
        return new (t || PortfolioService)();
      };

      PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PortfolioService,
        factory: PortfolioService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
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
      /*! E:\MisProyectos\Mi Curriculum Online\jesuseduaardo.github.io\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "09j4":
    /*!************************************************!*\
      !*** ./src/app/services/habilities.service.ts ***!
      \************************************************/

    /*! exports provided: HabilitiesService */

    /***/
    function j4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HabilitiesService", function () {
        return HabilitiesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HabilitiesService = /*#__PURE__*/function () {
        function HabilitiesService() {
          _classCallCheck(this, HabilitiesService);

          this.java = {
            name: "Java",
            version: "8/11",
            icon: '../assets/img/pro-icon/java.svg'
          };
          this.android = {
            name: "Android",
            version: 0,
            icon: '../assets/img/pro-icon/android-original.svg'
          };
          this.javaScript = {
            name: "JavaScript",
            version: "ES6",
            icon: '../assets/img/pro-icon/javascript-original.svg'
          };
          this.php = {
            name: "PHP",
            version: 7,
            icon: '../assets/img/pro-icon/php-original.svg'
          };
          this.sql = {
            name: "SQL",
            version: 0,
            icon: '../assets/img/pro-icon/sql.svg'
          };
          this.html = {
            name: "Html",
            version: 5,
            icon: '../assets/img/pro-icon/icons8-html-5-50.png'
          };
          this.css = {
            name: "Css",
            version: 3,
            icon: '../assets/img/pro-icon/css3-original.svg'
          };
          this.versionado = {
            name: "Versionado",
            version: 0,
            icon: '../assets/img/pro-icon/367559.svg'
          };
          this.habilities = [{
            language: this.java,
            frameworks: [{
              name: "Java",
              icon: '../assets/img/pro-icon/java.svg',
              version: 8,
              percent: 60
            }, {
              name: "SpringMVC",
              icon: '../assets/img/pro-icon/spring-original.svg',
              version: 5,
              percent: 55
            }, {
              name: "SpringBoot",
              icon: '../assets/img/pro-icon/spring-original.svg',
              version: 2,
              percent: 65
            }, {
              name: "JPA/Hibernate",
              icon: '../assets/img/pro-icon/hibernate.svg',
              version: 0,
              percent: 40
            }]
          }, {
            language: this.android,
            frameworks: [{
              name: "Kotlin",
              icon: '../assets/img/pro-icon/kotlin-original.svg',
              version: 1.5,
              percent: 35
            }]
          }, {
            language: this.sql,
            frameworks: [{
              name: "MySql",
              icon: '../assets/img/pro-icon/mysql-original.svg',
              version: 0,
              percent: 60
            }, {
              name: "MS SQL",
              icon: '../assets/img/pro-icon/microsoft-sql-server.svg',
              version: 0,
              percent: 38
            }, {
              name: "PL/SQL",
              icon: '../assets/img/pro-icon/oracle-original.svg',
              version: 0,
              percent: 26
            }]
          }, {
            language: this.javaScript,
            frameworks: [{
              name: "Javascript",
              icon: '../assets/img/pro-icon/javascript-original.svg',
              version: 6,
              percent: 80
            }, {
              name: "ReactJS",
              icon: '../assets/img/pro-icon/reactjs-icon.svg',
              version: 16,
              percent: 45
            }, {
              name: "jQuery",
              icon: '../assets/img/pro-icon/jquery-original.svg',
              version: 3,
              percent: 67
            }, {
              name: "Angular",
              icon: '../assets/img/pro-icon/angularjs-original.svg',
              version: 11,
              percent: 65
            }, {
              name: "Angular Material",
              icon: '../assets/img/pro-icon/materialui-original.svg',
              version: 11,
              percent: 60
            }, {
              name: "Ionic",
              icon: '../assets/img/pro-icon/ionic-original.svg',
              version: 5,
              percent: 35
            }, {
              name: "Typescript",
              icon: '../assets/img/pro-icon/typescript.svg',
              version: 3,
              percent: 75
            }]
          }, {
            language: this.php,
            frameworks: [{
              name: "Laravel",
              icon: '../assets/img/pro-icon/laravel-plain.svg',
              version: 7,
              percent: 35
            }]
          }, {
            language: this.css,
            frameworks: [{
              name: "CSS",
              icon: '../assets/img/pro-icon/css3-original.svg',
              version: 3,
              percent: 80
            }, {
              name: "Saas",
              icon: '../assets/img/pro-icon/sass-original.svg',
              version: 1.38,
              percent: 75
            }, {
              name: "Bootstrap",
              icon: '../assets/img/pro-icon/bootstrap-original.svg',
              version: 4,
              percent: 95
            }]
          }, {
            language: this.versionado,
            frameworks: [{
              name: "GIT",
              icon: '../assets/img/pro-icon/git-original.svg',
              version: 0,
              percent: 75
            }, {
              name: "SVN",
              icon: '../assets/img/pro-icon/subversion.svg',
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

      HabilitiesService.ɵfac = function HabilitiesService_Factory(t) {
        return new (t || HabilitiesService)();
      };

      HabilitiesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HabilitiesService,
        factory: HabilitiesService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HabilitiesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "1jp7":
    /*!*****************************************************!*\
      !*** ./src/app/components/skill/skill.component.ts ***!
      \*****************************************************/

    /*! exports provided: SkillComponent */

    /***/
    function jp7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
        return SkillComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SkillComponent_small_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v.", ctx_r0.hability.language.version, "");
        }
      }

      function SkillComponent_div_5_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var framework_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" v.", framework_r2.version, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "width": a0
        };
      };

      function SkillComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillComponent_div_5_span_7_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var framework_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", framework_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", framework_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", framework_r2.name + " v." + framework_r2.version + " = " + framework_r2.percent + "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, framework_r2.percent + "%"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](framework_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", framework_r2.version !== 0);
        }
      }

      var SkillComponent = /*#__PURE__*/function () {
        function SkillComponent() {
          _classCallCheck(this, SkillComponent);

          this.tooltipPosition = 'above';
        }

        _createClass(SkillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillComponent;
      }();

      SkillComponent.ɵfac = function SkillComponent_Factory(t) {
        return new (t || SkillComponent)();
      };

      SkillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillComponent,
        selectors: [["app-skill"]],
        inputs: {
          hability: "hability"
        },
        decls: 6,
        vars: 5,
        consts: [[1, "hability-title"], [1, "img-thumbnail", 3, "src", "alt"], [4, "ngIf"], ["class", "framework-info", 4, "ngFor", "ngForOf"], [1, "framework-info"], [1, "progress", "my-1"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 3, "ngStyle", "title"]],
        template: function SkillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillComponent_small_4_Template, 2, 1, "small", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_5_Template, 8, 8, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hability.language.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.hability.language.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hability.language.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hability.language.version !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hability.frameworks);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.stats[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.hability-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 0.5rem auto 0rem auto;\n}\n\n.hability-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.hability-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n  border: none;\n}\n\n.framework-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  width: 100%;\n}\n\n.framework-info[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.framework-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  border: none;\n}\n\n.tooltipInfo[_ngcontent-%COMP%] {\n  background-color: #03a2ff;\n  position: relative;\n  top: 20px;\n  left: 50%;\n  font-size: 14px;\n}\n\n.info-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 89%;\n  font-size: 28px;\n  font-style: italic;\n  font-family: \"Krona One\", sans-serif;\n}\n\n.progress-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 3;\n  margin-bottom: 0;\n  color: #414141;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 0 10px;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: #414141;\n  border: none;\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUFEQTtFQUNFLG1CQUFBO0FBSUY7O0FBSEU7RUFDRSxTQUFBO0FBS0o7O0FBREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFJRjs7QUFGRTtFQUNFLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQURBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFJRjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0o7O0FBREE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUtGOztBQUZBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zdGF0cyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc3RhdHMgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmhhYmlsaXR5LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMHJlbSBhdXRvO1xufVxuLmhhYmlsaXR5LXRpdGxlIGg1IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5oYWJpbGl0eS10aXRsZSBpbWcge1xuICB3aWR0aDogNHJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZnJhbWV3b3JrLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZnJhbWV3b3JrLWluZm8gLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiA0dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XG59XG4uZnJhbWV3b3JrLWluZm8gaW1nIHtcbiAgd2lkdGg6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRvb2x0aXBJbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTJmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5mby1wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4OSU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnByb2dyZXNzLWJhciBwIHtcbiAgei1pbmRleDogMztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM0MTQxNDE7XG59XG5cbmkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skill',
            templateUrl: './skill.component.html',
            styleUrls: ['./skill.component.scss']
          }]
        }], function () {
          return [];
        }, {
          hability: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "5gzz":
    /*!***************************************************************!*\
      !*** ./src/app/components/experience/experience.component.ts ***!
      \***************************************************************/

    /*! exports provided: ExperienceComponent */

    /***/
    function gzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/experience.service */
      "LUFc");
      /* harmony import */


      var _services_habilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/habilities.service */
      "09j4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../education/education.component */
      "F7NT");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../skill/skill.component */
      "1jp7");

      function ExperienceComponent_mat_expansion_panel_14_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, experience_r2.fechaEgreso, "MMM-y"));
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_p_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", experience_r2.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.web);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Participacion en ", experience_r2.proyectos.length, " proyectos ");
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_div_17_li_5_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tecnologia_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tecnologia_r15);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_div_17_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skills used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_14_div_17_li_5_li_10_Template, 2, 1, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proyect_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r13.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r13.resumenProyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r13.tecnologias);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_14_div_17_li_5_Template, 11, 3, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r2.proyectos);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_div_18_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tecnologia_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tecnologia_r18);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skills used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceComponent_mat_expansion_panel_14_div_18_li_7_Template, 2, 1, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.resumenProyecto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experience_r2.tecnologias);
        }
      }

      function ExperienceComponent_mat_expansion_panel_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_opened_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.panelOpenState = true;
          })("closed", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_closed_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.panelOpenState = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceComponent_mat_expansion_panel_14_span_9_Template, 3, 4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_14_span_10_Template, 2, 0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_mat_expansion_panel_14_p_13_Template, 3, 2, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExperienceComponent_mat_expansion_panel_14_p_16_Template, 2, 1, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExperienceComponent_mat_expansion_panel_14_div_17_Template, 6, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExperienceComponent_mat_expansion_panel_14_div_18_Template, 8, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsedHeight", "150px")("expandedHeight", "150px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 11, experience_r2.fechaIngreso, "MMM-y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.fechaEgreso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !experience_r2.fechaEgreso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.empresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.web);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](experience_r2.puesto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length == 0 && experience_r2.resumenProyecto.length);
        }
      }

      function ExperienceComponent_app_skill_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-skill", 29);
        }

        if (rf & 2) {
          var hability_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hability", hability_r23);
        }
      }

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent(_experienceService, _habilitiesService) {
          _classCallCheck(this, ExperienceComponent);

          this._experienceService = _experienceService;
          this._habilitiesService = _habilitiesService;
          this.experiences = [];
          this.habilities = [];
        }

        _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.experiences = this._experienceService.getExperience();
            this.habilities = this._habilitiesService.getHabilities();
          }
        }]);

        return ExperienceComponent;
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_habilities_service__WEBPACK_IMPORTED_MODULE_2__["HabilitiesService"]));
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 25,
        vars: 2,
        consts: [[1, "experience"], [1, "container"], [1, "row"], [1, "col-12", "experience-title"], [1, "col-12", "col-md-6"], [1, "mt-3"], ["aria-hidden", "false", "aria-label", "empleos"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "px-2"], [1, "row", "mt-4"], [1, "col-md-12"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stats"], [3, "hability", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight", "expandedHeight"], [1, "company-and-date"], [4, "ngIf"], ["class", "company-link d-none d-md-block", 4, "ngIf"], ["class", "cant-exp", 4, "ngIf"], ["class", "proyects-list", 4, "ngIf"], [1, "company-link", "d-none", "d-md-block"], ["target", "_blank", 3, "href"], [1, "cant-exp"], [1, "proyects-list"], [1, "proyects"], [4, "ngFor", "ngForOf"], [1, "tecnologies"], [3, "hability"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last update 26/08/2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Jobs ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExperienceComponent_mat_expansion_panel_14_Template, 19, 14, "mat-expansion-panel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "emoji_events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExperienceComponent_app_skill_24_Template, 1, 1, "app-skill", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.habilities);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _skill_skill_component__WEBPACK_IMPORTED_MODULE_8__["SkillComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.fecha-ingreso-egreso[_ngcontent-%COMP%] {\n  flex-flow: row-reverse;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: auto;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0.75em 0 0.75em 0;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #414141;\n  color: #c5c5c5 !important;\n  border-bottom: 5px solid #ff652f;\n  margin-bottom: 1rem;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after, .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #a5a5a5;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  flex-direction: row;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n  line-height: 1.5rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #414141 !important;\n}\n\n.company-and-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #ff652f;\n}\n\n.company-and-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #fff;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #c5c5c5;\n}\n\n.company-and-date[_ngcontent-%COMP%]   .chronology-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.proyects[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.proyects[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.proyects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.proyects-list[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid #e6e6e6;\n  background: #f5f5f5;\n  padding: 10px;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.tecnologies[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.tecnologies[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: monospace;\n  margin: 2px;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.cert[_ngcontent-%COMP%] {\n  width: 95px;\n  margin: auto;\n  display: block;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 76%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.cant-exp[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: #a5a5a5;\n}\n\n.company-link[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-bottom: 5px !important;\n}\n\n.company-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 0;\n  color: #c5c5c5;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #414141;\n  margin-bottom: 4rem;\n  padding: 0.3rem 1rem 3rem;\n}\n\n@-webkit-keyframes scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n@keyframes scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .experience[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FBREE7RUFDRSxzQkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFGRTtFQUNFLG1CQUFBO0FBSUo7O0FBSEk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RmWTtBQ29CbEI7O0FBSEk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBS047O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGRTs7RUFFRSxjQUFBO0FBSUo7O0FBRkk7Ozs7RUFFRSxjQUFBO0FBTU47O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFBQTtFQUNFLG9DQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FBR0Y7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGNEbEVjO0FDcUVsQjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURFO0VBQ0UsZ0JBQUE7RUFDQSxjRHpFYTtBQzRFakI7O0FBREU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QUFHSjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQURFO0VBQ0UsY0R0RmM7QUN5RmxCOztBQURFO0VBQ0UsZUFBQTtBQUdKOztBQUNBO0VBQ0UsY0Q3RmU7QUMrRmpCOztBQURFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREU7RUFDRSxnQkFBQTtBQUdKOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtBQUdKOztBQURFO0VBQ0UsZUFBQTtBQUdKOztBQUZJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBSU47O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQUtGOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBTUo7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQUtGO0VBSEE7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0VBS0Y7QUFDRjs7QUFiQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQUtGO0VBSEE7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0VBS0Y7QUFDRjs7QUR0SkU7RUNxSkE7SUFDRSxpQkFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZlY2hhLWluZ3Jlc28tZWdyZXNvIHtcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICB3aWR0aDogNzV2dztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUgZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjc1ZW0gMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmNjUyZjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyLFxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6ICNhNWE1YTU7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wYW55LWFuZC1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4uY29tcGFueS1hbmQtZGF0ZSBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogI2M1YzVjNTtcbn1cbi5jb21wYW55LWFuZC1kYXRlIC5jaHJvbm9sb2d5LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJveWVjdHMge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJveWVjdHMgaDUge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cbi5wcm95ZWN0cyBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucHJveWVjdHMtbGlzdCB7XG4gIGNvbG9yOiAjYzVjNWM1O1xufVxuLnByb3llY3RzLWxpc3QgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnByb3llY3RzLWxpc3QgPiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLnRlY25vbG9naWVzIHtcbiAgY29sb3I6ICNmZmY7XG59XG4udGVjbm9sb2dpZXMgaDYge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGVjbm9sb2dpZXMgdWwge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4udGVjbm9sb2dpZXMgdWwgbGkge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmRhdGEtY2FyZCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5jZXJ0IHtcbiAgd2lkdGg6IDk1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgZm9udC1zaXplOiA3NiU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYW50LWV4cCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICNhNWE1YTU7XG59XG5cbi5jb21wYW55LWxpbmsge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5jb21wYW55LWxpbmsgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbG9yOiAjYzVjNWM1O1xufVxuXG4ubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbSAzcmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWhvci1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-experience',
            templateUrl: './experience.component.html',
            styleUrls: ['./experience.component.scss']
          }]
        }], function () {
          return [{
            type: _services_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]
          }, {
            type: _services_habilities_service__WEBPACK_IMPORTED_MODULE_2__["HabilitiesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8SzB":
    /*!***********************************************!*\
      !*** ./src/app/services/education.service.ts ***!
      \***********************************************/

    /*! exports provided: EducationService */

    /***/
    function SzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationService", function () {
        return EducationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EducationService = /*#__PURE__*/function () {
        function EducationService() {
          _classCallCheck(this, EducationService);

          this.educations = [{
            titulo: "Técnico Superior en Informatica (Analista de Sistemas)",
            institucion: "I.U.T José María Carreño",
            fechaInicio: "2007-07-01",
            fechaFin: "2012-07-01",
            certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
            duracion: 0
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

      EducationService.ɵfac = function EducationService_Factory(t) {
        return new (t || EducationService)();
      };

      EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EducationService,
        factory: EducationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-typed-js */
      "pRTP");

      var _c0 = function _c0() {
        return ["Backend Developer", "Frontend Developer", "FullStack Developer^5000"];
      };

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

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 9,
        vars: 5,
        consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md", "info"], [3, "strings", "typeSpeed", "backSpeed", "loop"], [1, "typing"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J. Eduardo Castillo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-typed-js", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("typeSpeed", 100)("backSpeed", 100)("loop", true);
          }
        },
        directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__["NgxTypedJsComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  align-items: center;\n  text-align: center;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 60vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  padding: 2rem;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n    align-items: center;\n    text-align: center;\n    background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('perfil_pic.jpg') center 0rem;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFNQSxzQkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBRUk7RUFDRSxjRHRCWTtBQ3NCbEI7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUFOOztBQUNNO0VBQ0UsY0Q1QlU7QUM2QmxCOztBRFBFO0VDYUE7SUFDRSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0hBQUE7SUFNQSxzQkFBQTtJQUNBLDRCQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDM5LCAzOSwgMzksIDAuOSksIHJnYmEoMzksIDM5LCAzOSwgMC4zKSksIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsX3BpYy5qcGdcIikgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jb250ZW50IC5pbmZvIHtcbiAgcGFkZGluZy10b3A6IDYwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQgLmluZm8gLnR5cGluZyB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmNvbnRlbnQgLmluZm8gaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5jb250ZW50IC5pbmZvIGk6aG92ZXIge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzksIDM5LCAzOSwgMC45KSwgcmdiYSgzOSwgMzksIDM5LCAwLjMpKSwgdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgMHJlbTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Dlr0":
    /*!*****************************************!*\
      !*** ./src/app/pipes/safe-html.pipe.ts ***!
      \*****************************************/

    /*! exports provided: SafeHtmlPipe */

    /***/
    function Dlr0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SafeHtmlPipe = /*#__PURE__*/function () {
        function SafeHtmlPipe(sanitizer) {
          _classCallCheck(this, SafeHtmlPipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafeHtmlPipe, [{
          key: "transform",
          value: function transform(value) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
          }
        }]);

        return SafeHtmlPipe;
      }();

      SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: SafeHtmlPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safeHtml'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "F7NT":
    /*!*************************************************************!*\
      !*** ./src/app/components/education/education.component.ts ***!
      \*************************************************************/

    /*! exports provided: EducationComponent */

    /***/
    function F7NT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/education.service */
      "8SzB");
      /* harmony import */


      var _services_certifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/certifications.service */
      "bKGs");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EducationComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var educ_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educ_r2.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](educ_r2.institucion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, educ_r2.fechaFin, "MMM-y"));
        }
      }

      function EducationComponent_div_9_p_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cert_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cert_r3.duracion, " horas");
        }
      }

      function EducationComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationComponent_div_9_p_11_Template, 3, 1, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cert_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", cert_r3.certificacionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", cert_r3.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cert_r3.thumbnails, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r3.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r3.institucion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cert_r3.duracion > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r3.fechaFin);
        }
      }

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent(_educationService, _certificationService) {
          _classCallCheck(this, EducationComponent);

          this._educationService = _educationService;
          this._certificationService = _certificationService;
          this.education = [];
          this.certifications = [];
        }

        _createClass(EducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.education = this._educationService.getEducation();
            this.certifications = this._certificationService.getCertifications();
          }
        }]);

        return EducationComponent;
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_certifications_service__WEBPACK_IMPORTED_MODULE_2__["CertificationsService"]));
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        decls: 10,
        vars: 2,
        consts: [["aria-hidden", "false", "aria-label", "Example home icon"], ["class", "card", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["aria-hidden", "false"], ["class", "card certs", 4, "ngFor", "ngForOf"], [1, "card", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-9"], [1, "card-body", "p-1"], [1, "card-title", "my-0", 2, "font-size", "16px"], [1, "card-text", "my-0", 2, "font-size", "14px"], [1, "card-text"], [1, "text-muted"], [1, "card", "certs"], [1, "col-3"], ["target", "_blank", "title", "Ver Certificaci\xF3n", 3, "href"], [1, "card-img", "cert", 3, "src", "alt"], [1, "col-9"], ["class", "card-text my-0", 4, "ngIf"], [1, "card-text", "my-0"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "school");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Education\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EducationComponent_div_4_Template, 12, 6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Certifications\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EducationComponent_div_9_Template, 15, 7, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #414141;\n  border-bottom: 5px solid #ff652f;\n  margin: 0.5rem auto 0 auto;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n\n.certs[_ngcontent-%COMP%] {\n  width: 16rem;\n  margin: 0.5rem auto 0 0;\n}\n\n@media screen and (min-width: 768px) {\n  .certs[_ngcontent-%COMP%] {\n    width: 22rem;\n    margin: 0.5rem auto 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0FBSUY7O0FBSEU7RUFDRSxpQkFBQTtBQUtKOztBQUpJO0VBQ0UsZUFBQTtBQU1OOztBQURBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBSUY7O0FERUU7RUNGQTtJQUNFLFlBQUE7SUFDQSwwQkFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZjY1MmY7XG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMCBhdXRvO1xufVxuLmNhcmQgLmNhcmQtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmNhcmQgLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uY2VydHMge1xuICB3aWR0aDogMTZyZW07XG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMCAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2VydHMge1xuICAgIHdpZHRoOiAyMnJlbTtcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcbiAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-education',
            templateUrl: './education.component.html',
            styleUrls: ['./education.component.scss']
          }]
        }], function () {
          return [{
            type: _services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]
          }, {
            type: _services_certifications_service__WEBPACK_IMPORTED_MODULE_2__["CertificationsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G2Gn":
    /*!*********************************************************!*\
      !*** ./src/app/components/contact/contact.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function G2Gn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 27,
        vars: 0,
        consts: [[1, "contact"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "col-md-3", "contact-data"], ["src", "assets/img/geo.svg", "alt", "Ubicacion", "width", "50"], ["src", "assets/img/whatsapp.svg", "alt", "Whatsapp", "width", "50"], ["src", "assets/img/skype.svg", "alt", "Skype", "width", "50"], ["src", "assets/img/gmail.svg", "alt", "Gmail", "width", "50"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Av. Belgrano 1265");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buenos Aires");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Argentina");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+54 11 27834634");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "jesus.eduaardo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "jesuseduaardo@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.contact[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 10rem 0 4rem;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  padding: 0;\n  margin: 0;\n}\n\n.contact-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: center;\n  padding: 0.8rem 0;\n}\n\n.col-12[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 5rem;\n}\n\n@media (max-width: 600px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 4rem 0 2rem;\n  }\n  .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .col-12[_ngcontent-%COMP%]:first-of-type {\n    margin-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBSEU7RUFDRSxjRE5jO0FDV2xCOztBQUhFOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNFLG1CQUFBO0FBS0Y7O0FBRkE7RUFDRTtJQUNFLG9CQUFBO0VBS0Y7RUFKRTtJQUNFLGNBQUE7RUFNSjtFQUpFO0lBQ0UsZ0JBQUE7RUFNSjs7RUFIQTtJQUNFLHFCQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGFjdCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcmVtIDAgNHJlbTtcbn1cbi5jb250YWN0IGgxIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uY29udGFjdCBoMSxcbi5jb250YWN0IGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29udGFjdC1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xufVxuXG4uY29sLTEyOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhY3Qge1xuICAgIHBhZGRpbmc6IDRyZW0gMCAycmVtO1xuICB9XG4gIC5jb250YWN0IGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxuICAuY29udGFjdCBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuXG4gIC5jb2wtMTI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LUFc":
    /*!************************************************!*\
      !*** ./src/app/services/experience.service.ts ***!
      \************************************************/

    /*! exports provided: ExperienceService */

    /***/
    function LUFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceService", function () {
        return ExperienceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExperienceService = /*#__PURE__*/function () {
        function ExperienceService() {
          _classCallCheck(this, ExperienceService);

          this.experience = [{
            empresa: "BBVA S.A",
            puesto: "Analista de Sistemas",
            fechaIngreso: "2021-06-21",
            fechaEgreso: "",
            proyectos: [],
            resumenProyecto: "",
            tecnologias: ["Java", "Angular"],
            web: "https://www.bbva.com.ar/"
          }, {
            empresa: "Globant S.A",
            puesto: "Java Developer",
            fechaIngreso: "2020-10-05",
            fechaEgreso: "2021-06-14",
            proyectos: [{
              nombre: "Bimo (Prisma S.A)",
              resumenProyecto: "Desarrollo de microservicios y consumo de apis de terceros para la e-wallet Bimo",
              tecnologias: ["Java", "SpringBoot", "SQLServer", "Jenkins", "Spock", "Git"]
            }],
            resumenProyecto: "",
            tecnologias: [],
            web: "https://www.globant.com/"
          }, {
            empresa: "IT Resources S.A",
            puesto: "Programador Java",
            fechaIngreso: "2019-07-01",
            fechaEgreso: "2020-10-02",
            proyectos: [{
              nombre: "I+D - Kaiso App",
              resumenProyecto: "Desarrollo de aplicacion web de soporte para personas con deterioro cognitivo",
              tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
            }, {
              nombre: "Legal Security",
              resumenProyecto: "Mantenimiento y desarrollo evolutivo de la aplicacion iSecurity para la Empresa Legal Security",
              tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
            }, {
              nombre: "Banco Santander",
              resumenProyecto: "Desarrollo y mantenimiento de la aplicacion Portal del Banco Santander",
              tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
            }],
            resumenProyecto: "",
            tecnologias: [],
            web: "https://www.itrsa.com.ar/"
          }, {
            empresa: "Eglam Argentina S.A",
            puesto: "Programador Backend",
            fechaIngreso: "2019-02-01",
            fechaEgreso: "2019-07-01",
            proyectos: [],
            resumenProyecto: "Gestión y desarrollo de modulos para e-commerces basados en Magento",
            tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
            web: "https://www.glamit.com.ar/"
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
            tecnologias: [],
            web: "https://www.tecnosoftware.com/"
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
            tecnologias: [],
            web: "http://www.arkiteck.net/"
          }, {
            empresa: "La Victoria 3021 R.L (Venezuela)",
            puesto: "Web Developer",
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

      ExperienceService.ɵfac = function ExperienceService_Factory(t) {
        return new (t || ExperienceService)();
      };

      ExperienceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExperienceService,
        factory: ExperienceService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "social-icons"], ["href", "https://www.linkedin.com/in/jesuseduaardo/"], [1, "fab", "fa-linkedin", "fa-2x"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA9 Copyright 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 0.5rem;\n}\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  transition: all 0.5s ease-in-out;\n}\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\nfooter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  position: fixed;\n  bottom: 0.4rem;\n  right: 0.5rem;\n  text-align: right;\n  padding: 1rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSkU7RUFDRSxlQUFBO0VESUYsZ0NBQUE7QUNHRjs7QUFMSTtFQUNFLGNEVFk7QUNnQmxCOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAwLjVyZW07XG59XG4uc29jaWFsLWljb25zIGEge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDAuNHJlbTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "RUEf":
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /*! exports provided: app_routing */

    /***/
    function RUEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "app_routing", function () {
        return app_routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");

      var app_routes = [{
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: {
          animation: 'isLeft'
        }
      }, {
        path: 'experience',
        component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: 'portfolio',
        component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"],
        data: {
          animation: 'isLeft'
        }
      }, {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
        data: {
          animation: 'isRight'
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
      }];

      var app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(app_routes, {
        useHash: true
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../route-animation */
      "qvUz");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");

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

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 1,
        consts: [[1, "main"], ["outlet", "outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  width: 100%;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"],
        data: {
          animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-typed-js */
      "pRTP");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/about/about.component */
      "+DhY");
      /* harmony import */


      var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pipes/birth-day.pipe */
      "wJxl");
      /* harmony import */


      var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/experience/experience.component */
      "5gzz");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "G2Gn");
      /* harmony import */


      var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/portfolio/portfolio.component */
      "kBmi");
      /* harmony import */


      var _services_experience_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./services/experience.service */
      "LUFc");
      /* harmony import */


      var _services_education_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/education.service */
      "8SzB");
      /* harmony import */


      var _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/habilities.service */
      "09j4");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/portfolio.service */
      "/655");
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./app.routes */
      "RUEf");
      /* harmony import */


      var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/skill/skill.component */
      "1jp7");
      /* harmony import */


      var _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/education/education.component */
      "F7NT");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pipes/safe-html.pipe */
      "Dlr0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); //Servicios
      //Rutas


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_18__["ExperienceService"], _services_education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"], _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__["HabilitiesService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__["PortfolioService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _app_routes__WEBPACK_IMPORTED_MODULE_22__["app_routing"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"], _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__["SkillComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__["EducationComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__["SafeHtmlPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_27__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"], _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_14__["BirthDayPipe"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_15__["ExperienceComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"], _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_23__["SkillComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_24__["EducationComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__["SafeHtmlPipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__["NgxTypedJsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _app_routes__WEBPACK_IMPORTED_MODULE_22__["app_routing"]],
            providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_18__["ExperienceService"], _services_education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"], _services_habilities_service__WEBPACK_IMPORTED_MODULE_20__["HabilitiesService"], _services_portfolio_service__WEBPACK_IMPORTED_MODULE_21__["PortfolioService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bKGs":
    /*!****************************************************!*\
      !*** ./src/app/services/certifications.service.ts ***!
      \****************************************************/

    /*! exports provided: CertificationsService */

    /***/
    function bKGs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationsService", function () {
        return CertificationsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CertificationsService = /*#__PURE__*/function () {
        function CertificationsService() {
          _classCallCheck(this, CertificationsService);

          this.certifications = [{
            titulo: "Fundamentos de Android",
            institucion: "Universidad Nacional Autónoma de México (Coursera)",
            fechaInicio: "2021-05-18",
            fechaFin: "2021-07-12",
            certificacionUrl: "https://www.coursera.org/account/accomplishments/verify/MN6LWA5PM44V",
            duracion: 0,
            thumbnails: '/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
          }, {
            titulo: "Liquibase Fundamentals Certification",
            institucion: "Liquibase University",
            fechaInicio: "2020-12-18",
            fechaFin: "2021-02-12",
            certificacionUrl: "https://www.credential.net/28060f9f-ebd1-4eea-a916-c5aaf81b67ef#gs.ta2u98",
            duracion: 0,
            thumbnails: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28715111'
          }, {
            titulo: "Programación Reactiva con Spring Boot 2 y Spring WebFlux",
            institucion: "Udemy",
            fechaInicio: "2020-12-18",
            fechaFin: "2021-01-01",
            certificacionUrl: "https://www.udemy.com/certificate/UC-e70f78d5-6756-4af2-8473-d80d15b668ba/",
            duracion: 0,
            thumbnails: '/assets/img/certs/thumbnails/programacion-reactiva-springboot.thumb.png'
          }, {
            titulo: "Apache Kafka con Java, Spring framework y AWS",
            institucion: "Udemy",
            fechaInicio: "2020-10-18",
            fechaFin: "2020-10-24",
            certificacionUrl: "https://www.udemy.com/certificate/UC-a78a1a84-0acc-47c9-8ae7-a458c1e67a95/",
            duracion: 0,
            thumbnails: '/assets/img/certs/thumbnails/kafka-java-spring-aws.thumb.png'
          }, {
            titulo: "Angular (Basic) ",
            institucion: "HackerRank",
            fechaInicio: "2020-06-01",
            fechaFin: "2020-06-01",
            certificacionUrl: "https://www.hackerrank.com/certificates/bddba66b1683",
            duracion: 0,
            thumbnails: '/assets/img/certs/thumbnails/hackerrank-angular(basic).thumb.png'
          }, {
            titulo: "React (Basic) ",
            institucion: "HackerRank",
            fechaInicio: "2020-06-01",
            fechaFin: "2020-06-01",
            certificacionUrl: "https://www.hackerrank.com/certificates/86772c3ab8a4",
            duracion: 0,
            thumbnails: '/assets/img/certs/thumbnails/hackerrank-react(basic).thumb.png'
          }, {
            titulo: "JavaScript Algorithms and Data Structures",
            institucion: "FreeCodeCamp.org",
            fechaInicio: "2020-05-01",
            fechaFin: "2020-05-01",
            certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
            duracion: 300,
            thumbnails: '/assets/img/certs/thumbnails/fcc-javascript_algorithms.thumb.png'
          }, {
            titulo: "Responsive Web Desing",
            institucion: "FreeCodeCamp.org",
            fechaInicio: "2018-01-01",
            fechaFin: "2018-08-01",
            certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
            duracion: 300,
            thumbnails: '/assets/img/certs/thumbnails/fcc-resposive_web_design.thumb.png'
          }, {
            titulo: "ReactJS",
            institucion: "Educacion IT",
            fechaInicio: "2018-07-25",
            fechaFin: "2018-08-25",
            certificacionUrl: "https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
            duracion: 15,
            thumbnails: '/assets/img/certs/thumbnails/educacionit-reactjs.thumb.png'
          }];
        }

        _createClass(CertificationsService, [{
          key: "getCertifications",
          value: function getCertifications() {
            return this.certifications;
          }
        }]);

        return CertificationsService;
      }();

      CertificationsService.ɵfac = function CertificationsService_Factory(t) {
        return new (t || CertificationsService)();
      };

      CertificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CertificationsService,
        factory: CertificationsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CertificationsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var _c1 = function _c1() {
        return ["home"];
      };

      var _c2 = function _c2() {
        return ["about"];
      };

      var _c3 = function _c3() {
        return ["experience"];
      };

      var _c4 = function _c4() {
        return ["portfolio"];
      };

      var _c5 = function _c5() {
        return ["contact"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
          this.showMenu = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigate",
          value: function navigate(url) {
            this.router.navigate(["/".concat(url)]);
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.showMenu = !this.showMenu;
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 19,
        vars: 37,
        consts: [[1, "menu-btn", 3, "ngClass", "click"], [1, "menu-btn__burger", 3, "ngClass"], [1, "nav", 3, "ngClass"], [1, "menu-nav", 3, "ngClass", "click"], [1, "menu-nav__item", 3, "ngClass"], ["href", "index.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "about.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "projects.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "contact.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_0_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_ul_click_3_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.showMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v98/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\nbody[_ngcontent-%COMP%] {\n  background: #272727;\n  color: #fff;\n  height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  transition: all 0.5s ease-in-out;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\napp-skill[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  color: #fff;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 1rem;\n  top: 1rem;\n  height: 20px;\n  width: 28px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%] {\n  transform: rotate(720deg);\n  background: transparent;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) translate(5px, 8px);\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg) translate(3px, -7px);\n}\n.nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  opacity: 0.98;\n  visibility: hidden;\n}\n.nav.open[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background: #272727;\n  list-style-type: none;\n  padding-right: 1rem;\n  transform: translateY(-100%);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100vw);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 2rem 0;\n  font-weight: 300;\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link.active[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #0000003d;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  z-index: -1;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.25s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.35s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.45s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 0.55s;\n}\n@media screen and (min-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(0);\n    height: 100%;\n    background: transparent;\n    text-align: center;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 1.5rem;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRkY7QUZEQSxhQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwR0FBQTtBRUlGO0FGREE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtBRUdGO0FGQUE7RUFDRSxtQkM3QmM7RUQ4QmQsV0FBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7QUVHRjtBRkFBOzs7RUFHRSxnQkFBQTtBRUdGO0FGQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUVHRjtBRkFBO0VBQ0ksY0MvQ2M7QUNrRGxCO0FGQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRUdGO0FGREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUVHSjtBRkRJO0VBQ0UsZUFBQTtFQ2xESixnQ0FBQTtBQ3NERjtBRkZNO0VBQ0UsY0MvRFU7QUNtRWxCO0FGRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FFQ0Y7QUExRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFREVBLGdDQUFBO0FDNEVGO0FBM0VFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RURQRixnQ0FBQTtBQ3FGRjtBQTNFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VEaEJKLGdDQUFBO0FDOEZGO0FBMUVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUQxQkosZ0NBQUE7QUN1R0Y7QUF6RUk7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FBMkVOO0FBekVNO0VBQ0UsNENBQUE7QUEyRVI7QUF6RU07RUFDRSw4Q0FBQTtBQTJFUjtBQXJFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBd0VGO0FBdEVFO0VBQ0UsbUJBQUE7QUF3RUo7QUFyRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRDNFWTtFQzRFWixxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RURuRUYsZ0NBQUE7QUMySUY7QUFyRUk7RUFDRSx3QkFBQTtBQXVFTjtBQXBFSTtFQUNFLDRCQUFBO0VEM0VKLGdDQUFBO0FDa0pGO0FBcEVNO0VBQ0Usd0JBQUE7QUFzRVI7QUFsRUk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFRHhGSixnQ0FBQTtBQzZKRjtBQWxFTTtFQUNFLGNEdEdVO0FDMEtsQjtBQWpFTTtFQUNFLGNEMUdVO0FDNktsQjtBQWhFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQWtFTjtBQTVERTtFQUNFLHVCQUFBO0FBK0RKO0FBaEVFO0VBQ0UsdUJBQUE7QUFtRUo7QUFwRUU7RUFDRSx1QkFBQTtBQXVFSjtBQXhFRTtFQUNFLHVCQUFBO0FBMkVKO0FEcExFO0VDOEdBO0lBQ0Usa0JBQUE7RUEwRUY7O0VBdkVBO0lBQ0UsbUJBQUE7RUEwRUY7RUF4RUU7SUFDRSxjQUFBO0lBQ0Esd0JBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQTBFSjtFQXhFSTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtFQTBFTjtFQXZFSTtJQUNFLGlCQUFBO0VBeUVOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbkBpbXBvcnQgXCIuL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLyogZmFsbGJhY2sgKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjk4L2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTmMud29mZjIpIGZvcm1hdCgnd29mZjInKTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3b3JkLXdyYXA6IG5vcm1hbDtcclxuICBkaXJlY3Rpb246IGx0cjtcclxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICBjb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGV4dC1zZWNvbmRhcnl7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuc29jaWFsLWljb25zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIGxlZnQ6IDFyZW07XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXBwLXNraWxse1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogZmFsbGJhY2sgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y5OC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGRpcmVjdGlvbjogbHRyO1xuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJsaWdhXCI7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZXh0LXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbm1haW4gLnNvY2lhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAxcmVtO1xufVxubWFpbiAuc29jaWFsLWljb25zIGEge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAuc29jaWFsLWljb25zIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cblxuYXBwLXNraWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMC41cmVtIGF1dG87XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tZW51LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDFyZW07XG4gIHRvcDogMXJlbTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5tZW51LWJ0bl9fYnVyZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwLjVyZW07XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudS1idG5fX2J1cmdlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudS1idG5fX2J1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm1lbnUtYnRuX19idXJnZXIub3BlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1lbnUtYnRuX19idXJnZXIub3Blbjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDhweCk7XG59XG4ubWVudS1idG5fX2J1cmdlci5vcGVuOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDNweCwgLTdweCk7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvcGFjaXR5OiAwLjk4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubmF2Lm9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm5hdiAubWVudS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2IC5tZW51LW5hdi5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLm5hdiAubWVudS1uYXZfX2l0ZW0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5uYXYgLm1lbnUtbmF2X19pdGVtLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ubmF2IC5tZW51LW5hdl9fbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm5hdiAubWVudS1uYXZfX2xpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4ubmF2IC5tZW51LW5hdl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLm5hdiAubWVudS1uYXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDNkO1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tZW51LW5hdl9faXRlbTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbn1cblxuLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xufVxuXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XG59XG5cbi5tZW51LW5hdl9faXRlbTpudGgtY2hpbGQoNCkge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjU1cztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtYnRuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubmF2IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5uYXYgLm1lbnUtbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9faXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kBmi":
    /*!*************************************************************!*\
      !*** ./src/app/components/portfolio/portfolio.component.ts ***!
      \*************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function kBmi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/portfolio.service */
      "/655");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      function PortfolioComponent_mat_card_9_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", lang_r4.name, " ", lang_r4.version, "");
        }
      }

      function PortfolioComponent_mat_card_9_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var frame_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", frame_r5.name, " ", frame_r5.version, "");
        }
      }

      function PortfolioComponent_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tecnologias aplicadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PortfolioComponent_mat_card_9_span_12_Template, 2, 2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PortfolioComponent_mat_card_9_span_13_Template, 2, 2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "VISITAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var proyect_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", proyect_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", proyect_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyect_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r1.lenguajes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", proyect_r1.frameworks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", proyect_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

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

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]));
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 10,
        vars: 1,
        consts: [[1, "portfolio"], [1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], ["class", "card mx-auto my-2", 4, "ngFor", "ngForOf"], [1, "card", "mx-auto", "my-2"], ["mat-card-image", "", 3, "src", "alt"], ["class", "badge badge-primary mx-1", 4, "ngFor", "ngForOf"], ["class", "badge badge-success mx-1", 4, "ngFor", "ngForOf"], [1, "actions"], ["target", "_blank", 3, "href"], [1, "badge", "badge-primary", "mx-1"], [1, "badge", "badge-success", "mx-1"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Una muestra de proyectos que llevo a cabo en mi tiempo libre con nuevas tecnolog\xEDas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PortfolioComponent_mat_card_9_Template, 17, 7, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.portfolio);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  padding: 6rem 3rem;\n}\n\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  margin-bottom: 25px;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 250px;\n  padding: 0.9rem;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY3NzL19jb25maWcuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNEUmM7QUNhbEI7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFLRjs7QUFGQTtFQUNFLGVBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBvcnRmb2xpbyB7XG4gIHBhZGRpbmc6IDZyZW0gM3JlbTtcbn1cbi5wb3J0Zm9saW8gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbn1cblxuLm1hdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.scss']
          }]
        }], function () {
          return [{
            type: _services_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qvUz":
    /*!********************************!*\
      !*** ./src/route-animation.ts ***!
      \********************************/

    /*! exports provided: fader, slider, transformer, stepper */

    /***/
    function qvUz(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // Basic


      var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
      }))])])]); // Positioned

      var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', slideTo('right')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', slideTo('left')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', slideTo('right'))]);
      var transformer = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isLeft', translateTo({
        x: -100,
        y: -100,
        rotate: -720
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => isRight', translateTo({
        x: 100,
        y: -100,
        rotate: 90
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isRight => *', translateTo({
        x: -100,
        y: -100,
        rotate: 360
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('isLeft => *', translateTo({
        x: 100,
        y: -100,
        rotate: -360
      }))]);

      function slideTo(direction) {
        var _Object;

        var optional = {
          optional: true
        };
        return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])((_Object = {
          position: 'absolute',
          top: 0
        }, _defineProperty(_Object, direction, 0), _defineProperty(_Object, "width", '100%'), _Object))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '-100%'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '100%')))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(_defineProperty({}, direction, '0%')))])])];
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
        return [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
        })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(".concat(x, "%, ").concat(y, "%) rotate(").concat(rotate, "deg)")
        }))], optional), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          transform: "translate(0, 0) rotate(0)"
        }))])])];
      } // Keyframes


      var stepper = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'absolute',
        left: 0,
        width: '100%'
      })]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0) translateX(100%)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5) translateX(25%)',
        offset: 0.3
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1) translateX(0%)',
        offset: 1
      })]))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5) translateX(-25%) rotate(0)',
        offset: 0.35
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'translateX(-50%) rotate(-180deg) scale(6)',
        offset: 1
      })]))])])])]);
      /***/
    },

    /***/
    "wJxl":
    /*!*****************************************!*\
      !*** ./src/app/pipes/birth-day.pipe.ts ***!
      \*****************************************/

    /*! exports provided: BirthDayPipe */

    /***/
    function wJxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BirthDayPipe", function () {
        return BirthDayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      BirthDayPipe.ɵfac = function BirthDayPipe_Factory(t) {
        return new (t || BirthDayPipe)();
      };

      BirthDayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "birthDay",
        type: BirthDayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BirthDayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'birthDay'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map