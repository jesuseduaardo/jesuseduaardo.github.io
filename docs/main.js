"use strict";
(self["webpackChunkcv_app"] = self["webpackChunkcv_app"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route-animation */ 9732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);





class AppComponent {
  title = 'J. Eduardo CV online';
  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 1,
    consts: [["outlet", "outlet"], [1, "main"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const outlet_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(outlet_r1));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  width: 100%;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQ0ZBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREtGIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn0iLCJAaW1wb3J0IFwiLi4vc2Nzcy9jb25maWdcIjtcclxuXHJcbmFwcC1uYXZiYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_route_animation__WEBPACK_IMPORTED_MODULE_0__.fader
      // slider,
      //transformer,
      //stepper
      ]
    }
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-typed-js */ 8967);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 9847);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 2905);
/* harmony import */ var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/birth-day.pipe */ 8490);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experience/experience.component */ 2263);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ 1777);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 581);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/experience.service */ 6898);
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/education.service */ 9380);
/* harmony import */ var _services_habilities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/habilities.service */ 5140);
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/portfolio.service */ 3530);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/skill/skill.component */ 5681);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/education/education.component */ 7357);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ 5473);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ 2091);
/* harmony import */ var _components_contact_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact-item/contact-item.component */ 3592);
/* harmony import */ var _components_experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/experience/experience-item/experience-item.component */ 354);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material/material.module */ 551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 5072);











//Servicios




//Rutas










class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    providers: [_services_experience_service__WEBPACK_IMPORTED_MODULE_8__.ExperienceService, _services_education_service__WEBPACK_IMPORTED_MODULE_9__.EducationService, _services_habilities_service__WEBPACK_IMPORTED_MODULE_10__.HabilitiesService, _services_portfolio_service__WEBPACK_IMPORTED_MODULE_11__.PortfolioService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_23__.NgxTypedJsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_19__.MaterialModule, _app_routes__WEBPACK_IMPORTED_MODULE_12__.app_routing]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_4__.BirthDayPipe, _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioComponent, _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__.SkillComponent, _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__.EducationComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__.FooterComponent, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe, _components_contact_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_17__.ContactItemComponent, _components_experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_18__.ExperienceItemComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_23__.NgxTypedJsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_19__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
  });
})();

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app_routing: () => (/* binding */ app_routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2905);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience/experience.component */ 2263);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ 1777);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 581);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/education/education.component */ 7357);







const app_routes = [{
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    animation: 'isRight'
  }
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent,
  data: {
    animation: 'isLeft'
  }
}, {
  path: 'experience',
  component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent,
  data: {
    animation: 'isRight'
  }
}, {
  path: 'education',
  component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent,
  data: {
    animation: 'isRight'
  }
}, {
  path: 'portfolio',
  component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent,
  data: {
    animation: 'isLeft'
  }
}, {
  path: 'contact',
  component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent,
  data: {
    animation: 'isRight'
  }
}, {
  path: '**',
  pathMatch: 'full',
  redirectTo: '/home'
}];
const app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(app_routes, {
  useHash: true
});

/***/ }),

/***/ 2905:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);


class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 32,
    vars: 0,
    consts: [[1, "about"], [1, "about__bio-image"], [1, "about__bio"], [1, "bio"], [1, "row"], [1, "col-12", "p-5"], ["target", "_blank", "href", "https://calendly.com/jesuseduaardo/45min"], [1, "pt-2"], [1, "col-12", "col-md-6", "text-center", "py-2"], ["aria-hidden", "false", "aria-label", "Example home icon"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "J. Eduardo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Castillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " I am a creative Java developer with seven years of experience in full stack programming, specializing in languages like Java and Javascript. I like about learning new technologies also to build solutions with great performance and intuitive design, making use of good practices and the best industry standards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Let's talk about how my knowledge and experience may fit in your company's project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6)(14, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Book a Meeting With Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8)(17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Associate Degree in Information Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " (System Analyst) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hobies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "sports_esports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "fitness_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "directions_bike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n.about__bio-image[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.7)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  line-height: 1.5rem;\n}\n.about__bio-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.about__bio[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n.about__bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.about__bio[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  width: 80vw;\n  margin: 1rem auto 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  text-align: center;\n}\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n.about[_ngcontent-%COMP%]   .download_button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #272727;\n  background-color: #ff652f;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FDREE7RUFDRSxvQkFBQTtBRElGO0FDRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFIQUFBO0VBTUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRERKO0FDR0k7RUFDRSxtQkFBQTtBREROO0FDSUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QURGSjtBQ0tNO0VBQ0UsY0ZoQ1U7QUM2QmxCO0FDT0k7RUFDRSxvQkFBQTtBRExOO0FDU0U7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURQSjtBQ1FJO0VBQ0UsY0ZqRFk7QUMyQ2xCO0FDUUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUROTjtBQ1NFO0VBQ0UscUJBQUE7RUFDQSxjRjNEWTtFRTREWix5QkYzRGM7QUNvRGxCIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWJvdXQge1xuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbn1cbi5hYm91dF9fYmlvLWltYWdlIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDM5LCAzOSwgMzksIDAuOSksIHJnYmEoMzksIDM5LCAzOSwgMC43KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsX3BpYy5qcGdcIikgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cbi5hYm91dF9fYmlvLWltYWdlIHAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmFib3V0X19iaW8ge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXRfX2JpbyBoMiBzcGFuIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uYWJvdXRfX2JpbyAudGV4dC1zZWNvbmRhcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5hYm91dCAuYmlvIHtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbjogMXJlbSBhdXRvIDAgYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtZ2FwOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQgLmJpbyBoNCB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmFib3V0IC5iaW8gcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLmFib3V0IC5kb3dubG9hZF9idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjcyNzI3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTJmO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uYWJvdXQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG5cclxuICAmX19iaW8taW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC45KSxcclxuICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAwLjcpXHJcbiAgICAgICksXHJcbiAgICAgIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsX3BpYy5qcGdcIikgY2VudGVyIHRvcDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2JpbyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1zZWNvbmRhcnkge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iaW8ge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGg0e1xyXG4gICAgICBjb2xvcjokc2Vjb25kYXJ5LWNvbG9yXHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kb3dubG9hZF9idXR0b24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2562:
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact-item.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactItem: () => (/* binding */ ContactItem)
/* harmony export */ });
class ContactItem {
  data;
  link;
  icon;
  constructor(data, link, icon) {
    this.data = data;
    this.link = link;
    this.icon = icon;
  }
}

/***/ }),

