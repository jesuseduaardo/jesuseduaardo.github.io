"use strict";
(self["webpackChunkcv_app"] = self["webpackChunkcv_app"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../route-animation */ 6015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);





class AppComponent {
    constructor() {
        this.title = 'J. Eduardo CV online';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "main"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  width: 100%;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUtGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcbiAgICBAcmV0dXJuICMwMDA7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gI2ZmZjtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtbWQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLXhsIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9zY3NzL2NvbmZpZ1wiO1xuXG5hcHAtbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"], data: { animation: [
            _route_animation__WEBPACK_IMPORTED_MODULE_0__.fader,
            // slider,
            //transformer,
            //stepper
        ] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-typed-js */ 5809);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/birth-day.pipe */ 3315);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experience/experience.component */ 6228);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 3105);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/experience.service */ 8398);
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/education.service */ 9228);
/* harmony import */ var _services_habilities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/habilities.service */ 7435);
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/portfolio.service */ 890);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routes */ 8693);
/* harmony import */ var _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/skill/skill.component */ 1269);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/education/education.component */ 1954);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ 1656);
/* harmony import */ var _components_contact_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/contact/contact-item/contact-item.component */ 3648);
/* harmony import */ var _components_experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/experience/experience-item/experience-item.component */ 8927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 2816);

















//Servicios




//Rutas









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        _services_experience_service__WEBPACK_IMPORTED_MODULE_8__.ExperienceService,
        _services_education_service__WEBPACK_IMPORTED_MODULE_9__.EducationService,
        _services_habilities_service__WEBPACK_IMPORTED_MODULE_10__.HabilitiesService,
        _services_portfolio_service__WEBPACK_IMPORTED_MODULE_11__.PortfolioService
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule,
        _app_routes__WEBPACK_IMPORTED_MODULE_12__.app_routing] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _pipes_birth_day_pipe__WEBPACK_IMPORTED_MODULE_4__.BirthDayPipe,
        _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent,
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioComponent,
        _components_skill_skill_component__WEBPACK_IMPORTED_MODULE_13__.SkillComponent,
        _components_education_education_component__WEBPACK_IMPORTED_MODULE_14__.EducationComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__.FooterComponent,
        _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe,
        _components_contact_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_17__.ContactItemComponent,
        _components_experience_experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_18__.ExperienceItemComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_27__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterModule] }); })();


/***/ }),

/***/ 8693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app_routing": () => (/* binding */ app_routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience/experience.component */ 6228);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 3105);
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/education/education.component */ 1954);







const app_routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, data: { animation: 'isRight' } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, data: { animation: 'isLeft' } },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, data: { animation: 'isRight' } },
    { path: 'education', component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_5__.EducationComponent, data: { animation: 'isRight' } },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent, data: { animation: 'isLeft' } },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, data: { animation: 'isRight' } },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];
const app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(app_routes, { useHash: true });


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 32, vars: 0, consts: [[1, "about"], [1, "about__bio-image"], [1, "about__bio"], [1, "bio"], [1, "row"], [1, "col-12", "p-5"], ["target", "_blank", "href", "https://calendly.com/jesuseduaardo/45min"], [1, "pt-2"], [1, "col-12", "col-md-6", "text-center", "py-2"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.7)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  line-height: 1.5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.about__bio[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n\n.about__bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.about__bio[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  width: 80vw;\n  margin: 1rem auto 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  text-align: center;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n\n.about[_ngcontent-%COMP%]   .download_button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #272727;\n  background-color: #ff652f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FBREE7RUFDRSxvQkFBQTtBQUlGOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxSEFBQTtFQU1BLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHSTtFQUNFLG1CQUFBO0FBRE47O0FBSUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLTTtFQUNFLGNEaENVO0FDNkJsQjs7QUFPSTtFQUNFLG9CQUFBO0FBTE47O0FBU0U7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFRSTtFQUNFLGNEakRZO0FDMkNsQjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQU5OOztBQVNFO0VBQ0UscUJBQUE7RUFDQSxjRDNEWTtFQzREWix5QkQzRGM7QUNvRGxCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xuICAgIEByZXR1cm4gIzAwMDtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAjZmZmO1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEteGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuXG4gICZfX2Jpby1pbWFnZSB7XG4gICAgaGVpZ2h0OiA2MHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuOSksXG4gICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuNylcbiAgICAgICksXG4gICAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciB0b3A7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG4gIH1cbiAgJl9fYmlvIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGgyIHtcbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1zZWNvbmRhcnkge1xuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgfVxuICB9XG5cbiAgLmJpbyB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGg0e1xuICAgICAgY29sb3I6JHNlY29uZGFyeS1jb2xvclxuICAgIH1cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG4gIH1cbiAgLmRvd25sb2FkX2J1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6454:
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact-item.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactItem": () => (/* binding */ ContactItem)
/* harmony export */ });
class ContactItem {
    constructor(data, link, icon) {
        this.data = data;
        this.link = link;
        this.icon = icon;
    }
}


/***/ }),

/***/ 3648:
/*!***************************************************************************!*\
  !*** ./src/app/components/contact/contact-item/contact-item.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactItemComponent": () => (/* binding */ ContactItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactItemComponent {
    constructor() {
        this.contactItem = null;
    }
    ngOnInit() {
        this.data = this.contactItem.data;
        this.link = this.contactItem.link;
        this.icon = this.contactItem.icon;
    }
}
ContactItemComponent.ɵfac = function ContactItemComponent_Factory(t) { return new (t || ContactItemComponent)(); };
ContactItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactItemComponent, selectors: [["app-contact-item"]], inputs: { contactItem: "contactItem" }, decls: 4, vars: 4, consts: [["width", "50", 3, "src", "alt"], [1, "pt-3"], [3, "href"]], template: function ContactItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _contact_item_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-item.model */ 6454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-item/contact-item.component */ 3648);



class ContactComponent {
    constructor() { }
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
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 9, vars: 2, consts: [[1, "contact"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "col-md-6", "contact-data", 3, "contactItem"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-contact-item", 4)(8, "app-contact-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.whatsapp);
    } }, dependencies: [_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_1__.ContactItemComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.contact[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 5rem 0 4rem;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  padding: 0;\n  margin: 0;\n}\n\n.contact-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: center;\n  padding: 0.8rem 0;\n}\n\n.col-12[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 5rem;\n}\n\n@media (max-width: 600px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 4rem 0 2rem;\n  }\n  .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .col-12[_ngcontent-%COMP%]:first-of-type {\n    margin-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFJRjs7QUFIRTtFQUNFLGNETmM7QUNXbEI7O0FBSEU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0UsbUJBQUE7QUFLRjs7QUFGQTtFQUNFO0lBQ0Usb0JBQUE7RUFLRjtFQUpFO0lBQ0UsY0FBQTtFQU1KO0VBSkU7SUFDRSxnQkFBQTtFQU1KOztFQUhBO0lBQ0UscUJBQUE7RUFNRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XG4gICAgQHJldHVybiAjMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmY7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS14bCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcblxuLmNvbnRhY3Qge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA1cmVtIDAgNHJlbTtcbiAgaDF7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbiAgaDEsXG4gIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAmLWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC44cmVtIDA7XG4gIH1cbn1cbi5jb2wtMTI6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFjdCB7XG4gICAgcGFkZGluZzogNHJlbSAwIDJyZW07XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICB9XG4gIC5jb2wtMTI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1954:
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/education.service */ 9228);
/* harmony import */ var _services_certifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/certifications.service */ 3393);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);





function EducationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const educ_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](educ_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](educ_r2.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 3, educ_r2.fechaFin, "MMM-y"));
} }
function EducationComponent_div_16_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16)(1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cert_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cert_r3.duracion, " Hours");
} }
function EducationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const cert_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", cert_r3.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cert_r3.thumbnails, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", cert_r3.certificacionUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r3.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r3.institucion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cert_r3.duracion > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cert_r3.fechaFin);
} }
class EducationComponent {
    constructor(_educationService, _certificationService) {
        this._educationService = _educationService;
        this._certificationService = _certificationService;
        this.education = [];
        this.certifications = [];
    }
    ngOnInit() {
        this.education = this._educationService.getEducation();
        this.certifications = this._certificationService.getCertifications();
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_education_service__WEBPACK_IMPORTED_MODULE_0__.EducationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_certifications_service__WEBPACK_IMPORTED_MODULE_1__.CertificationsService)); };
EducationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 17, vars: 2, consts: [[1, "education"], [1, "container"], [1, "row"], [1, "col-12", "education-title"], [1, "col-12"], [1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "head-title", "mt-3"], ["aria-hidden", "false"], ["class", "card certs", 4, "ngFor", "ngForOf"], [1, "card"], [1, "row", "no-gutters"], [1, "col-md-12"], [1, "card-body", "p-1"], [1, "card-title", "my-0"], [1, "card-text", "my-0"], [1, "card-text"], [1, "text-muted"], [1, "card", "certs"], [1, "col-3", "align-self-center", "cert-container"], [1, "card-img", "cert", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", "title", "Ver Certificaci\u00F3n", 3, "href"], [1, "fas", "fa-eye"], [1, "col-9", "cert-title"], ["class", "card-text my-0", 4, "ngIf"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.certifications);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.education[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n\n.education-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.education-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #414141;\n  border-bottom: 5px solid #ff652f;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n\n.card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #dddddd !important;\n}\n\n.card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #878787;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.certs[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0 auto;\n}\n\n.certs[_ngcontent-%COMP%]:first-child {\n  margin: 0 auto;\n}\n\n.cert-title[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n@media screen and (min-width: 768px) {\n  .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding-bottom: 2px;\n  }\n  .card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n  .card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-bottom: 2px;\n  }\n\n  .cert-title[_ngcontent-%COMP%] {\n    align-self: baseline;\n    padding: 20px;\n  }\n\n  .certs[_ngcontent-%COMP%] {\n    margin: 0.5rem auto 0 auto;\n  }\n\n  .certs[_ngcontent-%COMP%]:first-child {\n    margin: 0 auto !important;\n  }\n\n  .education[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQURBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0FBSUY7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RiYztBQ2lCbEI7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQUdGOztBQURFO0VBQ0UsaUJBQUE7QUFHSjs7QUFESTtFQUNFLGVBQUE7QUFHTjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJEeENjO0FDeUNsQjs7QUFHSTtFQUNFLG9CQUFBO0FBRE47O0FBSUk7RUFDRSxZQUFBO0FBRk47O0FBS0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnQ0FBQTtFQUNBLGtCQUFBO0FBSE47O0FBT0U7RUFDRSx5QkFBQTtBQUxKOztBQVVFO0VBQ0UsZUFBQTtBQVBKOztBQVVFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFSSjs7QUFVSTtFQUNFLGVBQUE7QUFSTjs7QUFhQTtFQUNFLDBCQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBRDlERTtFQzZFRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQVhKO0VBYUU7SUFDRSwwQkFBQTtFQVhKO0VBYUU7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFYSjs7RUFlQTtJQUNFLG9CQUFBO0lBQ0EsYUFBQTtFQVpGOztFQWVBO0lBQ0UsMEJBQUE7RUFaRjs7RUFlQTtJQUNFLHlCQUFBO0VBWkY7O0VBZUE7SUFDRSxpQkFBQTtFQVpGO0FBQ0YiLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xuICAgIEByZXR1cm4gIzAwMDtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAjZmZmO1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEteGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5lZHVjYXRpb24ge1xuICB3aWR0aDogNzV2dztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZWR1Y2F0aW9uLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgLmNhcmQtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgfVxuXG4gIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICB9XG5cbiAgLmNlcnQtY29udGFpbmVyIHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciAub3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAudGV4dC1tdXRlZCB7XG4gICAgY29sb3I6ICNkZGRkZGQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzg3ODc4NztcblxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cblxuLmNlcnRzIHtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XG59XG5cbi5jZXJ0czpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2VydC10aXRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuQGluY2x1ZGUgbWVkaWEtbWQge1xuICAuY2FyZC1ib2R5IHtcbiAgICBoNSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5jZXJ0LXRpdGxlIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgLmNlcnRzIHtcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcbiAgfVxuXG4gIC5jZXJ0czpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5lZHVjYXRpb24ge1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8927:
/*!************************************************************************************!*\
  !*** ./src/app/components/experience/experience-item/experience-item.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceItemComponent": () => (/* binding */ ExperienceItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function ExperienceItemComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.experience.fechaEgreso, "MMM-y"));
} }
function ExperienceItemComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExperienceItemComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.experience.web, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.experience.web);
} }
function ExperienceItemComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Participation in ", ctx_r3.experience.proyectos.length, " projects ");
} }
class ExperienceItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExperienceItemComponent.ɵfac = function ExperienceItemComponent_Factory(t) { return new (t || ExperienceItemComponent)(); };
ExperienceItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceItemComponent, selectors: [["app-experience-item"]], inputs: { experience: "experience" }, decls: 16, vars: 10, consts: [[1, "company-and-date"], [1, "row"], [1, "col-12", "fecha-ingreso-egreso"], [4, "ngIf"], [1, "col-12", "info"], ["class", "company-link d-none d-md-block", 4, "ngIf"], ["class", "cant-exp", 4, "ngIf"], [1, "company-link", "d-none", "d-md-block"], ["target", "_blank", 3, "href"], [1, "cant-exp"]], template: function ExperienceItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceItemComponent_span_7_Template, 3, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceItemComponent_span_8_Template, 2, 0, "span", 3);
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, ctx.experience.fechaIngreso, "MMM-y"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.fechaEgreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.experience.fechaEgreso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.web);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experience.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.proyectos.length > 1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.company-and-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Montserrat\", sans-serif;\n  color: #fff;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #ff652f;\n}\n\n.company-and-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #c5c5c5;\n}\n\n.company-and-date[_ngcontent-%COMP%]   .chronology-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n@media screen and (min-width: 768px) {\n    .mat-expansion-indicator::after {\n    padding: 10px !important;\n    color: white;\n  }\n\n  .company-and-date[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .company-and-date[_ngcontent-%COMP%]   .fecha-ingreso-egreso[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n  .company-and-date[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiZXhwZXJpZW5jZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7QUFHRjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsY0RaYztBQ2VsQjs7QUFBRTtFQUNFLGdCQUFBO0FBRUo7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGNEckJhO0FDcUJqQjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQURKOztBREpFO0VDV0U7SUFDRSx3QkFBQTtJQUNBLFlBQUE7RUFISjs7RUFNQTtJQUNFLGlCQUFBO0VBSEY7RUFJRTtJQUNFLGlCQUFBO0VBRko7RUFJRTtJQUNFLGVBQUE7RUFGSjtFQUlFO0lBQ0UsaUJBQUE7RUFGSjtBQUNGIiwiZmlsZSI6ImV4cGVyaWVuY2UtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcbiAgICBAcmV0dXJuICMwMDA7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gI2ZmZjtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtbWQge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEtbGcge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLXhsIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xuXG5cbi5jb21wYW55LWFuZC1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG5cbiAgaDUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gIH1cblxuICBoNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogJHRlcmNpYXJ5LWNvbG9yO1xuICB9XG5cbiAgLmNocm9ub2xvZ3ktbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgOjpuZy1kZWVwIHtcbiAgICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgLmNvbXBhbnktYW5kLWRhdGV7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgaDV7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgLmZlY2hhLWluZ3Jlc28tZWdyZXNve1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"] });