/***/ 3592:
/*!***************************************************************************!*\
  !*** ./src/app/components/contact/contact-item/contact-item.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactItemComponent: () => (/* binding */ ContactItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ContactItemComponent {
  contactItem = null;
  data;
  link;
  icon;
  constructor() {}
  ngOnInit() {
    this.data = this.contactItem.data;
    this.link = this.contactItem.link;
    this.icon = this.contactItem.icon;
  }
  static ɵfac = function ContactItemComponent_Factory(t) {
    return new (t || ContactItemComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactItemComponent,
    selectors: [["app-contact-item"]],
    inputs: {
      contactItem: "contactItem"
    },
    decls: 4,
    vars: 4,
    consts: [["width", "50", 3, "src", "alt"], [1, "pt-3"], [3, "href"]],
    template: function ContactItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1777:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _contact_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-item.model */ 2562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-item/contact-item.component */ 3592);



class ContactComponent {
  location;
  skype;
  email;
  whatsapp;
  constructor() {}
  ngOnInit() {
    this.location = this.getLocation();
    this.skype = this.getSkype();
    this.email = this.getEmail();
    this.whatsapp = this.getWhatsapp();
  }
  getLocation() {
    return new _contact_item_model__WEBPACK_IMPORTED_MODULE_0__.ContactItem("Buenos Aires - Argentina", "https://www.google.com.ar/maps/place/Monserrat,+CABA/@-34.6125587,-58.3793422,13z/data=!4m2!3m1!1s0x95bccad7c271d155:0xc9f98936bbfefff5", "assets/img/geo.svg");
  }
  getSkype() {
    return new _contact_item_model__WEBPACK_IMPORTED_MODULE_0__.ContactItem("jesus.eduaardo", "skype:jesus.eduaardo?chat", "assets/img/skype.svg");
  }
  getEmail() {
    return new _contact_item_model__WEBPACK_IMPORTED_MODULE_0__.ContactItem("jesuseduaardo@gmail.com", "mailto:jesuseduaardo@gmail.com", "assets/img/gmail.svg");
  }
  getWhatsapp() {
    return new _contact_item_model__WEBPACK_IMPORTED_MODULE_0__.ContactItem("+54 11 2783-4634", "https://api.whatsapp.com/send?phone=541127834634", "assets/img/whatsapp.svg");
  }
  static ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 9,
    vars: 2,
    consts: [[1, "contact"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "col-md-6", "contact-data", 3, "contactItem"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-contact-item", 4)(8, "app-contact-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.whatsapp);
      }
    },
    dependencies: [_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_1__.ContactItemComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.contact[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 5rem 0 4rem;\n}\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  padding: 0;\n  margin: 0;\n}\n.contact-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: center;\n  padding: 0.8rem 0;\n}\n\n.col-12[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 5rem;\n}\n\n@media (max-width: 600px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 4rem 0 2rem;\n  }\n  .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n  .col-12[_ngcontent-%COMP%]:first-of-type {\n    margin-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QURJRjtBQ0hFO0VBQ0UsY0ZOYztBQ1dsQjtBQ0hFOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBREtKO0FDSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREtKOztBQ0ZBO0VBQ0UsbUJBQUE7QURLRjs7QUNGQTtFQUNFO0lBQ0Usb0JBQUE7RURLRjtFQ0pFO0lBQ0UsY0FBQTtFRE1KO0VDSkU7SUFDRSxnQkFBQTtFRE1KO0VDSEE7SUFDRSxxQkFBQTtFREtGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWN0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogNXJlbSAwIDRyZW07XG59XG4uY29udGFjdCBoMSB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmNvbnRhY3QgaDEsXG4uY29udGFjdCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cblxuLmNvbC0xMjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbTtcbiAgfVxuICAuY29udGFjdCBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbiAgLmNvbnRhY3QgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbiAgLmNvbC0xMjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogNXJlbSAwIDRyZW07XHJcbiAgaDF7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcbiAgaDEsXHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICYtZGF0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW0gMDtcclxuICB9XHJcbn1cclxuLmNvbC0xMjpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29udGFjdCB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbTtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2wtMTI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7357:
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationComponent: () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/education.service */ 9380);
/* harmony import */ var _services_certifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/certifications.service */ 5021);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);





function EducationComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 17)(9, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const educ_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](educ_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](educ_r1.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 3, educ_r1.fechaFin, "MMM-y"));
  }
}
function EducationComponent_div_16_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16)(1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cert_r2.duracion, " Hours");
  }
}
function EducationComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 12)(2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22)(5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 25)(8, "div", 14)(9, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EducationComponent_div_16_p_13_Template, 3, 1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 17)(15, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const cert_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", cert_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cert_r2.thumbnails, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", cert_r2.certificacionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r2.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cert_r2.duracion > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r2.fechaFin);
  }
}
class EducationComponent {
  _educationService;
  _certificationService;
  panelOpenState;
  education = [];
  certifications = [];
  constructor(_educationService, _certificationService) {
    this._educationService = _educationService;
    this._certificationService = _certificationService;
  }
  ngOnInit() {
    this.education = this._educationService.getEducation();
    this.certifications = this._certificationService.getCertifications();
  }
  static ɵfac = function EducationComponent_Factory(t) {
    return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_education_service__WEBPACK_IMPORTED_MODULE_0__.EducationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_certifications_service__WEBPACK_IMPORTED_MODULE_1__.CertificationsService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EducationComponent,
    selectors: [["app-education"]],
    decls: 17,
    vars: 2,
    consts: [[1, "education"], [1, "container"], [1, "row"], [1, "col-12", "education-title"], [1, "col-12"], [1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "head-title", "mt-3"], ["aria-hidden", "false"], ["class", "card certs", 4, "ngFor", "ngForOf"], [1, "card"], [1, "row", "no-gutters"], [1, "col-md-12"], [1, "card-body", "p-1"], [1, "card-title", "my-0"], [1, "card-text", "my-0"], [1, "card-text"], [1, "text-muted"], [1, "card", "certs"], [1, "col-3", "align-self-center", "cert-container"], [1, "card-img", "cert", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", "title", "Ver Certificaci\u00F3n", 3, "href"], [1, "fas", "fa-eye"], [1, "col-9", "cert-title"], ["class", "card-text my-0", 4, "ngIf"]],
    template: function EducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h3", 5)(8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EducationComponent_div_11_Template, 12, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 8)(13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Certifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EducationComponent_div_16_Template, 17, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.certifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.education[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n\n.education-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.education-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #414141;\n  border-bottom: 5px solid #ff652f;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  text-align: start;\n}\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n.card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #ff652f;\n}\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #dddddd !important;\n}\n\n.card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #878787;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.certs[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0 auto;\n}\n\n.certs[_ngcontent-%COMP%]:first-child {\n  margin: 0 auto;\n}\n\n.cert-title[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n@media screen and (min-width: 768px) {\n  .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding-bottom: 2px;\n  }\n  .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n  .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-bottom: 2px;\n  }\n  .cert-title[_ngcontent-%COMP%] {\n    align-self: baseline;\n    padding: 20px;\n  }\n  .certs[_ngcontent-%COMP%] {\n    margin: 0.5rem auto 0 auto;\n  }\n  .certs[_ngcontent-%COMP%]:first-child {\n    margin: 0 auto !important;\n  }\n  .education[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQ0RBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURJRjs7QUNEQTtFQUNFLG1CQUFBO0FESUY7QUNGRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRmJjO0FDaUJsQjs7QUNBQTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0FER0Y7QUNERTtFQUNFLGlCQUFBO0FER0o7QUNESTtFQUNFLGVBQUE7QURHTjtBQ0NFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkZ4Q2M7QUN5Q2xCO0FDR0k7RUFDRSxvQkFBQTtBREROO0FDSUk7RUFDRSxZQUFBO0FERk47QUNLSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUdBLGdDQUFBO0VBQ0Esa0JBQUE7QURITjtBQ09FO0VBQ0UseUJBQUE7QURMSjs7QUNVRTtFQUNFLGVBQUE7QURQSjtBQ1VFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURSSjtBQ1VJO0VBQ0UsZUFBQTtBRFJOOztBQ2FBO0VBQ0UsMEJBQUE7QURWRjs7QUNhQTtFQUNFLGNBQUE7QURWRjs7QUNhQTtFQUNFLGtCQUFBO0FEVkY7O0FEOURFO0VFNkVFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VEWEo7RUNhRTtJQUNFLDBCQUFBO0VEWEo7RUNhRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFRFhKO0VDZUE7SUFDRSxvQkFBQTtJQUNBLGFBQUE7RURiRjtFQ2dCQTtJQUNFLDBCQUFBO0VEZEY7RUNpQkE7SUFDRSx5QkFBQTtFRGZGO0VDa0JBO0lBQ0UsaUJBQUE7RURoQkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmVkdWNhdGlvbiB7XG4gIHdpZHRoOiA3NXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5lZHVjYXRpb24tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmVkdWNhdGlvbi10aXRsZSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzQxNDE0MTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNmZjY1MmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNhcmQgLmNhcmQtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuLmNhcmQgLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLmNhcmQgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTJmO1xufVxuLmNhcmQgLmNlcnQtY29udGFpbmVyIC5jYXJkLWltZyB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufVxuLmNhcmQgLmNlcnQtY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMC43O1xufVxuLmNhcmQgLmNlcnQtY29udGFpbmVyIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZCAudGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjZGRkZGRkICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWJvZHkgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODc4Nzg3O1xufVxuLmNhcmQtYm9keSBwIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uY2VydHMge1xuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcbn1cblxuLmNlcnRzOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jZXJ0LXRpdGxlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1ib2R5IGg1IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgfVxuICAuY2FyZC1ib2R5IHNtYWxsIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZC1ib2R5IHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICB9XG4gIC5jZXJ0LXRpdGxlIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5jZXJ0cyB7XG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XG4gIH1cbiAgLmNlcnRzOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5lZHVjYXRpb24ge1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbi5lZHVjYXRpb24ge1xyXG4gIHdpZHRoOiA3NXZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmVkdWNhdGlvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIC5jYXJkLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5jZXJ0LWNvbnRhaW5lciB7XHJcbiAgICAuY2FyZC1pbWcge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIC5vdmVybGF5IHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jZXJ0cyB7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XHJcbn1cclxuXHJcbi5jZXJ0czpmaXJzdC1jaGlsZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5jZXJ0LXRpdGxlIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLW1kIHtcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgfVxyXG4gICAgc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2VydC10aXRsZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2VydHMge1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2VydHM6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lZHVjYXRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDZyZW07XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 354:
/*!************************************************************************************!*\
  !*** ./src/app/components/experience/experience-item/experience-item.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceItemComponent: () => (/* binding */ ExperienceItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ExperienceItemComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.experience.fechaEgreso, "MMM-y"));
  }
}
function ExperienceItemComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ExperienceItemComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.experience.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.experience.web);
  }
}
function ExperienceItemComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Participation in ", ctx_r0.experience.proyectos.length, " projects ");
  }
}
class ExperienceItemComponent {
  experience;
  constructor() {}
  ngOnInit() {}
  static ɵfac = function ExperienceItemComponent_Factory(t) {
    return new (t || ExperienceItemComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceItemComponent,
    selectors: [["app-experience-item"]],
    inputs: {
      experience: "experience"
    },
    decls: 16,
    vars: 10,
    consts: [[1, "company-and-date"], [1, "row"], [1, "col-12", "fecha-ingreso-egreso"], [4, "ngIf"], [1, "col-12", "info"], ["class", "company-link d-none d-md-block", 4, "ngIf"], ["class", "cant-exp", 4, "ngIf"], [1, "company-link", "d-none", "d-md-block"], ["target", "_blank", 3, "href"], [1, "cant-exp"]],
    template: function ExperienceItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceItemComponent_span_7_Template, 3, 4, "span", 3)(8, ExperienceItemComponent_span_8_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceItemComponent_p_12_Template, 3, 2, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceItemComponent_p_15_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, ctx.experience.fechaIngreso, "MMM-y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.fechaEgreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.experience.fechaEgreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.web);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.proyectos.length > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.company-and-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n}\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #ff652f;\n}\n.company-and-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.company-and-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #c5c5c5;\n}\n.company-and-date[_ngcontent-%COMP%]   .chronology-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n@media screen and (min-width: 768px) {\n    .mat-expansion-indicator::after {\n    padding: 10px !important;\n    color: white;\n  }\n  .company-and-date[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .company-and-date[_ngcontent-%COMP%]   .fecha-ingreso-egreso[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n  .company-and-date[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLWl0ZW0vZXhwZXJpZW5jZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS1pdGVtL2V4cGVyaWVuY2UtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0FER0Y7QUNERTtFQUNFLGdCQUFBO0VBQ0EsY0ZaYztBQ2VsQjtBQ0FFO0VBQ0UsZ0JBQUE7QURFSjtBQ0VFO0VBQ0UsZ0JBQUE7RUFDQSxjRnJCYTtBQ3FCakI7QUNHRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBRERKOztBREpFO0VFV0U7SUFDRSx3QkFBQTtJQUNBLFlBQUE7RURISjtFQ01BO0lBQ0UsaUJBQUE7RURKRjtFQ0tFO0lBQ0UsaUJBQUE7RURISjtFQ0tFO0lBQ0UsZUFBQTtFREhKO0VDS0U7SUFDRSxpQkFBQTtFREhKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb21wYW55LWFuZC1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgaDUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cbi5jb21wYW55LWFuZC1kYXRlIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogI2M1YzVjNTtcbn1cbi5jb21wYW55LWFuZC1kYXRlIC5jaHJvbm9sb2d5LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY29tcGFueS1hbmQtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmNvbXBhbnktYW5kLWRhdGUgaDUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5jb21wYW55LWFuZC1kYXRlIC5mZWNoYS1pbmdyZXNvLWVncmVzbyB7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5jb21wYW55LWFuZC1kYXRlIC5pbmZvIHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG5cclxuLmNvbXBhbnktYW5kLWRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcblxyXG4gIGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICR0ZXJjaWFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIC5jaHJvbm9sb2d5LWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1tZCB7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBhbnktYW5kLWRhdGV7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGg1e1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5mZWNoYS1pbmdyZXNvLWVncmVzb3tcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG4gICAgLmluZm97XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2263:
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/experience.service */ 6898);
/* harmony import */ var _services_habilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/habilities.service */ 5140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill/skill.component */ 5681);
/* harmony import */ var _experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-item/experience-item.component */ 354);









function ExperienceComponent_mat_expansion_panel_14_div_4_li_5_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tecnologia_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", tecnologia_r3, " ");
  }
}
function ExperienceComponent_mat_expansion_panel_14_div_4_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div")(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Skills used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_14_div_4_li_5_li_10_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const proyect_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r4.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", proyect_r4.tecnologias);
  }
}
function ExperienceComponent_mat_expansion_panel_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_14_div_4_li_5_Template, 11, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const experience_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r5.proyectos);
  }
}
function ExperienceComponent_mat_expansion_panel_14_div_5_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tecnologia_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tecnologia_r6);
  }
}
function ExperienceComponent_mat_expansion_panel_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Skills used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExperienceComponent_mat_expansion_panel_14_div_5_li_7_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const experience_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r5.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r5.tecnologias);
  }
}
function ExperienceComponent_mat_expansion_panel_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_opened_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.panelOpenState);
    })("closed", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_closed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.panelOpenState);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel-header", 16)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-experience-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExperienceComponent_mat_expansion_panel_14_div_4_Template, 6, 1, "div", 18)(5, ExperienceComponent_mat_expansion_panel_14_div_5_Template, 8, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experience_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapsedHeight", "150px")("expandedHeight", "150px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("experience", experience_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r5.proyectos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r5.proyectos.length == 0 && experience_r5.resumenProyecto.length);
  }
}
function ExperienceComponent_app_skill_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skill", 24);
  }
  if (rf & 2) {
    const hability_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hability", hability_r7);
  }
}
class ExperienceComponent {
  _experienceService;
  _habilitiesService;
  panelOpenState = true;
  experiences = [];
  habilities = [];
  constructor(_experienceService, _habilitiesService) {
    this._experienceService = _experienceService;
    this._habilitiesService = _habilitiesService;
  }
  ngOnInit() {
    this.experiences = this._experienceService.getExperience();
    this.habilities = this._habilitiesService.getHabilities();
  }
  static ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_0__.ExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_habilities_service__WEBPACK_IMPORTED_MODULE_1__.HabilitiesService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 24,
    vars: 2,
    consts: [[1, "experience"], [1, "container"], [1, "row"], [1, "col-12", "experience-title"], [1, "col-12"], [1, "head-title", "mt-3"], ["aria-hidden", "false", "aria-label", "empleos"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stats"], ["class", "col-md-4 p-3", 3, "hability", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight", "expandedHeight"], [3, "experience"], ["class", "proyects-list", 4, "ngIf"], [4, "ngIf"], [1, "proyects-list"], [1, "proyects"], [4, "ngFor", "ngForOf"], [1, "tecnologies"], [1, "col-md-4", "p-3", 3, "hability"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Last update 05/12/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "h3", 5)(10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Work History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-accordion", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ExperienceComponent_mat_expansion_panel_14_Template, 6, 5, "mat-expansion-panel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "h3", 11)(18, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "emoji_events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card", 13)(22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ExperienceComponent_app_skill_23_Template, 1, 1, "app-skill", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.habilities);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionPanelTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceItemComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.fecha-ingreso-egreso[_ngcontent-%COMP%] {\n  flex-flow: row-reverse;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: auto;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0.75em 0 0.75em 0;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #414141;\n  color: #c5c5c5 !important;\n  border-bottom: 5px solid #ff652f;\n  margin-bottom: 1rem;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: block;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #ff652f !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  flex-direction: row;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n  line-height: 1.5rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #414141 !important;\n}\n\n.proyects[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n.proyects[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.proyects[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.proyects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.proyects-list[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n}\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid #e6e6e6;\n  background: #f5f5f5;\n  padding: 10px;\n}\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.tecnologies[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  color: #fff;\n}\n.tecnologies[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: monospace;\n  margin: 2px;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.cert[_ngcontent-%COMP%] {\n  width: 95px;\n  margin: auto;\n  display: block;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 76%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.cant-exp[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: #a5a5a5;\n}\n\n.company-link[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-bottom: 5px !important;\n}\n.company-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 0;\n  color: #c5c5c5;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #414141;\n  margin-bottom: 4rem;\n  padding: 0.3rem 1rem 3rem;\n}\n\n@keyframes _ngcontent-%COMP%_scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .experience[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLHNCQUFBO0FESUY7O0FDREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRElGO0FDRkU7RUFDRSxtQkFBQTtBRElKO0FDRkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0ZoQlk7QUNvQmxCO0FDREk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FER047O0FDRUE7RUFDRSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QURDRjtBQ0NFOztFQUVFLGNBQUE7QURDSjtBQ0VFO0VBQ0UseUJBQUE7QURBSjtBQ0dFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEREo7O0FDS0E7RUFDRSxvQ0FBQTtBREZGOztBQ0tBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FERkY7QUNJRTtFQUNFLG9CQUFBO0FERko7QUNLRTtFQUNFLGNGckVjO0FDa0VsQjtBQ01FO0VBQ0UsZUFBQTtBREpKOztBQ1FBO0VBQ0UsY0Y3RWU7QUN3RWpCO0FDT0U7RUFDRSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURMSjtBQ1FFO0VBQ0UsZ0JBQUE7QUROSjs7QUNVQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBRFBGO0FDU0U7RUFDRSxlQUFBO0FEUEo7QUNVRTtFQUNFLGVBQUE7QURSSjtBQ1VJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FEUk47O0FDYUE7RUFDRSxhQUFBO0FEVkY7O0FDYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURWRjs7QUNhQTtFQUNFLGNBQUE7QURWRjs7QUNhQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FEVkY7O0FDYUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRFZGOztBQ2FBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBRFZGO0FDWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURWSjs7QUNjQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRFhGOztBQ2NBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VEWEY7RUNjQTtJQUNFLG9CQUFBO0lBQ0EsdUJBQUE7RURaRjtBQUNGO0FEaElFO0VFZ0pBO0lBQ0UsaUJBQUE7RURiRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmVjaGEtaW5ncmVzby1lZ3Jlc28ge1xuICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gIHdpZHRoOiA3NXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS10aXRsZSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS10aXRsZSBlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaHIge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuNzVlbSAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIGNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmY2NTJmO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6ICNmZjY1MmYgIWltcG9ydGFudDtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDEgIWltcG9ydGFudDtcbn1cblxuLnByb3llY3RzIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnByb3llY3RzID4gbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cbi5wcm95ZWN0cyBoNSB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLnByb3llY3RzIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wcm95ZWN0cy1saXN0IHtcbiAgY29sb3I6ICNjNWM1YzU7XG59XG4ucHJveWVjdHMtbGlzdCA+IGxpIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJveWVjdHMtbGlzdCA+IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4udGVjbm9sb2dpZXMge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG4udGVjbm9sb2dpZXMgaDYge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGVjbm9sb2dpZXMgdWwge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4udGVjbm9sb2dpZXMgdWwgbGkge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBtYXJnaW46IDJweDtcbn1cblxuLmRhdGEtY2FyZCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5jZXJ0IHtcbiAgd2lkdGg6IDk1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgZm9udC1zaXplOiA3NiU7XG59XG5cbi5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jYW50LWV4cCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICNhNWE1YTU7XG59XG5cbi5jb21wYW55LWxpbmsge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5jb21wYW55LWxpbmsgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGNvbG9yOiAjYzVjNWM1O1xufVxuXG4ubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBwYWRkaW5nOiAwLjNyZW0gMXJlbSAzcmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWhvci1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uZmVjaGEtaW5ncmVzby1lZ3Jlc28ge1xyXG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlIHtcclxuICB3aWR0aDogNzV2dztcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIC5leHBlcmllbmNlLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGVtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMC43NWVtIDAgMC43NWVtIDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xyXG4gIGNvbG9yOiAkdGVyY2lhcnktY29sb3IgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJveWVjdHMge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICA+bGkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb3llY3RzLWxpc3Qge1xyXG4gIGNvbG9yOiAkdGVyY2lhcnktY29sb3I7XHJcblxyXG4gID5saSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICA+bGk6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRlY25vbG9naWVzIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBjb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xyXG5cclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kYXRhLWNhcmQge1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5jZXJ0IHtcclxuICB3aWR0aDogOTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBmb250LXNpemU6IDc2JTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNhbnQtZXhwIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6ICNhNWE1YTU7XHJcbn1cclxuXHJcbi5jb21wYW55LWxpbmsge1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBjb2xvcjogI2M1YzVjNTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtIDNyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLW1kIHtcclxuICAuZXhwZXJpZW5jZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnJlbTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5473:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  currentYear;
  constructor() {}
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
  static ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 1,
    consts: [[1, "social-icons"], ["href", "https://www.linkedin.com/in/jesuseduaardo/"], [1, "fab", "fa-linkedin", "fa-2x"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 Copyright ", ctx.currentYear, "");
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 0.5rem;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff652f;\n  padding: 0.4rem;\n}\n\nfooter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  bottom: 0.7rem;\n  right: 0.5rem;\n  text-align: right;\n  padding: 1rem;\n  color: #fff;\n  opacity: 0.5;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQ0RBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FESUY7QUNIRTtFQUNFLGNGUGM7RUVRZCxlQUFBO0FES0o7O0FDREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURJRiIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAwLjVyZW07XG59XG4uc29jaWFsLWljb25zIGEge1xuICBjb2xvcjogI2ZmNjUyZjtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvdHRvbTogMC43cmVtO1xuICByaWdodDogMC41cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IGZpeGVkO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uc29jaWFsLWljb25zIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGxlZnQ6IDAuNXJlbTtcclxuICBhIHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm90dG9tOiAwLjdyZW07XHJcbiAgcmlnaHQ6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-typed-js */ 8967);


const _c0 = () => ["Backend Developer", "Frontend Developer", "FullStack Developer^5000"];
class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 9,
    vars: 5,
    consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md", "info"], [3, "strings", "typeSpeed", "backSpeed", "loop"], [1, "typing"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J. Eduardo Castillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-typed-js", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("typeSpeed", 100)("backSpeed", 100)("loop", true);
      }
    },
    dependencies: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__.NgxTypedJsComponent],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  align-items: center;\n  text-align: center;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 60vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  padding: 2rem;\n}\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n    align-items: center;\n    text-align: center;\n    background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('_-_-_-_-assets-img-perfil_pic.jpg') center 0rem;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQU1BLHNCQUFBO0FEREY7QUNHRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBRERKO0FDRUk7RUFDRSxjRnRCWTtBQ3NCbEI7QUNFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FEQU47QUNDTTtFQUNFLGNGNUJVO0FDNkJsQjs7QURQRTtFRWFBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlJQUFBO0lBTUEsc0JBQUE7SUFDQSw0QkFBQTtFRFBGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzksIDM5LCAzOSwgMC45KSwgcmdiYSgzOSwgMzksIDM5LCAwLjMpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQgLmluZm8ge1xuICBwYWRkaW5nLXRvcDogNjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudCAuaW5mbyAudHlwaW5nIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uY29udGVudCAuaW5mbyBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmNvbnRlbnQgLmluZm8gaTpob3ZlciB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzOSwgMzksIDM5LCAwLjkpLCByZ2JhKDM5LCAzOSwgMzksIDAuMykpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciAwcmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuOSksXHJcbiAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuMylcclxuICAgICksXHJcbiAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgLmluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDYwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC50eXBpbmcge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1tZCB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuOSksXHJcbiAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC4zKVxyXG4gICAgICApLFxyXG4gICAgICB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciAwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9847:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "open": a0
});
const _c1 = () => ["home"];
const _c2 = () => ["about"];
const _c3 = () => ["experience"];
const _c4 = () => ["education"];
const _c5 = () => ["contact"];
class NavbarComponent {
  router;
  showMenu = false;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  navigate(url) {
    this.router.navigate([`/${url}`]);
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  static ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    decls: 19,
    vars: 37,
    consts: [[1, "menu-btn", 3, "click", "ngClass"], [1, "menu-btn__burger", 3, "ngClass"], [1, "nav", 3, "ngClass"], [1, "menu-nav", 3, "click", "ngClass"], [1, "menu-nav__item", 3, "ngClass"], ["href", "#", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "contact.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_0_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2)(3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_ul_click_3_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4)(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 4)(17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c5));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v98/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n.main[_ngcontent-%COMP%] {\n  padding-bottom: 4rem !important;\n}\n\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #272727;\n  color: #fff;\n  height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n  text-decoration: none;\n}\n\n.text-secondary[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\nmain[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  transition: all 0.5s ease-in-out;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\napp-skill[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  color: #fff;\n  background-color: #383838;\n  box-shadow: 5px 6px 1px #333;\n}\n\n.head-title[_ngcontent-%COMP%] {\n  background-color: #ff652f;\n  padding: 0.3em !important;\n  text-align: center;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 1rem;\n  top: 1rem;\n  height: 20px;\n  width: 28px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%] {\n  transform: rotate(720deg);\n  background: transparent;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) translate(5px, 8px);\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg) translate(3px, -7px);\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  opacity: 0.98;\n  visibility: hidden;\n}\n.nav.open[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background: #272727;\n  list-style-type: none;\n  transform: translateY(-100%);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100vw);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 2rem 0;\n  font-weight: 300;\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link.active[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2392156863);\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  z-index: -1;\n}\n\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.25s;\n}\n\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.35s;\n}\n\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.45s;\n}\n\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 0.55s;\n}\n\n@media screen and (min-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .nav[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(0);\n    height: 100%;\n    background: transparent;\n    text-align: center;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 1.5rem;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRkY7O0FGREEsYUFBQTtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEdBQUE7QUVJRjtBRkZBO0VBQ0UsK0JBQUE7QUVJRjs7QUZGQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FFS0Y7O0FGRkE7RUFDRSxtQkMvQmM7RURnQ2QsV0FBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7QUVLRjs7QUZGQTs7O0VBR0UsZ0JBQUE7QUVLRjs7QUZGQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBRUtGO0FGSkU7RUFDRSxjQy9DYztFRGdEZCxxQkFBQTtBRU1KOztBRkZBO0VBQ0ksY0NyRGM7QUMwRGxCOztBRkZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUVLRjtBRkhFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FFS0o7QUZISTtFQUNFLGVBQUE7RUN4REosZ0NBQUE7QUM4REY7QUZKTTtFQUNFLGNDckVVO0FDMkVsQjs7QUZBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FFR0Y7O0FGQUE7RUFDRSx5QkN0RmdCO0VEdUZoQix5QkFBQTtFQUNBLGtCQUFBO0FFR0Y7O0FDMUZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUZFQSxnQ0FBQTtBQzRGRjtBQzNGRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VGUEYsZ0NBQUE7QUNxR0Y7QUMzRkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFRmhCSixnQ0FBQTtBQzhHRjtBQzFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VGMUJKLGdDQUFBO0FDdUhGO0FDekZJO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBRDJGTjtBQ3pGTTtFQUNFLDRDQUFBO0FEMkZSO0FDekZNO0VBQ0UsOENBQUE7QUQyRlI7O0FDckZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUR3RkY7QUN0RkU7RUFDRSxtQkFBQTtBRHdGSjtBQ3JGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJGM0VZO0VFNEVaLHFCQUFBO0VBQ0EsNEJBQUE7RUZsRUYsZ0NBQUE7QUMwSkY7QUNyRkk7RUFDRSx3QkFBQTtBRHVGTjtBQ3BGSTtFQUNFLDRCQUFBO0VGMUVKLGdDQUFBO0FDaUtGO0FDcEZNO0VBQ0Usd0JBQUE7QURzRlI7QUNsRkk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFRnZGSixnQ0FBQTtBQzRLRjtBQ2xGTTtFQUNFLGNGckdVO0FDeUxsQjtBQ2pGTTtFQUNFLGNGekdVO0FDNExsQjtBQ2hGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBRGtGTjs7QUM1RUU7RUFDRSx1QkFBQTtBRCtFSjs7QUNoRkU7RUFDRSx1QkFBQTtBRG1GSjs7QUNwRkU7RUFDRSx1QkFBQTtBRHVGSjs7QUN4RkU7RUFDRSx1QkFBQTtBRDJGSjs7QURuTUU7RUU2R0E7SUFDRSxrQkFBQTtFRDBGRjtFQ3ZGQTtJQUNFLG1CQUFBO0VEeUZGO0VDdkZFO0lBQ0UsY0FBQTtJQUNBLHdCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUR5Rko7RUN2Rkk7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUR5Rk47RUN0Rkk7SUFDRSxpQkFBQTtFRHdGTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AaW1wb3J0IFwiLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbi8qIGZhbGxiYWNrICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y5OC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbn1cclxuLm1haW57XHJcbiAgcGFkZGluZy1ib3R0b206IDRyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlcntcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtc2Vjb25kYXJ5e1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZWFzZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFwcC1za2lsbHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICBib3gtc2hhZG93OiA1cHggNnB4IDFweCAjMzMzO1xyXG59XHJcblxyXG4uaGVhZC10aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIHBhZGRpbmc6IDAuM2VtICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogZmFsbGJhY2sgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y5OC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbi5tYWluIHtcbiAgcGFkZGluZy1ib3R0b206IDRyZW0gIWltcG9ydGFudDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmNjUyZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5zb2NpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cbm1haW4gLnNvY2lhbC1pY29ucyBhIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbmFwcC1za2lsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzODM4O1xuICBib3gtc2hhZG93OiA1cHggNnB4IDFweCAjMzMzO1xufVxuXG4uaGVhZC10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1MmY7XG4gIHBhZGRpbmc6IDAuM2VtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbnUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogMXJlbTtcbiAgdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm1lbnUtYnRuX19idXJnZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDAuNXJlbTtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5tZW51LWJ0bl9fYnVyZ2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5tZW51LWJ0bl9fYnVyZ2VyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudS1idG5fX2J1cmdlci5vcGVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWVudS1idG5fX2J1cmdlci5vcGVuOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgOHB4KTtcbn1cbi5tZW51LWJ0bl9fYnVyZ2VyLm9wZW46OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoM3B4LCAtN3B4KTtcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIG9wYWNpdHk6IDAuOTg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5uYXYub3BlbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubmF2IC5tZW51LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5uYXYgLm1lbnUtbmF2Lm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG4ubmF2IC5tZW51LW5hdl9faXRlbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm5hdiAubWVudS1uYXZfX2l0ZW0ub3BlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5uYXYgLm1lbnUtbmF2X19saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2IC5tZW51LW5hdl9fbGluay5hY3RpdmUge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cbi5uYXYgLm1lbnUtbmF2X19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4ubmF2IC5tZW51LW5hdjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjM5MjE1Njg2Myk7XG4gIGZpbHRlcjogYmx1cig4cHgpO1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMjVzO1xufVxuXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7XG59XG5cbi5tZW51LW5hdl9faXRlbTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1cztcbn1cblxuLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCg0KSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNTVzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAubWVudS1idG4ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAubmF2IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5uYXYgLm1lbnUtbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9faXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5tZW51LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAmX19idXJnZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC04cHg7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xyXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgOHB4KTtcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoM3B4LCAtN3B4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvcGFjaXR5OiAwLjk4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAubWVudS1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICAgJi5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XHJcbiAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNCB7XHJcbiAgLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogKCRpICogMC4xcykrIDAuMTVzO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtbWQge1xyXG4gIC5tZW51LWJ0biB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgLm1lbnUtbmF2IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 581:
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/portfolio.service */ 3530);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 3777);




function PortfolioComponent_mat_card_9_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", lang_r1.name, " ", lang_r1.version, "");
  }
}
function PortfolioComponent_mat_card_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const frame_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", frame_r2.name, " ", frame_r2.version, "");
  }
}
function PortfolioComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5)(1, "mat-card-header")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tecnologias aplicadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PortfolioComponent_mat_card_9_span_11_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PortfolioComponent_mat_card_9_span_13_Template, 2, 2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card-actions", 9)(15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "VISITAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const proyect_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyect_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", proyect_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", proyect_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyect_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", proyect_r3.lenguajes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", proyect_r3.frameworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", proyect_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class PortfolioComponent {
  _portafolioService;
  portfolio = [];
  constructor(_portafolioService) {
    this._portafolioService = _portafolioService;
  }
  ngOnInit() {
    this.portfolio = this._portafolioService.getPortfolio();
  }
  static ɵfac = function PortfolioComponent_Factory(t) {
    return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_0__.PortfolioService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["app-portfolio"]],
    decls: 10,
    vars: 1,
    consts: [[1, "portfolio"], [1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], ["class", "card mx-auto my-2", 4, "ngFor", "ngForOf"], [1, "card", "mx-auto", "my-2"], ["mat-card-image", "", 3, "src", "alt"], ["class", "badge badge-primary mx-1", 4, "ngFor", "ngForOf"], ["class", "badge badge-success mx-1", 4, "ngFor", "ngForOf"], [1, "actions"], ["target", "_blank", 3, "href"], [1, "badge", "badge-primary", "mx-1"], [1, "badge", "badge-success", "mx-1"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Una muestra de proyectos que llevo a cabo en mi tiempo libre con nuevas tecnolog\u00EDas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PortfolioComponent_mat_card_9_Template, 17, 7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.portfolio);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  padding: 6rem 3rem;\n}\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  margin-bottom: 25px;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 250px;\n  padding: 0.9rem;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.3rem;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n}\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #060606;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n  color: #060606;\n  margin: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQ0RBO0VBQ0Usa0JBQUE7QURJRjtBQ0hFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0ZSYztBQ2FsQjs7QUNGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBREtGO0FDSkU7RUFDRSxtQkFBQTtBRE1KOztBQ0ZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURLRjs7QUNGQTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QURLRjs7QUNGQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBREtGO0FDSkU7RUFDRSxjQUFBO0FETUo7QUNMSTtFQUNFLGNBQUE7QURPTjs7QUNGQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBREtGIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucG9ydGZvbGlvIHtcbiAgcGFkZGluZzogNnJlbSAzcmVtO1xufVxuLnBvcnRmb2xpbyBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuLmNhcmQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmFjdGlvbnMgYSB7XG4gIGNvbG9yOiAjM2QzZDNkO1xufVxuLmFjdGlvbnMgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDYwNjA2O1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGNvbG9yOiAjMDYwNjA2O1xuICBtYXJnaW46IDAuMnJlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLnBvcnRmb2xpbyB7XHJcbiAgcGFkZGluZzogNnJlbSAzcmVtO1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDAuOXJlbTtcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6ICMwNjA2MDY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBjb2xvcjogIzA2MDYwNjtcclxuICBtYXJnaW46IDAuMnJlbTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5681:
/*!*****************************************************!*\
  !*** ./src/app/components/skill/skill.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillComponent: () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = a0 => ({
  "width": a0
});
function SkillComponent_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
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
    const framework_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" v.", framework_r2.version, "");
  }
}
function SkillComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5)(3, "div", 6)(4, "p")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillComponent_div_5_span_7_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const framework_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", framework_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", framework_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", framework_r2.name + " v." + framework_r2.version + " = " + framework_r2.percent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, framework_r2.percent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](framework_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", framework_r2.version !== 0);
  }
}
class SkillComponent {
  hability;
  constructor() {}
  ngOnInit() {}
  static ɵfac = function SkillComponent_Factory(t) {
    return new (t || SkillComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_5_Template, 8, 8, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hability.language.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.hability.language.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hability.language.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hability.language.version !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hability.frameworks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.stats[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.hability-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 0.5rem auto 0rem auto;\n}\n.hability-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.hability-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n  border: none;\n}\n\n.framework-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  width: 100%;\n}\n.framework-info[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  border-radius: 0px 5px 5px 0px;\n}\n.framework-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  border: none;\n}\n\n.tooltipInfo[_ngcontent-%COMP%] {\n  background-color: #03a2ff;\n  position: relative;\n  top: 20px;\n  left: 50%;\n  font-size: 14px;\n}\n\n.info-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 89%;\n  font-size: 28px;\n  font-style: italic;\n  font-family: \"Krona One\", sans-serif;\n}\n\n.progress-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 3;\n  margin-bottom: 0;\n  color: #414141;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 0 10px;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb25maWcuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL01pJTIwQ3VycmljdWx1bSUyME9ubGluZS9qZXN1c2VkdWFhcmRvLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbXBvbmVudHMvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FDREE7RUFDRSxtQkFBQTtBRElGO0FDSEU7RUFDRSxTQUFBO0FES0o7O0FDREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QURJRjtBQ0ZFO0VBQ0UsZ0JBQUE7QURJSjtBQ0ZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURJSjs7QUNEQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FESUY7QUNIRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QURLSjtBQ0hFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURLSjs7QUNEQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QURJRjs7QUNGQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FES0Y7O0FDRkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FES0Y7O0FDRkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBREtGOztBQ0ZBO0VBQ0UsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREtGIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3RhdHMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN0YXRzIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5oYWJpbGl0eS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvIDByZW0gYXV0bztcbn1cbi5oYWJpbGl0eS10aXRsZSBoNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaGFiaWxpdHktdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZyYW1ld29yay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZyYW1ld29yay1pbmZvIC5wcm9ncmVzcyB7XG4gIGhlaWdodDogNHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xufVxuLmZyYW1ld29yay1pbmZvIGltZyB7XG4gIHdpZHRoOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50b29sdGlwSW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2EyZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1MCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmluZm8tcGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogODklO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wcm9ncmVzcy1iYXIgcCB7XG4gIHotaW5kZXg6IDM7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjNDE0MTQxO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLnN0YXRzIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhhYmlsaXR5LXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwcmVtIGF1dG87XHJcblxyXG4gIGg1IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuLmZyYW1ld29yay1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLnByb2dyZXNzIHtcclxuICAgIGhlaWdodDogNHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50b29sdGlwSW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTJmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmluZm8tcGVyY2VudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDg5JTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtZmFtaWx5OiBcIktyb25hIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHAge1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcclxufVxyXG5cclxuaSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuLmltZy10aHVtYm5haWwge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 551:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 5244);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 4992);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);




































class MaterialModule {
  static ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__.MatTreeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__.MatTreeModule]
  });
})();

/***/ }),