/***/ }),

/***/ 6228:
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/experience.service */ 8398);
/* harmony import */ var _services_habilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/habilities.service */ 7435);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill/skill.component */ 1269);
/* harmony import */ var _experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-item/experience-item.component */ 8927);









function ExperienceComponent_mat_expansion_panel_14_div_4_li_5_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tecnologia_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", tecnologia_r8, " ");
} }
function ExperienceComponent_mat_expansion_panel_14_div_4_li_5_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const proyect_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r6.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", proyect_r6.tecnologias);
} }
function ExperienceComponent_mat_expansion_panel_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_14_div_4_li_5_Template, 11, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r2.proyectos);
} }
function ExperienceComponent_mat_expansion_panel_14_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tecnologia_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tecnologia_r11);
} }
function ExperienceComponent_mat_expansion_panel_14_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 23)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Skills used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExperienceComponent_mat_expansion_panel_14_div_5_li_7_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r2.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r2.tecnologias);
} }
function ExperienceComponent_mat_expansion_panel_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.panelOpenState); })("closed", function ExperienceComponent_mat_expansion_panel_14_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.panelOpenState); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel-header", 16)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-experience-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExperienceComponent_mat_expansion_panel_14_div_4_Template, 6, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_14_div_5_Template, 8, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapsedHeight", "150px")("expandedHeight", "150px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("experience", experience_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length == 0 && experience_r2.resumenProyecto.length);
} }
function ExperienceComponent_app_skill_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skill", 24);
} if (rf & 2) {
    const hability_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hability", hability_r16);
} }
class ExperienceComponent {
    constructor(_experienceService, _habilitiesService) {
        this._experienceService = _experienceService;
        this._habilitiesService = _habilitiesService;
        this.panelOpenState = true;
        this.experiences = [];
        this.habilities = [];
    }
    ngOnInit() {
        this.experiences = this._experienceService.getExperience();
        this.habilities = this._habilitiesService.getHabilities();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_0__.ExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_habilities_service__WEBPACK_IMPORTED_MODULE_1__.HabilitiesService)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 24, vars: 2, consts: [[1, "experience"], [1, "container"], [1, "row"], [1, "col-12", "experience-title"], [1, "col-12"], [1, "head-title", "mt-3"], ["aria-hidden", "false", "aria-label", "empleos"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stats"], ["class", "col-md-4 p-3", 3, "hability", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight", "expandedHeight"], [3, "experience"], ["class", "proyects-list", 4, "ngIf"], [4, "ngIf"], [1, "proyects-list"], [1, "proyects"], [4, "ngFor", "ngForOf"], [1, "tecnologies"], [1, "col-md-4", "p-3", 3, "hability"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.habilities);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _experience_item_experience_item_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceItemComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.fecha-ingreso-egreso[_ngcontent-%COMP%] {\n  flex-flow: row-reverse;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: auto;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0.75em 0 0.75em 0;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #414141;\n  color: #c5c5c5 !important;\n  border-bottom: 5px solid #ff652f;\n  margin-bottom: 1rem;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #ff652f !important;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  flex-direction: row;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n  line-height: 1.5rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #414141 !important;\n}\n\n.proyects[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.proyects[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.proyects[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.proyects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.proyects-list[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid #e6e6e6;\n  background: #f5f5f5;\n  padding: 10px;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.tecnologies[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  color: #fff;\n}\n\n.tecnologies[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: monospace;\n  margin: 2px;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.cert[_ngcontent-%COMP%] {\n  width: 95px;\n  margin: auto;\n  display: block;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 76%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.cant-exp[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: #a5a5a5;\n}\n\n.company-link[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-bottom: 5px !important;\n}\n\n.company-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 0;\n  color: #c5c5c5;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #414141;\n  margin-bottom: 4rem;\n  padding: 0.3rem 1rem 3rem;\n}\n\n@keyframes scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .experience[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUFEQTtFQUNFLHNCQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZFO0VBQ0UsbUJBQUE7QUFJSjs7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGhCWTtBQ29CbEI7O0FBREk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBR047O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTs7RUFFRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFDRSxvQ0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUU7RUFDRSxvQkFBQTtBQUZKOztBQUtFO0VBQ0UsY0RyRWM7QUNrRWxCOztBQU1FO0VBQ0UsZUFBQTtBQUpKOztBQVFBO0VBQ0UsY0Q3RWU7QUN3RWpCOztBQU9FO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTEo7O0FBUUU7RUFDRSxnQkFBQTtBQU5KOztBQVVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBUEY7O0FBU0U7RUFDRSxlQUFBO0FBUEo7O0FBVUU7RUFDRSxlQUFBO0FBUko7O0FBVUk7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUFSTjs7QUFhQTtFQUNFLGFBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0FBVkY7O0FBWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFWSjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVhGOztBQWNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBWEY7RUFjQTtJQUNFLG9CQUFBO0lBQ0EsdUJBQUE7RUFaRjtBQUNGOztBRGhJRTtFQ2dKQTtJQUNFLGlCQUFBO0VBYkY7QUFDRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xuICAgIEByZXR1cm4gIzAwMDtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAjZmZmO1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEteGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5mZWNoYS1pbmdyZXNvLWVncmVzbyB7XG4gIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbjogYXV0bztcblxuICAuZXhwZXJpZW5jZS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcblxuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG5cbiAgICBlbSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuaHIge1xuICBtYXJnaW46IDAuNzVlbSAwIDAuNzVlbSAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4gIGNvbG9yOiAkdGVyY2lhcnktY29sb3IgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIH1cbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKSAhaW1wb3J0YW50O1xufVxuXG4ucHJveWVjdHMge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgPmxpIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4ucHJveWVjdHMtbGlzdCB7XG4gIGNvbG9yOiAkdGVyY2lhcnktY29sb3I7XG5cbiAgPmxpIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgPmxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbn1cblxuLnRlY25vbG9naWVzIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICBsaSB7XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgbWFyZ2luOiAycHg7XG4gICAgfVxuICB9XG59XG5cbi5kYXRhLWNhcmQge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uY2VydCB7XG4gIHdpZHRoOiA5NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGZvbnQtc2l6ZTogNzYlO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY2FudC1leHAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjYTVhNWE1O1xufVxuXG4uY29tcGFueS1saW5rIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGNvbG9yOiAjYzVjNWM1O1xuICB9XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtIDNyZW07XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLW1kIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 1, consts: [[1, "social-icons"], ["href", "https://www.linkedin.com/in/jesuseduaardo/"], [1, "fab", "fa-linkedin", "fa-2x"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 Copyright ", ctx.currentYear, "");
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 0.5rem;\n}\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff652f;\n  padding: 0.4rem;\n}\n\nfooter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  bottom: 0.7rem;\n  right: 0.5rem;\n  text-align: right;\n  padding: 1rem;\n  color: #fff;\n  opacity: 0.5;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSUY7O0FBSEU7RUFDRSxjRFBjO0VDUWQsZUFBQTtBQUtKOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSUYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xuICAgIEByZXR1cm4gIzAwMDtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiAjZmZmO1xuICB9XG59XG5cbkBtaXhpbiBtZWRpYS1tZCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS1sZyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5AbWl4aW4gbWVkaWEteGwge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5zb2NpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMC41cmVtO1xuICBhIHtcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gIH1cbn1cblxuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3R0b206IDAuN3JlbTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG4gIG9wYWNpdHk6IC41O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-typed-js */ 5809);


const _c0 = function () { return ["Backend Developer", "Frontend Developer", "FullStack Developer^5000"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 5, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md", "info"], [3, "strings", "typeSpeed", "backSpeed", "loop"], [1, "typing"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "J. Eduardo Castillo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-typed-js", 4)(7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("typeSpeed", 100)("backSpeed", 100)("loop", true);
    } }, dependencies: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__.NgxTypedJsComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  align-items: center;\n  text-align: center;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('_-_-_-_-assets-img-perfil_pic.jpg') center top;\n  background-size: cover;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 60vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  padding: 2rem;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n    align-items: center;\n    text-align: center;\n    background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('_-_-_-_-assets-img-perfil_pic.jpg') center 0rem;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwiaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SUFBQTtFQU1BLHNCQUFBO0FBREY7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFFSTtFQUNFLGNEdEJZO0FDc0JsQjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBQU47O0FBQ007RUFDRSxjRDVCVTtBQzZCbEI7O0FEUEU7RUNhQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx5SUFBQTtJQU1BLHNCQUFBO0lBQ0EsNEJBQUE7RUFQRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XG4gICAgQHJldHVybiAjMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmY7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS14bCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC45KSxcbiAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuMylcbiAgICApLFxuICAgIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsX3BpYy5qcGdcIikgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAuaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDYwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLnR5cGluZyB7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcbiAgICB9XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1tZCB7XG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC45KSxcbiAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC4zKVxuICAgICAgKSxcbiAgICAgIHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyZmlsX3BpYy5qcGdcIikgY2VudGVyIDByZW07XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a0) { return { "open": a0 }; };
const _c1 = function () { return ["home"]; };
const _c2 = function () { return ["about"]; };
const _c3 = function () { return ["experience"]; };
const _c4 = function () { return ["education"]; };
const _c5 = function () { return ["contact"]; };
class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.showMenu = false;
    }
    ngOnInit() {
    }
    navigate(url) {
        this.router.navigate([`/${url}`]);
    }
    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 37, consts: [[1, "menu-btn", 3, "ngClass", "click"], [1, "menu-btn__burger", 3, "ngClass"], [1, "nav", 3, "ngClass"], [1, "menu-nav", 3, "ngClass", "click"], [1, "menu-nav__item", 3, "ngClass"], ["href", "#", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "contact.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2)(3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_ul_click_3_listener() { return ctx.toggleMenu(); });
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
    } if (rf & 2) {
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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v98/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n.main[_ngcontent-%COMP%] {\n  padding-bottom: 4rem !important;\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\nbody[_ngcontent-%COMP%] {\n  background: #272727;\n  color: #fff;\n  height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n  text-decoration: none;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  transition: all 0.5s ease-in-out;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\napp-skill[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  color: #fff;\n  background-color: #383838;\n  box-shadow: 5px 6px 1px #333;\n}\n.head-title[_ngcontent-%COMP%] {\n  background-color: #ff652f;\n  padding: 0.3em !important;\n  text-align: center;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 1rem;\n  top: 1rem;\n  height: 20px;\n  width: 28px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%] {\n  transform: rotate(720deg);\n  background: transparent;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) translate(5px, 8px);\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg) translate(3px, -7px);\n}\n.nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  opacity: 0.98;\n  visibility: hidden;\n}\n.nav.open[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background: #272727;\n  list-style-type: none;\n  transform: translateY(-100%);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100vw);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 2rem 0;\n  font-weight: 300;\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link.active[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2392156863);\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  z-index: -1;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.25s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.35s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.45s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 0.55s;\n}\n@media screen and (min-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(0);\n    height: 100%;\n    background: transparent;\n    text-align: center;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 1.5rem;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiLi4vLi4vLi4vc2Nzcy9fY29uZmlnLnNjc3MiLCJuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUNJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGRjtBRkRBLGFBQUE7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBHQUFBO0FFSUY7QUZGQTtFQUNFLCtCQUFBO0FFSUY7QUZGQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0FFS0Y7QUZGQTtFQUNFLG1CQy9CYztFRGdDZCxXQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtBRUtGO0FGRkE7OztFQUdFLGdCQUFBO0FFS0Y7QUZGQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBRUtGO0FGSkU7RUFDRSxjQy9DYztFRGdEZCxxQkFBQTtBRU1KO0FGRkE7RUFDSSxjQ3JEYztBQzBEbEI7QUZGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FFS0Y7QUZIRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRUtKO0FGSEk7RUFDRSxlQUFBO0VDeERKLGdDQUFBO0FDOERGO0FGSk07RUFDRSxjQ3JFVTtBQzJFbEI7QUZBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FFR0Y7QUZBQTtFQUNFLHlCQ3RGZ0I7RUR1RmhCLHlCQUFBO0VBQ0Esa0JBQUE7QUVHRjtBQTFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VERUEsZ0NBQUE7QUM0RkY7QUEzRkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFRFBGLGdDQUFBO0FDcUdGO0FBM0ZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RURoQkosZ0NBQUE7QUM4R0Y7QUExRkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFRDFCSixnQ0FBQTtBQ3VIRjtBQXpGSTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUEyRk47QUF6Rk07RUFDRSw0Q0FBQTtBQTJGUjtBQXpGTTtFQUNFLDhDQUFBO0FBMkZSO0FBckZBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF3RkY7QUF0RkU7RUFDRSxtQkFBQTtBQXdGSjtBQXJGRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJEM0VZO0VDNEVaLHFCQUFBO0VBQ0EsNEJBQUE7RURsRUYsZ0NBQUE7QUMwSkY7QUFyRkk7RUFDRSx3QkFBQTtBQXVGTjtBQXBGSTtFQUNFLDRCQUFBO0VEMUVKLGdDQUFBO0FDaUtGO0FBcEZNO0VBQ0Usd0JBQUE7QUFzRlI7QUFsRkk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFRHZGSixnQ0FBQTtBQzRLRjtBQWxGTTtFQUNFLGNEckdVO0FDeUxsQjtBQWpGTTtFQUNFLGNEekdVO0FDNExsQjtBQWhGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQWtGTjtBQTVFRTtFQUNFLHVCQUFBO0FBK0VKO0FBaEZFO0VBQ0UsdUJBQUE7QUFtRko7QUFwRkU7RUFDRSx1QkFBQTtBQXVGSjtBQXhGRTtFQUNFLHVCQUFBO0FBMkZKO0FEbk1FO0VDNkdBO0lBQ0Usa0JBQUE7RUEwRkY7O0VBdkZBO0lBQ0UsbUJBQUE7RUEwRkY7RUF4RkU7SUFDRSxjQUFBO0lBQ0Esd0JBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtFQTBGSjtFQXhGSTtJQUNFLGVBQUE7SUFDQSxxQkFBQTtFQTBGTjtFQXZGSTtJQUNFLGlCQUFBO0VBeUZOO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIi4vc2Nzcy9jb25maWdcIjtcbkBpbXBvcnQgXCIuL3Njc3MvcmVzcG9uc2l2ZVwiO1xuXG4vKiBmYWxsYmFjayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3Y5OC9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG59XG4ubWFpbntcbiAgcGFkZGluZy1ib3R0b206IDRyZW0gIWltcG9ydGFudDtcbn1cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hIHtcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAmOmhvdmVye1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4udGV4dC1zZWNvbmRhcnl7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5zb2NpYWwtaWNvbnMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFyZW07XG4gICAgbGVmdDogMXJlbTtcblxuICAgIGEge1xuICAgICAgcGFkZGluZzogMC40cmVtO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5hcHAtc2tpbGx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XG4gIGJveC1zaGFkb3c6IDVweCA2cHggMXB4ICMzMzM7XG59XG5cbi5oZWFkLXRpdGxle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICBwYWRkaW5nOiAwLjNlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XG4gICAgQHJldHVybiAjMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmY7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS14bCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLm1lbnUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICByaWdodDogMXJlbTtcbiAgdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tZWFzZTtcblxuICAmX19idXJnZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDAuNXJlbTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC04cHg7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDhweCk7XG4gICAgICB9XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDNweCwgLTdweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvcGFjaXR5OiAwLjk4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgJi5vcGVuIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1lbnUtbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xuXG4gICAgJi5vcGVuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDB2dyk7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XG5cbiAgICAgICYub3BlbiB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XG4gICAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gIH1cbn1cblxuQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA0IHtcbiAgLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgjeyRpfSkge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6ICgkaSAqIDAuMXMpKyAwLjE1cztcbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1tZCB7XG4gIC5tZW51LWJ0biB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLm5hdiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgIC5tZW51LW5hdiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgICZfX2xpbmsge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3105:
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/portfolio.service */ 890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);




function PortfolioComponent_mat_card_9_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", lang_r4.name, " ", lang_r4.version, "");
} }
function PortfolioComponent_mat_card_9_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frame_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", frame_r5.name, " ", frame_r5.version, "");
} }
function PortfolioComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const proyect_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyect_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", proyect_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", proyect_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proyect_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", proyect_r1.lenguajes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", proyect_r1.frameworks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", proyect_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class PortfolioComponent {
    constructor(_portafolioService) {
        this._portafolioService = _portafolioService;
        this.portfolio = [];
    }
    ngOnInit() {
        this.portfolio = this._portafolioService.getPortfolio();
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_0__.PortfolioService)); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 10, vars: 1, consts: [[1, "portfolio"], [1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], ["class", "card mx-auto my-2", 4, "ngFor", "ngForOf"], [1, "card", "mx-auto", "my-2"], ["mat-card-image", "", 3, "src", "alt"], ["class", "badge badge-primary mx-1", 4, "ngFor", "ngForOf"], ["class", "badge badge-success mx-1", 4, "ngFor", "ngForOf"], [1, "actions"], ["target", "_blank", 3, "href"], [1, "badge", "badge-primary", "mx-1"], [1, "badge", "badge-success", "mx-1"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "My Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Una muestra de proyectos que llevo a cabo en mi tiempo libre con nuevas tecnolog\u00EDas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PortfolioComponent_mat_card_9_Template, 17, 7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.portfolio);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  padding: 6rem 3rem;\n}\n\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  margin-bottom: 25px;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 250px;\n  padding: 0.9rem;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.3rem;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #060606;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n  color: #060606;\n  margin: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNEUmM7QUNhbEI7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFKRTtFQUNFLG1CQUFBO0FBTUo7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUZBO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBS0Y7O0FBSkU7RUFDRSxjQUFBO0FBTUo7O0FBTEk7RUFDRSxjQUFBO0FBT047O0FBRkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XG4gICAgQHJldHVybiAjMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmY7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS14bCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcblxuLnBvcnRmb2xpbyB7XG4gIHBhZGRpbmc6IDZyZW0gM3JlbTtcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbn1cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMC45cmVtO1xuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4zcmVtO1xuICB9XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhIHtcbiAgICBjb2xvcjogIzNkM2QzZDtcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6ICMwNjA2MDY7XG4gICAgfVxuICB9XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgY29sb3I6ICMwNjA2MDY7XG4gIG1hcmdpbjogMC4ycmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 1269:
/*!*****************************************************!*\
  !*** ./src/app/components/skill/skill.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillComponent": () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SkillComponent_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("v.", ctx_r0.hability.language.version, "");
} }
function SkillComponent_div_5_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const framework_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" v.", framework_r2.version, "");
} }
const _c0 = function (a0) { return { "width": a0 }; };
function SkillComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5)(3, "div", 6)(4, "p")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillComponent_div_5_span_7_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const framework_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", framework_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", framework_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", framework_r2.name + " v." + framework_r2.version + " = " + framework_r2.percent + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, framework_r2.percent + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](framework_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", framework_r2.version !== 0);
} }
class SkillComponent {
    constructor() {
        this.tooltipPosition = 'above';
    }
    ngOnInit() {
    }
}
SkillComponent.ɵfac = function SkillComponent_Factory(t) { return new (t || SkillComponent)(); };
SkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillComponent, selectors: [["app-skill"]], inputs: { hability: "hability" }, decls: 6, vars: 5, consts: [[1, "hability-title"], [1, "img-thumbnail", 3, "src", "alt"], [4, "ngIf"], ["class", "framework-info", 4, "ngFor", "ngForOf"], [1, "framework-info"], [1, "progress", "my-1"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 3, "ngStyle", "title"]], template: function SkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillComponent_small_4_Template, 2, 1, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillComponent_div_5_Template, 8, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.hability.language.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.hability.language.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hability.language.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hability.language.version !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hability.frameworks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.stats[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.hability-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 0.5rem auto 0rem auto;\n}\n\n.hability-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.hability-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n  border: none;\n}\n\n.framework-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  width: 100%;\n}\n\n.framework-info[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.framework-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  border: none;\n}\n\n.tooltipInfo[_ngcontent-%COMP%] {\n  background-color: #03a2ff;\n  position: relative;\n  top: 20px;\n  left: 50%;\n  font-size: 14px;\n}\n\n.info-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 89%;\n  font-size: 28px;\n  font-style: italic;\n  font-family: \"Krona One\", sans-serif;\n}\n\n.progress-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 3;\n  margin-bottom: 0;\n  color: #414141;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 0 10px;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Njc3MvX2NvbmZpZy5zY3NzIiwic2tpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUhFO0VBQ0UsU0FBQTtBQUtKOztBQURBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSUY7O0FBRkU7RUFDRSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSUY7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBS0o7O0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtKOztBQURBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUFLRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0YiLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XG4gICAgQHJldHVybiAjMDAwO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuICNmZmY7XG4gIH1cbn1cblxuQG1peGluIG1lZGlhLW1kIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuQG1peGluIG1lZGlhLWxnIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbkBtaXhpbiBtZWRpYS14bCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcblxuLnN0YXRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5oYWJpbGl0eS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvIDByZW0gYXV0bztcblxuICBoNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuLmZyYW1ld29yay1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAucHJvZ3Jlc3Mge1xuICAgIGhlaWdodDogNHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbiAgfVxuICBpbWcge1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuXG4udG9vbHRpcEluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhMmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW5mby1wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4OSU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnByb2dyZXNzLWJhciBwIHtcbiAgei1pbmRleDogMztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG59XG5cbmkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ 3315:
/*!*****************************************!*\
  !*** ./src/app/pipes/birth-day.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BirthDayPipe": () => (/* binding */ BirthDayPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}
BirthDayPipe.ɵfac = function BirthDayPipe_Factory(t) { return new (t || BirthDayPipe)(); };
BirthDayPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "birthDay", type: BirthDayPipe, pure: true });