/***/ 8490:
/*!*****************************************!*\
  !*** ./src/app/pipes/birth-day.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BirthDayPipe: () => (/* binding */ BirthDayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class BirthDayPipe {
  transform(value) {
    if (!value) {
      return value;
    }
    const today = new Date();
    const birthDate = new Date(value);
    console.log(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
      age--;
    }
    return age;
  }
  static ɵfac = function BirthDayPipe_Factory(t) {
    return new (t || BirthDayPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "birthDay",
    type: BirthDayPipe,
    pure: true
  });
}

/***/ }),

/***/ 2091:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);


class SafeHtmlPipe {
  sanitizer;
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static ɵfac = function SafeHtmlPipe_Factory(t) {
    return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safeHtml",
    type: SafeHtmlPipe,
    pure: true
  });
}

/***/ }),

/***/ 5021:
/*!****************************************************!*\
  !*** ./src/app/services/certifications.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificationsService: () => (/* binding */ CertificationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CertificationsService {
  certifications = [{
    titulo: "Especializacion en React",
    institucion: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    fechaInicio: "",
    fechaFin: "2023-07",
    certificacionUrl: "https://drive.google.com/file/d/1sGARFiKQyTmN3eVHlAIDjgFdJi-4AoHF/view",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/especializacion-en-react-codo-a-codo.jpg'
  }, {
    titulo: "Docker Mastery: with Kubernetes+Swarm from a Docker Captain",
    institucion: "Udemy",
    fechaInicio: "",
    fechaFin: "2023-05-05",
    certificacionUrl: "https://www.udemy.com/certificate/UC-dba836d8-3518-481c-a11d-6ba9f27a0210/",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/docker-mastery-with-kubernetes+swarm-from-docker-captain.jpg'
  }, {
    titulo: "Microservicios Spring Cloud Eureka & Angular Full-stack",
    institucion: "Udemy",
    fechaInicio: "",
    fechaFin: "2022-09-11",
    certificacionUrl: "https://www.udemy.com/certificate/UC-3490da41-2672-4c0d-b2b5-7c30dfb34657/",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/microservicios-spring-cloud-eureka-angular-full-stack.jpg'
  }, {
    titulo: "ReactiveX - RxJs: De cero hasta los detalles",
    institucion: "Udemy",
    fechaInicio: "",
    fechaFin: "2022-04-17",
    certificacionUrl: "https://www.udemy.com/certificate/UC-c4490a71-ae86-48de-afa8-9dfd6d8b12d7/",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/ReactiveX-RxJs-De cero-hasta-los-detalles_tn.jpg'
  }, {
    titulo: "Full Stack: Angular and Java Spring Boot E-Commerce Website",
    institucion: "Udemy",
    fechaInicio: "",
    fechaFin: "2022-03-24",
    certificacionUrl: "https://www.udemy.com/certificate/UC-7fd4765f-a9da-40cc-94e9-28bd91d57664/",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/Full-Stack-Angular-and-Java-Spring Boot-E-Commerce-Website_tn.jpg'
  }, {
    titulo: "Javascript Desarrollador Avanzado",
    institucion: "Educacion IT",
    fechaInicio: "",
    fechaFin: "2022-01-05",
    certificacionUrl: "https://api.alumni.education/course/certificate/generate?hash=49573409-1092-4d27-b394-76abad260a46&format=pdf",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/Javascript-desarrollador-avanzado_tn.jpg'
  }, {
    titulo: "Programando con Java para aplicaciones Android",
    institucion: "Universidad Nacional Autónoma de México (Coursera)",
    fechaInicio: "2021-05-18",
    fechaFin: "2021-09-11",
    certificacionUrl: "https://www.coursera.org/account/accomplishments/certificate/99NWVU3UT93V",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
  }, {
    titulo: "Fundamentos de Android",
    institucion: "Universidad Nacional Autónoma de México (Coursera)",
    fechaInicio: "2021-05-18",
    fechaFin: "2021-07-12",
    certificacionUrl: "https://www.coursera.org/account/accomplishments/verify/MN6LWA5PM44V",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
  }, {
    titulo: "Java Advanced Programming: Threads, Networking, J2SE",
    institucion: "EducacionIT",
    fechaInicio: "2021-05-18",
    fechaFin: "2021-07-12",
    certificacionUrl: "https://api.alumni.education/course/certificate/generate?hash=150b02c8-086e-4af4-8e8e-db165031a29e&format=pdf",
    duracion: 0,
    thumbnails: '/assets/img/certs/thumbnails/educacionit.thumb.png'
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
  constructor() {}
  getCertifications() {
    return this.certifications;
  }
  static ɵfac = function CertificationsService_Factory(t) {
    return new (t || CertificationsService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CertificationsService,
    factory: CertificationsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9380:
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationService: () => (/* binding */ EducationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class EducationService {
  educations = [{
    titulo: "Associate Degree in Information Technology",
    institucion: "I.U.T José María Carreño - Miranda. Venezuela",
    fechaInicio: "2007-07-01",
    fechaFin: "2012-07-01",
    certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
    duracion: 0
  }];
  constructor() {}
  getEducation() {
    return this.educations;
  }
  static ɵfac = function EducationService_Factory(t) {
    return new (t || EducationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: EducationService,
    factory: EducationService.ɵfac
  });
}

/***/ }),

/***/ 6898:
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceService: () => (/* binding */ ExperienceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ExperienceService {
  experience = [{
    empresa: "Itaú Unibanco",
    puesto: "System Analyst",
    fechaIngreso: "2022-03-09",
    fechaEgreso: "",
    proyectos: [],
    resumenProyecto: `
            - Development a bank Teller application for daily bank operations.\n
            - Develop tools for test and debug the app.\n
            - Active participate in Scrum ceremonies, Code review and Pair Programing`,
    tecnologias: ["MS Sql", "Java 11", "SpringBoot2", "Angular13", "TypeScript3", "RxJs6"],
    web: "https://www.itau.com.ar/"
  }, {
    empresa: "BBVA",
    puesto: "System Analyst",
    fechaIngreso: "2021-06-21",
    fechaEgreso: "2022-03-07",
    proyectos: [],
    resumenProyecto: "Evolutive development and bug fixing for the home banking web app.",
    tecnologias: ["Java", "SpringMVC", "Angular", "Git"],
    web: "https://www.bbva.com.ar/"
  }, {
    empresa: "Globant",
    puesto: "Java Developer",
    fechaIngreso: "2020-10-05",
    fechaEgreso: "2021-06-14",
    proyectos: [{
      nombre: "Bimo (Prisma S.A)",
      resumenProyecto: "Build RESTful apis what consume third party apis and served data to the E-Wallet BIMO",
      tecnologias: ["Java", "SpringBoot", "SQLServer", "Jenkins", "Spock", "Git"]
    }],
    resumenProyecto: "",
    tecnologias: [],
    web: "https://www.globant.com/"
  }, {
    empresa: "IT Resources",
    puesto: "Java Developer",
    fechaIngreso: "2019-07-01",
    fechaEgreso: "2020-10-02",
    proyectos: [{
      nombre: "I+D - Kaiso App",
      resumenProyecto: "Develop web App with memory exercises aimed at people with cognitive disabilities",
      tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
    }, {
      nombre: "Legal Security",
      resumenProyecto: "Built internal tool using Spring MVC and jQuery to manage company surveillance system",
      tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
    }, {
      nombre: "Banco Santander",
      resumenProyecto: "Development and maintenance of the Santander Bank portal application",
      tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
    }],
    resumenProyecto: "",
    tecnologias: [],
    web: "https://www.itrsa.com.ar/"
  }, {
    empresa: "Eglam Argentina",
    puesto: "Programador Backend",
    fechaIngreso: "2019-02-01",
    fechaEgreso: "2019-07-01",
    proyectos: [],
    resumenProyecto: "Develop magento based applications, for example: dashboard reports, console applications, etc.",
    tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
    web: "https://www.glamit.com.ar/"
  }, {
    empresa: "Tecnosoftware S.A",
    puesto: "Programador Java",
    fechaIngreso: "2018-07-01",
    fechaEgreso: "2019-02-01",
    proyectos: [{
      nombre: "Banco Provincia",
      resumenProyecto: "Built and Maintained Home Banking Application, Communicating With Cross-Functional Teams Regarding Product and Design",
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
      resumenProyecto: "Collaborated with contact center team members to implement new UI. Using Spring MVC with Java7 and jQuery",
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
  getExperience() {
    return this.experience;
  }
  static ɵfac = function ExperienceService_Factory(t) {
    return new (t || ExperienceService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ExperienceService,
    factory: ExperienceService.ɵfac
  });
}

/***/ }),

/***/ 5140:
/*!************************************************!*\
  !*** ./src/app/services/habilities.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HabilitiesService: () => (/* binding */ HabilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HabilitiesService {
  java = {
    name: "Java",
    version: "11",
    icon: '../assets/img/pro-icon/java.svg'
  };
  virtualization = {
    name: "Virtualization",
    version: 0,
    icon: '../assets/img/pro-icon/cloud_icon.png'
  };
  android = {
    name: "Android",
    version: 0,
    icon: '../assets/img/pro-icon/android-original.svg'
  };
  javaScript = {
    name: "JavaScript",
    version: "ES6",
    icon: '../assets/img/pro-icon/javascript-original.svg'
  };
  php = {
    name: "PHP",
    version: 7,
    icon: '../assets/img/pro-icon/php-original.svg'
  };
  sql = {
    name: "SQL",
    version: 0,
    icon: '../assets/img/pro-icon/database_icon.png'
  };
  html = {
    name: "Html",
    version: 5,
    icon: '../assets/img/pro-icon/icons8-html-5-50.png'
  };
  css = {
    name: "Css",
    version: 3,
    icon: '../assets/img/pro-icon/css3-original.svg'
  };
  versionado = {
    name: "Versionado",
    version: 0,
    icon: '../assets/img/pro-icon/367559.svg'
  };
  habilities = [{
    language: this.java,
    frameworks: [{
      name: "Java",
      icon: '../assets/img/pro-icon/java.svg',
      version: 11,
      percent: 70
    }, {
      name: "SpringMVC",
      icon: '../assets/img/pro-icon/spring-original.svg',
      version: 5,
      percent: 65
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
      percent: 15
    }]
  }, {
    language: this.virtualization,
    frameworks: [{
      name: "Docker",
      icon: '../assets/img/pro-icon/docker.svg',
      version: 1.5,
      percent: 15
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
      percent: 40
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
      percent: 85
    }, {
      name: "ReactJS",
      icon: '../assets/img/pro-icon/reactjs-icon.svg',
      version: 16,
      percent: 15
    }, {
      name: "Angular",
      icon: '../assets/img/pro-icon/angularjs-original.svg',
      version: 13,
      percent: 65
    }, {
      name: "Angular Material",
      icon: '../assets/img/pro-icon/materialui-original.svg',
      version: 13,
      percent: 60
    }, {
      name: "Ionic",
      icon: '../assets/img/pro-icon/ionic-original.svg',
      version: 5,
      percent: 30
    }, {
      name: "Typescript",
      icon: '../assets/img/pro-icon/typescript.svg',
      version: 3,
      percent: 75
    }, {
      name: "RxJs",
      icon: '../assets/img/pro-icon/rxjslogo.com.svg',
      version: 7,
      percent: 25
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
    }]
  }];
  constructor() {}
  getHabilities() {
    return this.habilities;
  }
  static ɵfac = function HabilitiesService_Factory(t) {
    return new (t || HabilitiesService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HabilitiesService,
    factory: HabilitiesService.ɵfac
  });
}

/***/ }),

/***/ 3530:
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioService: () => (/* binding */ PortfolioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PortfolioService {
  proyects = [{
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
    name: "Galletas Dino",
    description: "Maqueta de portada de sitio para reconocida marca de galletas",
    imageUrl: "https://iili.io/w8fLNt.jpg",
    repoUrl: "",
    url: "https://jesuseduaardo.tech/portfolio/cancan/dino/",
    lenguajes: [{
      name: "HTML",
      version: "5",
      icon: ""
    }, {
      name: "CSS",
      version: "3",
      icon: ""
    }, {
      name: "Javascript",
      version: "ES6",
      icon: ""
    }],
    frameworks: [{
      name: "Bootstrap",
      version: 4.6,
      percent: 0,
      icon: ""
    }]
  }, {
    name: "Galletas Can Can",
    description: "Maqueta de portada de sitio para reconocida marca de galletas",
    imageUrl: "https://iili.io/w8ftxn.jpg",
    repoUrl: "",
    url: "https://jesuseduaardo.tech/portfolio/cancan/colorin/",
    lenguajes: [{
      name: "HTML",
      version: "5",
      icon: ""
    }, {
      name: "CSS",
      version: "3",
      icon: ""
    }, {
      name: "Javascript",
      version: "ES6",
      icon: ""
    }],
    frameworks: [{
      name: "Bootstrap",
      version: 4.6,
      percent: 0,
      icon: ""
    }]
  }, {
    name: "AsRemis",
    description: "Maqueta para empresa de servicios de transporte privado",
    imageUrl: "https://iili.io/w8frKv.jpg",
    repoUrl: "",
    url: "https://jesuseduaardo.tech/portfolio/asremis/",
    lenguajes: [{
      name: "HTML",
      version: "5",
      icon: ""
    }, {
      name: "CSS",
      version: "3",
      icon: ""
    }, {
      name: "Javascript",
      version: "ES6",
      icon: ""
    }],
    frameworks: [{
      name: "Bootstrap",
      version: 4.6,
      percent: 0,
      icon: ""
    }]
  }];
  constructor() {}
  getPortfolio() {
    return this.proyects;
  }
  static ɵfac = function PortfolioService_Factory(t) {
    return new (t || PortfolioService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PortfolioService,
    factory: PortfolioService.ɵfac
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBIRuR5tuF36EJjI6Z8Vfa0_eys8ZU0qew',
    authDomain: 'jesuseduaardo-cv.firebaseapp.com',
    databaseURL: 'https://jesuseduaardo-cv.firebaseio.com',
    projectId: 'jesuseduaardo-cv',
    storageBucket: 'jesuseduaardo-cv.appspot.com',
    messagingSenderId: '502720339040',
    appId: "1:502720339040:web:f7c133c797b59a82c37705"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9732:
/*!********************************!*\
  !*** ./src/route-animation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fader: () => (/* binding */ fader),
/* harmony export */   slider: () => (/* binding */ slider),
/* harmony export */   stepper: () => (/* binding */ stepper),
/* harmony export */   transformer: () => (/* binding */ transformer)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 7172);

// Basic
const fader = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%',
  opacity: 0,
  transform: 'scale(0) translateY(100%)'
})]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: 'scale(1) translateY(0)'
}))])])]);
// Positioned
const slider = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', slideTo('left')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', slideTo('right')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', slideTo('left')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', slideTo('right'))]);
const transformer = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', translateTo({
  x: -100,
  y: -100,
  rotate: -720
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', translateTo({
  x: 100,
  y: -100,
  rotate: 90
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', translateTo({
  x: -100,
  y: -100,
  rotate: 360
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', translateTo({
  x: 100,
  y: -100,
  rotate: -360
}))]);
function slideTo(direction) {
  const optional = {
    optional: true
  };
  return [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    position: 'absolute',
    top: 0,
    [direction]: 0,
    width: '100%'
  })], optional), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    [direction]: '-100%'
  })]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    [direction]: '100%'
  }))], optional), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    [direction]: '0%'
  }))])])
  // Normalize the page style... Might not be necessary
  // Required only if you have child animations on the page
  // query(':leave', animateChild()),
  // query(':enter', animateChild()),
  ];
}
function translateTo({
  x = 100,
  y = 0,
  rotate = 0
}) {
  const optional = {
    optional: true
  };
  return [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  })], optional), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
  })]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`
  }))], optional), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: `translate(0, 0) rotate(0)`
  }))])])];
}
// Keyframes
const stepper = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  left: 0,
  width: '100%'
})]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('2000ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(0) translateX(100%)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(0.5) translateX(25%)',
  offset: 0.3
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1) translateX(0%)',
  offset: 1
})]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('2000ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(0.5) translateX(-25%) rotate(0)',
  offset: 0.35
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'translateX(-50%) rotate(-180deg) scale(6)',
  offset: 1
})]))])])])]);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map