/***/ }),

/***/ 1656:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });


/***/ }),

/***/ 3393:
/*!****************************************************!*\
  !*** ./src/app/services/certifications.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationsService": () => (/* binding */ CertificationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CertificationsService {
    constructor() {
        this.certifications = [
            {
                titulo: "Especializacion en React",
                institucion: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
                fechaInicio: "",
                fechaFin: "2023-07",
                certificacionUrl: "https://drive.google.com/file/d/1sGARFiKQyTmN3eVHlAIDjgFdJi-4AoHF/view",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/especializacion-en-react-codo-a-codo.jpg'
            },
            {
                titulo: "Docker Mastery: with Kubernetes+Swarm from a Docker Captain",
                institucion: "Udemy",
                fechaInicio: "",
                fechaFin: "2023-05-05",
                certificacionUrl: "https://www.udemy.com/certificate/UC-dba836d8-3518-481c-a11d-6ba9f27a0210/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/docker-mastery-with-kubernetes+swarm-from-docker-captain.jpg'
            },
            {
                titulo: "Microservicios Spring Cloud Eureka & Angular Full-stack",
                institucion: "Udemy",
                fechaInicio: "",
                fechaFin: "2022-09-11",
                certificacionUrl: "https://www.udemy.com/certificate/UC-3490da41-2672-4c0d-b2b5-7c30dfb34657/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/microservicios-spring-cloud-eureka-angular-full-stack.jpg'
            },
            {
                titulo: "ReactiveX - RxJs: De cero hasta los detalles",
                institucion: "Udemy",
                fechaInicio: "",
                fechaFin: "2022-04-17",
                certificacionUrl: "https://www.udemy.com/certificate/UC-c4490a71-ae86-48de-afa8-9dfd6d8b12d7/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/ReactiveX-RxJs-De cero-hasta-los-detalles_tn.jpg'
            },
            {
                titulo: "Full Stack: Angular and Java Spring Boot E-Commerce Website",
                institucion: "Udemy",
                fechaInicio: "",
                fechaFin: "2022-03-24",
                certificacionUrl: "https://www.udemy.com/certificate/UC-7fd4765f-a9da-40cc-94e9-28bd91d57664/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/Full-Stack-Angular-and-Java-Spring Boot-E-Commerce-Website_tn.jpg'
            },
            {
                titulo: "Javascript Desarrollador Avanzado",
                institucion: "Educacion IT",
                fechaInicio: "",
                fechaFin: "2022-01-05",
                certificacionUrl: "https://api.alumni.education/course/certificate/generate?hash=49573409-1092-4d27-b394-76abad260a46&format=pdf",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/Javascript-desarrollador-avanzado_tn.jpg'
            },
            {
                titulo: "Programando con Java para aplicaciones Android",
                institucion: "Universidad Nacional Autónoma de México (Coursera)",
                fechaInicio: "2021-05-18",
                fechaFin: "2021-09-11",
                certificacionUrl: "https://www.coursera.org/account/accomplishments/certificate/99NWVU3UT93V",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
            },
            {
                titulo: "Fundamentos de Android",
                institucion: "Universidad Nacional Autónoma de México (Coursera)",
                fechaInicio: "2021-05-18",
                fechaFin: "2021-07-12",
                certificacionUrl: "https://www.coursera.org/account/accomplishments/verify/MN6LWA5PM44V",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/fundamentos-android-coursera.thumb.png'
            },
            {
                titulo: "Java Advanced Programming: Threads, Networking, J2SE",
                institucion: "EducacionIT",
                fechaInicio: "2021-05-18",
                fechaFin: "2021-07-12",
                certificacionUrl: "https://api.alumni.education/course/certificate/generate?hash=150b02c8-086e-4af4-8e8e-db165031a29e&format=pdf",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/educacionit.thumb.png'
            },
            {
                titulo: "Liquibase Fundamentals Certification",
                institucion: "Liquibase University",
                fechaInicio: "2020-12-18",
                fechaFin: "2021-02-12",
                certificacionUrl: "https://www.credential.net/28060f9f-ebd1-4eea-a916-c5aaf81b67ef#gs.ta2u98",
                duracion: 0,
                thumbnails: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/28715111'
            },
            {
                titulo: "Programación Reactiva con Spring Boot 2 y Spring WebFlux",
                institucion: "Udemy",
                fechaInicio: "2020-12-18",
                fechaFin: "2021-01-01",
                certificacionUrl: "https://www.udemy.com/certificate/UC-e70f78d5-6756-4af2-8473-d80d15b668ba/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/programacion-reactiva-springboot.thumb.png'
            },
            {
                titulo: "Apache Kafka con Java, Spring framework y AWS",
                institucion: "Udemy",
                fechaInicio: "2020-10-18",
                fechaFin: "2020-10-24",
                certificacionUrl: "https://www.udemy.com/certificate/UC-a78a1a84-0acc-47c9-8ae7-a458c1e67a95/",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/kafka-java-spring-aws.thumb.png'
            },
            {
                titulo: "Angular (Basic) ",
                institucion: "HackerRank",
                fechaInicio: "2020-06-01",
                fechaFin: "2020-06-01",
                certificacionUrl: "https://www.hackerrank.com/certificates/bddba66b1683",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/hackerrank-angular(basic).thumb.png'
            },
            {
                titulo: "React (Basic) ",
                institucion: "HackerRank",
                fechaInicio: "2020-06-01",
                fechaFin: "2020-06-01",
                certificacionUrl: "https://www.hackerrank.com/certificates/86772c3ab8a4",
                duracion: 0,
                thumbnails: '/assets/img/certs/thumbnails/hackerrank-react(basic).thumb.png'
            },
            {
                titulo: "JavaScript Algorithms and Data Structures",
                institucion: "FreeCodeCamp.org",
                fechaInicio: "2020-05-01",
                fechaFin: "2020-05-01",
                certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/javascript-algorithms-and-data-structures",
                duracion: 300,
                thumbnails: '/assets/img/certs/thumbnails/fcc-javascript_algorithms.thumb.png'
            },
            {
                titulo: "Responsive Web Desing",
                institucion: "FreeCodeCamp.org",
                fechaInicio: "2018-01-01",
                fechaFin: "2018-08-01",
                certificacionUrl: "https://www.freecodecamp.org/certification/jesuseduaardo/responsive-web-design",
                duracion: 300,
                thumbnails: '/assets/img/certs/thumbnails/fcc-resposive_web_design.thumb.png'
            },
            {
                titulo: "ReactJS",
                institucion: "Educacion IT",
                fechaInicio: "2018-07-25",
                fechaFin: "2018-08-25",
                certificacionUrl: "https://alumni.education/user/diploma/codigo_diplo/191544/id_diploma/32403NI2R999E98J4314U5351VX4J4NF/",
                duracion: 15,
                thumbnails: '/assets/img/certs/thumbnails/educacionit-reactjs.thumb.png'
            }
        ];
    }
    getCertifications() {
        return this.certifications;
    }
}
CertificationsService.ɵfac = function CertificationsService_Factory(t) { return new (t || CertificationsService)(); };
CertificationsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CertificationsService, factory: CertificationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9228:
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationService": () => (/* binding */ EducationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EducationService {
    constructor() {
        this.educations = [
            {
                titulo: "Associate Degree in Information Technology",
                institucion: "I.U.T José María Carreño - Miranda. Venezuela",
                fechaInicio: "2007-07-01",
                fechaFin: "2012-07-01",
                certificacionUrl: "https://drive.google.com/open?id=0B_kPEZBn5CtldlYzTzBLOVpmRU0",
                duracion: 0
            },
        ];
    }
    getEducation() {
        return this.educations;
    }
}
EducationService.ɵfac = function EducationService_Factory(t) { return new (t || EducationService)(); };
EducationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EducationService, factory: EducationService.ɵfac });


/***/ }),

/***/ 8398:
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceService": () => (/* binding */ ExperienceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ExperienceService {
    constructor() {
        this.experience = [
            {
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
            },
            {
                empresa: "BBVA",
                puesto: "System Analyst",
                fechaIngreso: "2021-06-21",
                fechaEgreso: "2022-03-07",
                proyectos: [],
                resumenProyecto: "Evolutive development and bug fixing for the home banking web app.",
                tecnologias: ["Java", "SpringMVC", "Angular", "Git"],
                web: "https://www.bbva.com.ar/"
            },
            {
                empresa: "Globant",
                puesto: "Java Developer",
                fechaIngreso: "2020-10-05",
                fechaEgreso: "2021-06-14",
                proyectos: [
                    {
                        nombre: "Bimo (Prisma S.A)",
                        resumenProyecto: "Build RESTful apis what consume third party apis and served data to the E-Wallet BIMO",
                        tecnologias: ["Java", "SpringBoot", "SQLServer", "Jenkins", "Spock", "Git"]
                    }
                ],
                resumenProyecto: "",
                tecnologias: [],
                web: "https://www.globant.com/"
            },
            {
                empresa: "IT Resources",
                puesto: "Java Developer",
                fechaIngreso: "2019-07-01",
                fechaEgreso: "2020-10-02",
                proyectos: [
                    {
                        nombre: "I+D - Kaiso App",
                        resumenProyecto: "Develop web App with memory exercises aimed at people with cognitive disabilities",
                        tecnologias: ["Microsoft Azure Cognitive Services Face service", "JavaEE", "JHipster", "SpringBoot", "MySql", "Bootstrap4", "Angular9", "Git"]
                    },
                    {
                        nombre: "Legal Security",
                        resumenProyecto: "Built internal tool using Spring MVC and jQuery to manage company surveillance system",
                        tecnologias: ["JavaEE", "SpringMVC", "MySql", "Bootstrap3", "Javascript/jQuery", "Git/SVN"]
                    },
                    {
                        nombre: "Banco Santander",
                        resumenProyecto: "Development and maintenance of the Santander Bank portal application",
                        tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "jQuery", "Git/SVN"]
                    }
                ],
                resumenProyecto: "",
                tecnologias: [],
                web: "https://www.itrsa.com.ar/"
            },
            {
                empresa: "Eglam Argentina",
                puesto: "Programador Backend",
                fechaIngreso: "2019-02-01",
                fechaEgreso: "2019-07-01",
                proyectos: [],
                resumenProyecto: "Develop magento based applications, for example: dashboard reports, console applications, etc.",
                tecnologias: ["PHP5", "Magento", "MySql", "Javascript/jQuery", "Git/SVN"],
                web: "https://www.glamit.com.ar/"
            },
            {
                empresa: "Tecnosoftware S.A",
                puesto: "Programador Java",
                fechaIngreso: "2018-07-01",
                fechaEgreso: "2019-02-01",
                proyectos: [
                    {
                        nombre: "Banco Provincia",
                        resumenProyecto: "Built and Maintained Home Banking Application, Communicating With Cross-Functional Teams Regarding Product and Design",
                        tecnologias: ["JavaEE", "SpringMVC", "OracleDB", "Javascript/jQuery", "Git/SVN"]
                    }
                ],
                resumenProyecto: "",
                tecnologias: [],
                web: "https://www.tecnosoftware.com/"
            },
            {
                empresa: "Arkiteck C.A",
                puesto: "Analista de Sistemas 3",
                fechaIngreso: "2017-11-01",
                fechaEgreso: "2018-02-01",
                proyectos: [
                    {
                        nombre: "Banco BBVA Provincial (Venezuela)",
                        resumenProyecto: "Collaborated with contact center team members to implement new UI. Using Spring MVC with Java7 and jQuery",
                        tecnologias: ["JavaEE", "SpringMVC", "Bootstrap3", "Javascript/jQuery", "Git"]
                    }
                ],
                resumenProyecto: "",
                tecnologias: [],
                web: "http://www.arkiteck.net/"
            },
            {
                empresa: "La Victoria 3021 R.L (Venezuela)",
                puesto: "Web Developer",
                fechaIngreso: "2013-10-01",
                fechaEgreso: "2017-11-01",
                proyectos: [],
                resumenProyecto: "Desarrollo de sitios/aplicaciones web tanto en frontend y backend siguiendo las exigencias de cada proyecto",
                tecnologias: ["PHP5", "Codeigniter", "MySql", "Bootstrap3", "Javascript/jQuery", "Git"]
            },
        ];
    }
    getExperience() {
        return this.experience;
    }
}
ExperienceService.ɵfac = function ExperienceService_Factory(t) { return new (t || ExperienceService)(); };
ExperienceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExperienceService, factory: ExperienceService.ɵfac });


/***/ }),

/***/ 7435:
/*!************************************************!*\
  !*** ./src/app/services/habilities.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HabilitiesService": () => (/* binding */ HabilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HabilitiesService {
    constructor() {
        this.java = { name: "Java", version: "11", icon: '../assets/img/pro-icon/java.svg' };
        this.virtualization = { name: "Virtualization", version: 0, icon: '../assets/img/pro-icon/cloud_icon.png' };
        this.android = { name: "Android", version: 0, icon: '../assets/img/pro-icon/android-original.svg' };
        this.javaScript = { name: "JavaScript", version: "ES6", icon: '../assets/img/pro-icon/javascript-original.svg' };
        this.php = { name: "PHP", version: 7, icon: '../assets/img/pro-icon/php-original.svg' };
        this.sql = { name: "SQL", version: 0, icon: '../assets/img/pro-icon/database_icon.png' };
        this.html = { name: "Html", version: 5, icon: '../assets/img/pro-icon/icons8-html-5-50.png' };
        this.css = { name: "Css", version: 3, icon: '../assets/img/pro-icon/css3-original.svg' };
        this.versionado = { name: "Versionado", version: 0, icon: '../assets/img/pro-icon/367559.svg' };
        this.habilities = [
            {
                language: this.java,
                frameworks: [
                    {
                        name: "Java",
                        icon: '../assets/img/pro-icon/java.svg',
                        version: 11,
                        percent: 70
                    },
                    {
                        name: "SpringMVC",
                        icon: '../assets/img/pro-icon/spring-original.svg',
                        version: 5,
                        percent: 65
                    },
                    {
                        name: "SpringBoot",
                        icon: '../assets/img/pro-icon/spring-original.svg',
                        version: 2,
                        percent: 65
                    },
                    {
                        name: "JPA/Hibernate",
                        icon: '../assets/img/pro-icon/hibernate.svg',
                        version: 0,
                        percent: 40
                    },
                ]
            },
            {
                language: this.android,
                frameworks: [
                    {
                        name: "Kotlin",
                        icon: '../assets/img/pro-icon/kotlin-original.svg',
                        version: 1.5,
                        percent: 15
                    }
                ]
            },
            {
                language: this.virtualization,
                frameworks: [
                    {
                        name: "Docker",
                        icon: '../assets/img/pro-icon/docker.svg',
                        version: 1.5,
                        percent: 15
                    }
                ]
            },
            {
                language: this.sql,
                frameworks: [
                    {
                        name: "MySql",
                        icon: '../assets/img/pro-icon/mysql-original.svg',
                        version: 0,
                        percent: 60
                    },
                    {
                        name: "MS SQL",
                        icon: '../assets/img/pro-icon/microsoft-sql-server.svg',
                        version: 0,
                        percent: 40
                    },
                    {
                        name: "PL/SQL",
                        icon: '../assets/img/pro-icon/oracle-original.svg',
                        version: 0,
                        percent: 26
                    }
                ]
            },
            {
                language: this.javaScript,
                frameworks: [
                    {
                        name: "Javascript",
                        icon: '../assets/img/pro-icon/javascript-original.svg',
                        version: 6,
                        percent: 85
                    },
                    {
                        name: "ReactJS",
                        icon: '../assets/img/pro-icon/reactjs-icon.svg',
                        version: 16,
                        percent: 15
                    },
                    {
                        name: "Angular",
                        icon: '../assets/img/pro-icon/angularjs-original.svg',
                        version: 13,
                        percent: 65
                    },
                    {
                        name: "Angular Material",
                        icon: '../assets/img/pro-icon/materialui-original.svg',
                        version: 13,
                        percent: 60
                    },
                    {
                        name: "Ionic",
                        icon: '../assets/img/pro-icon/ionic-original.svg',
                        version: 5,
                        percent: 30
                    },
                    {
                        name: "Typescript",
                        icon: '../assets/img/pro-icon/typescript.svg',
                        version: 3,
                        percent: 75
                    },
                    {
                        name: "RxJs",
                        icon: '../assets/img/pro-icon/rxjslogo.com.svg',
                        version: 7,
                        percent: 25
                    }
                ]
            },
            {
                language: this.css,
                frameworks: [
                    {
                        name: "CSS",
                        icon: '../assets/img/pro-icon/css3-original.svg',
                        version: 3,
                        percent: 80
                    },
                    {
                        name: "Saas",
                        icon: '../assets/img/pro-icon/sass-original.svg',
                        version: 1.38,
                        percent: 75
                    },
                    {
                        name: "Bootstrap",
                        icon: '../assets/img/pro-icon/bootstrap-original.svg',
                        version: 4,
                        percent: 95
                    }
                ]
            },
            {
                language: this.versionado,
                frameworks: [
                    {
                        name: "GIT",
                        icon: '../assets/img/pro-icon/git-original.svg',
                        version: 0,
                        percent: 75
                    },
                ]
            }
        ];
    }
    getHabilities() {
        return this.habilities;
    }
}
HabilitiesService.ɵfac = function HabilitiesService_Factory(t) { return new (t || HabilitiesService)(); };
HabilitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HabilitiesService, factory: HabilitiesService.ɵfac });


/***/ }),

/***/ 890:
/*!***********************************************!*\
  !*** ./src/app/services/portfolio.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioService": () => (/* binding */ PortfolioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PortfolioService {
    constructor() {
        this.proyects = [
            {
                name: "SpotiApp",
                description: "Applicacion que consume el api de spotify, para conocer nuevos lanzamientos y artistas",
                imageUrl: "https://iili.io/JM23FI.th.jpg",
                repoUrl: "",
                url: "https://jesuseduaardo-spotiapp.herokuapp.com/",
                lenguajes: [
                    { name: "Java", version: "8", icon: "" },
                    { name: "TypeScript", version: "3.8", icon: "" }
                ],
                frameworks: [
                    { name: "SpringBoot", version: 5, percent: 0, icon: "" },
                    { name: "Angular", version: 9, percent: 0, icon: "" },
                    { name: "Bootstrap", version: 4, percent: 0, icon: "" }
                ]
            },
            {
                name: "Galletas Dino",
                description: "Maqueta de portada de sitio para reconocida marca de galletas",
                imageUrl: "https://iili.io/w8fLNt.jpg",
                repoUrl: "",
                url: "https://jesuseduaardo.tech/portfolio/cancan/dino/",
                lenguajes: [
                    { name: "HTML", version: "5", icon: "" },
                    { name: "CSS", version: "3", icon: "" },
                    { name: "Javascript", version: "ES6", icon: "" },
                ],
                frameworks: [
                    { name: "Bootstrap", version: 4.6, percent: 0, icon: "" }
                ]
            },
            {
                name: "Galletas Can Can",
                description: "Maqueta de portada de sitio para reconocida marca de galletas",
                imageUrl: "https://iili.io/w8ftxn.jpg",
                repoUrl: "",
                url: "https://jesuseduaardo.tech/portfolio/cancan/colorin/",
                lenguajes: [
                    { name: "HTML", version: "5", icon: "" },
                    { name: "CSS", version: "3", icon: "" },
                    { name: "Javascript", version: "ES6", icon: "" },
                ],
                frameworks: [
                    { name: "Bootstrap", version: 4.6, percent: 0, icon: "" }
                ]
            },
            {
                name: "AsRemis",
                description: "Maqueta para empresa de servicios de transporte privado",
                imageUrl: "https://iili.io/w8frKv.jpg",
                repoUrl: "",
                url: "https://jesuseduaardo.tech/portfolio/asremis/",
                lenguajes: [
                    { name: "HTML", version: "5", icon: "" },
                    { name: "CSS", version: "3", icon: "" },
                    { name: "Javascript", version: "ES6", icon: "" },
                ],
                frameworks: [
                    { name: "Bootstrap", version: 4.6, percent: 0, icon: "" }
                ]
            },
        ];
    }
    getPortfolio() {
        return this.proyects;
    }
}
PortfolioService.ɵfac = function PortfolioService_Factory(t) { return new (t || PortfolioService)(); };
PortfolioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PortfolioService, factory: PortfolioService.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6015:
/*!********************************!*\
  !*** ./src/route-animation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fader": () => (/* binding */ fader),
/* harmony export */   "slider": () => (/* binding */ slider),
/* harmony export */   "stepper": () => (/* binding */ stepper),
/* harmony export */   "transformer": () => (/* binding */ transformer)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

// Basic
const fader = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
    ]),
]);
// Positioned
const slider = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', slideTo('left')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', slideTo('right')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', slideTo('left')),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', slideTo('right'))
]);
const transformer = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => isRight', translateTo({ x: 100, y: -100, rotate: 90 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 }))
]);
function slideTo(direction) {
    const optional = { optional: true };
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ [direction]: '-100%' })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ [direction]: '100%' }))
            ], optional),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ [direction]: '0%' }))
            ])
        ]),
        // Normalize the page style... Might not be necessary
        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}
function translateTo({ x = 100, y = 0, rotate = 0 }) {
    const optional = { optional: true };
    return [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)` }))
            ], optional),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('600ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: `translate(0, 0) rotate(0)` }))
            ])
        ]),
    ];
}
// Keyframes
const stepper = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('2000ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0) translateX(100%)', offset: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1) translateX(0%)', offset: 1 }),
                ])),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('2000ms ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', offset: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
                ])),
            ])
        ]),
    ])
]);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map