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
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 9;\n  width: 100%;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxzY3NzXFxfY29uZmlnLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcTWklMjBDdXJyaWN1bHVtJTIwT25saW5lXFxqZXN1c2VkdWFhcmRvLmdpdGh1Yi5pb1xcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNGQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURLRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmFwcC1uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufSIsIkBpbXBvcnQgXCIuLi9zY3NzL2NvbmZpZ1wiO1xyXG5cclxuYXBwLW5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufSJdfQ== */"], data: { animation: [
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-typed-js */ 5809);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ 1196);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 2816);

















//Servicios




//Rutas








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _services_experience_service__WEBPACK_IMPORTED_MODULE_8__.ExperienceService,
        _services_education_service__WEBPACK_IMPORTED_MODULE_9__.EducationService,
        _services_habilities_service__WEBPACK_IMPORTED_MODULE_10__.HabilitiesService,
        _services_portfolio_service__WEBPACK_IMPORTED_MODULE_11__.PortfolioService
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule,
        _app_routes__WEBPACK_IMPORTED_MODULE_12__.app_routing] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
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
        _components_contact_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_17__.ContactItemComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__.MatExpansionModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatTooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experience/experience.component */ 6228);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 3105);






const app_routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, data: { animation: 'isRight' } },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, data: { animation: 'isLeft' } },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__.ExperienceComponent, data: { animation: 'isRight' } },
    { path: 'portfolio', component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent, data: { animation: 'isLeft' } },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, data: { animation: 'isRight' } },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];
const app_routing = _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(app_routes, { useHash: true, relativeLinkResolution: 'legacy' });


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
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 31, vars: 0, consts: [[1, "about"], [1, "about__bio-image"], [1, "about__bio"], [1, "bio"], [1, "row"], [1, "col-12"], ["href", "https://calendly.com/jesuseduaardo/45min"], [1, "col-12", "col-md-6", "text-center", "py-2"], ["aria-hidden", "false", "aria-label", "Example home icon"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Book a Meeting With Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Associate Degree in Information Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " (System Analyst) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7)(23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hobies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "sports_esports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "fitness_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "directions_bike");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.7)), url('perfil_pic.jpg') center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  line-height: 1.5rem;\n}\n\n.about__bio-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.about__bio[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n\n.about__bio[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.about__bio[_ngcontent-%COMP%]   .text-secondary[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%] {\n  width: 80vw;\n  margin: 1rem auto 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 2rem;\n  text-align: center;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.about[_ngcontent-%COMP%]   .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem;\n}\n\n.about[_ngcontent-%COMP%]   .download_button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #272727;\n  background-color: #ff652f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLG9CQUFBO0FESUY7O0FDRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFIQUFBO0VBTUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRERKOztBQ0dJO0VBQ0UsbUJBQUE7QURETjs7QUNJRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBREZKOztBQ0tNO0VBQ0UsY0ZoQ1U7QUM2QmxCOztBQ09JO0VBQ0Usb0JBQUE7QURMTjs7QUNTRTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRFBKOztBQ1FJO0VBQ0UsY0ZqRFk7QUMyQ2xCOztBQ1FJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FETk47O0FDU0U7RUFDRSxxQkFBQTtFQUNBLGNGM0RZO0VFNERaLHlCRjNEYztBQ29EbEIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5hYm91dCB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuLmFib3V0X19iaW8taW1hZ2Uge1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzksIDM5LCAzOSwgMC45KSwgcmdiYSgzOSwgMzksIDM5LCAwLjcpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuLmFib3V0X19iaW8taW1hZ2UgcCB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uYWJvdXRfX2JpbyB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dF9fYmlvIGgyIHNwYW4ge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cbi5hYm91dF9fYmlvIC50ZXh0LXNlY29uZGFyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLmFib3V0IC5iaW8ge1xuICB3aWR0aDogODB2dztcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMCBhdXRvO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC1nYXA6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hYm91dCAuYmlvIGg0IHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uYWJvdXQgLmJpbyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uYWJvdXQgLmRvd25sb2FkX2J1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyNzI3Mjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY1MmY7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbi5hYm91dCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcblxyXG4gICZfX2Jpby1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICByZ2JhKCRwcmltYXJ5LWNvbG9yLCAwLjkpLFxyXG4gICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuNylcclxuICAgICAgKSxcclxuICAgICAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fYmlvIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LXNlY29uZGFyeSB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJpbyB7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtZ2FwOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaDR7XHJcbiAgICAgIGNvbG9yOiRzZWNvbmRhcnktY29sb3JcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRvd25sb2FkX2J1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
ContactItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactItemComponent, selectors: [["app-contact-item"]], inputs: { contactItem: "contactItem" }, decls: 4, vars: 4, consts: [["width", "50", 3, "src", "alt"], [3, "href"]], template: function ContactItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p")(2, "a", 1);
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
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 10, vars: 3, consts: [[1, "contact"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "col-md-4", "contact-data", 3, "contactItem"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-contact-item", 4)(8, "app-contact-item", 4)(9, "app-contact-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.skype);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contactItem", ctx.whatsapp);
    } }, dependencies: [_contact_item_contact_item_component__WEBPACK_IMPORTED_MODULE_1__.ContactItemComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.contact[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 5rem 0 4rem;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  padding: 0;\n  margin: 0;\n}\n\n.contact-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  text-align: center;\n  padding: 0.8rem 0;\n}\n\n.col-12[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 5rem;\n}\n\n@media (max-width: 600px) {\n  .contact[_ngcontent-%COMP%] {\n    padding: 4rem 0 2rem;\n  }\n  .contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .col-12[_ngcontent-%COMP%]:first-of-type {\n    margin-bottom: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwiY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QURJRjs7QUNIRTtFQUNFLGNGTmM7QUNXbEI7O0FDSEU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FES0o7O0FDSEU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREtKOztBQ0ZBO0VBQ0UsbUJBQUE7QURLRjs7QUNGQTtFQUNFO0lBQ0Usb0JBQUE7RURLRjtFQ0pFO0lBQ0UsY0FBQTtFRE1KO0VDSkU7SUFDRSxnQkFBQTtFRE1KOztFQ0hBO0lBQ0UscUJBQUE7RURNRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250YWN0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogNXJlbSAwIDRyZW07XG59XG4uY29udGFjdCBoMSB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmNvbnRhY3QgaDEsXG4uY29udGFjdCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjhyZW0gMDtcbn1cblxuLmNvbC0xMjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWN0IHtcbiAgICBwYWRkaW5nOiA0cmVtIDAgMnJlbTtcbiAgfVxuICAuY29udGFjdCBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbiAgLmNvbnRhY3QgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cblxuICAuY29sLTEyOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uY29udGFjdCB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiA1cmVtIDAgNHJlbTtcclxuICBoMXtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIH1cclxuICBoMSxcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgJi1kYXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuOHJlbSAwO1xyXG4gIH1cclxufVxyXG4uY29sLTEyOmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDRyZW0gMCAycmVtO1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbC0xMjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


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





function EducationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 12)(9, "small", 13);
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
function EducationComponent_div_9_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 11)(1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const cert_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", cert_r3.duracion, " Hours");
} }
function EducationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 7)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17)(5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 20)(8, "div", 9)(9, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EducationComponent_div_9_p_13_Template, 3, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 12)(15, "small", 13);
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
EducationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 10, vars: 2, consts: [[1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["class", "card", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "head-title", "mt-3"], ["aria-hidden", "false"], ["class", "card certs", 4, "ngFor", "ngForOf"], [1, "card", 2, "max-width", "540px"], [1, "row", "no-gutters"], [1, "col-md-12"], [1, "card-body", "p-1"], [1, "card-title", "my-0"], [1, "card-text", "my-0"], [1, "card-text"], [1, "text-muted"], [1, "card", "certs"], [1, "col-3", "align-self-center", "cert-container"], [1, "card-img", "cert", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", "title", "Ver Certificaci\u00F3n", 3, "href"], [1, "fas", "fa-eye"], [1, "col-9", "align-self-center"], ["class", "card-text my-0", 4, "ngIf"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 0)(1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Education\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EducationComponent_div_4_Template, 12, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 3)(6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Certifications\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EducationComponent_div_9_Template, 17, 7, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.certifications);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\napp-education[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #414141;\n  border-bottom: 5px solid #ff652f;\n  margin: 0 auto;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]:last-child {\n  text-align: end;\n}\n\n.card[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n\n.card[_ngcontent-%COMP%]   .cert-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #dddddd !important;\n}\n\n.card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #878787;\n}\n\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.certs[_ngcontent-%COMP%] {\n  margin: 0.5rem auto 0 auto;\n}\n\n.certs[_ngcontent-%COMP%]:first-child {\n  margin: 0 auto;\n}\n\n@media screen and (min-width: 768px) {\n  .card-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .certs[_ngcontent-%COMP%] {\n    margin: 0.5rem auto 0 auto;\n  }\n\n  .certs[_ngcontent-%COMP%]:first-child {\n    margin: 0 auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxlZHVjYXRpb25cXGVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsImVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLGdCQUFBO0FESUY7O0FDREE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBRElGOztBQ0hFO0VBQ0UsaUJBQUE7QURLSjs7QUNKSTtFQUNFLGVBQUE7QURNTjs7QUNIRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJGMUJjO0FDK0JsQjs7QUNGSTtFQUNFLG9CQUFBO0FESU47O0FDRkk7RUFDRSxZQUFBO0FESU47O0FDRkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFHQSxnQ0FBQTtFQUNBLGtCQUFBO0FESU47O0FDQUU7RUFDRSx5QkFBQTtBREVKOztBQ0VFO0VBQ0UsZUFBQTtBRENKOztBQ0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURDSjs7QUNBSTtFQUNFLGVBQUE7QURFTjs7QUNHQTtFQUNFLDBCQUFBO0FEQUY7O0FDRUE7RUFDRSxjQUFBO0FEQ0Y7O0FEaERFO0VFb0RFO0lBQ0UsZUFBQTtFREFKOztFQ0dBO0lBQ0UsMEJBQUE7RURBRjs7RUNFQTtJQUNFLHlCQUFBO0VEQ0Y7QUFDRiIsImZpbGUiOiJlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmFwcC1lZHVjYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmY2NTJmO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5jYXJkLXRleHQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5jYXJkIC5jYXJkLXRleHQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5jYXJkIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjUyZjtcbn1cbi5jYXJkIC5jZXJ0LWNvbnRhaW5lciAuY2FyZC1pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cbi5jYXJkIC5jZXJ0LWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jYXJkIC5jZXJ0LWNvbnRhaW5lciBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQgLnRleHQtbXV0ZWQge1xuICBjb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg3ODc4Nztcbn1cbi5jYXJkLWJvZHkgcCBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmNlcnRzIHtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwIGF1dG87XG59XG5cbi5jZXJ0czpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZC1ib2R5IGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuY2VydHMge1xuICAgIG1hcmdpbjogMC41cmVtIGF1dG8gMCBhdXRvO1xuICB9XG5cbiAgLmNlcnRzOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbmFwcC1lZHVjYXRpb257XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIH1cclxuICB9XHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICB9XHJcbiAgLmNlcnQtY29udGFpbmVyIHtcclxuICAgIC5jYXJkLWltZyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciAub3ZlcmxheSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGV4dC1tdXRlZCB7XHJcbiAgICBjb2xvcjogI2RkZGRkZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGg1e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICBzbWFsbHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNlcnRzIHtcclxuICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcclxufVxyXG4uY2VydHM6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1tZCB7XHJcbiAgLmNhcmQtYm9keXtcclxuICAgIGg1e1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jZXJ0cyB7XHJcbiAgICBtYXJnaW46IDAuNXJlbSBhdXRvIDAgYXV0bztcclxuICB9XHJcbiAgLmNlcnRzOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../education/education.component */ 1954);









function ExperienceComponent_mat_expansion_panel_15_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, experience_r2.fechaEgreso, "MMM-y"));
} }
function ExperienceComponent_mat_expansion_panel_15_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ExperienceComponent_mat_expansion_panel_15_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", experience_r2.web, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r2.web);
} }
function ExperienceComponent_mat_expansion_panel_15_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Participation in ", experience_r2.proyectos.length, " projects ");
} }
function ExperienceComponent_mat_expansion_panel_15_div_17_li_5_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tecnologia_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", tecnologia_r15, " ");
} }
function ExperienceComponent_mat_expansion_panel_15_div_17_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div")(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 29)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Skills used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_15_div_17_li_5_li_10_Template, 2, 1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const proyect_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r13.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](proyect_r13.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", proyect_r13.tecnologias);
} }
function ExperienceComponent_mat_expansion_panel_15_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ol", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExperienceComponent_mat_expansion_panel_15_div_17_li_5_Template, 11, 3, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r2.proyectos);
} }
function ExperienceComponent_mat_expansion_panel_15_div_18_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tecnologia_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tecnologia_r18);
} }
function ExperienceComponent_mat_expansion_panel_15_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 29)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Skills used");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExperienceComponent_mat_expansion_panel_15_div_18_li_7_Template, 2, 1, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const experience_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r2.resumenProyecto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", experience_r2.tecnologias);
} }
function ExperienceComponent_mat_expansion_panel_15_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-expansion-panel", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function ExperienceComponent_mat_expansion_panel_15_Template_mat_expansion_panel_opened_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.panelOpenState = true); })("closed", function ExperienceComponent_mat_expansion_panel_15_Template_mat_expansion_panel_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.panelOpenState = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel-header", 17)(2, "mat-panel-title")(3, "div", 18)(4, "p")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExperienceComponent_mat_expansion_panel_15_span_9_Template, 3, 4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExperienceComponent_mat_expansion_panel_15_span_10_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExperienceComponent_mat_expansion_panel_15_p_13_Template, 3, 2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ExperienceComponent_mat_expansion_panel_15_p_16_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExperienceComponent_mat_expansion_panel_15_div_17_Template, 6, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExperienceComponent_mat_expansion_panel_15_div_18_Template, 8, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experience_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("collapsedHeight", "150px")("expandedHeight", "150px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 11, experience_r2.fechaIngreso, "MMM-y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.fechaEgreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !experience_r2.fechaEgreso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r2.empresa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.web);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](experience_r2.puesto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", experience_r2.proyectos.length == 0 && experience_r2.resumenProyecto.length);
} }
function ExperienceComponent_app_skill_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-skill", 30);
} if (rf & 2) {
    const hability_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hability", hability_r23);
} }
class ExperienceComponent {
    constructor(_experienceService, _habilitiesService) {
        this._experienceService = _experienceService;
        this._habilitiesService = _habilitiesService;
        this.experiences = [];
        this.habilities = [];
    }
    ngOnInit() {
        this.experiences = this._experienceService.getExperience();
        this.habilities = this._habilitiesService.getHabilities();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_experience_service__WEBPACK_IMPORTED_MODULE_0__.ExperienceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_habilities_service__WEBPACK_IMPORTED_MODULE_1__.HabilitiesService)); };
ExperienceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 27, vars: 2, consts: [[1, "experience"], [1, "container"], [1, "row"], [1, "col-12", "experience-title"], [1, "row", "justify-content-around"], [1, "col-12", "col-md-5"], [1, "head-title", "mt-3"], ["aria-hidden", "false", "aria-label", "empleos"], ["multi", "true"], [3, "opened", "closed", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-md-12"], [1, "head-title"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "stats"], ["class", "col-md-4 p-3", 3, "hability", 4, "ngFor", "ngForOf"], [3, "opened", "closed"], [3, "collapsedHeight", "expandedHeight"], [1, "company-and-date"], [4, "ngIf"], ["class", "company-link d-none d-md-block", 4, "ngIf"], ["class", "cant-exp", 4, "ngIf"], ["class", "proyects-list", 4, "ngIf"], [1, "company-link", "d-none", "d-md-block"], ["target", "_blank", 3, "href"], [1, "cant-exp"], [1, "proyects-list"], [1, "proyects"], [4, "ngFor", "ngForOf"], [1, "tecnologies"], [1, "col-md-4", "p-3", 3, "hability"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Last update 17/06/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "h3", 6)(11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Work History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-accordion", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExperienceComponent_mat_expansion_panel_15_Template, 19, 14, "mat-expansion-panel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "div", 11)(20, "h3", 12)(21, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "emoji_events");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Skills ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-card", 14)(25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ExperienceComponent_app_skill_26_Template, 1, 1, "app-skill", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.experiences);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.habilities);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelTitle, _skill_skill_component__WEBPACK_IMPORTED_MODULE_2__.SkillComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_3__.EducationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.fecha-ingreso-egreso[_ngcontent-%COMP%] {\n  flex-flow: row-reverse;\n}\n\n.experience[_ngcontent-%COMP%] {\n  width: 75vw;\n  margin: auto;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  color: #ff652f;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin: auto;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0.75em 0 0.75em 0;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: #414141;\n  color: #c5c5c5 !important;\n  border-bottom: 5px solid #ff652f;\n  margin-bottom: 1rem;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: #ff652f !important;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  flex-direction: row;\n  align-self: center;\n  align-items: center;\n  text-align: center;\n  line-height: 1.5rem;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: #414141 !important;\n}\n\n.company-and-date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #ff652f;\n}\n\n.company-and-date[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #fff;\n}\n\n.company-and-date[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #c5c5c5;\n}\n\n.company-and-date[_ngcontent-%COMP%]   .chronology-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\n.proyects[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.proyects[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.proyects[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.proyects[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.proyects-list[_ngcontent-%COMP%] {\n  color: #c5c5c5;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  margin-bottom: 0.5em;\n  border-bottom: 1px solid #e6e6e6;\n  background: #f5f5f5;\n  padding: 10px;\n}\n\n.proyects-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.tecnologies[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  color: #fff;\n}\n\n.tecnologies[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 20px;\n}\n\n.tecnologies[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: monospace;\n  margin: 2px;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n\n.cert[_ngcontent-%COMP%] {\n  width: 95px;\n  margin: auto;\n  display: block;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 76%;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n\n.cant-exp[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  color: #a5a5a5;\n}\n\n.company-link[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  margin-bottom: 5px !important;\n}\n\n.company-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 0;\n  color: #c5c5c5;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  background: #414141;\n  margin-bottom: 4rem;\n  padding: 0.3rem 1rem 3rem;\n}\n\n@-webkit-keyframes scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n@keyframes scale-up-hor-left {\n  0% {\n    transform: scaleX(0.4);\n    transform-origin: 0% 0%;\n  }\n  100% {\n    transform: scaleX(1);\n    transform-origin: 0% 0%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .experience[_ngcontent-%COMP%] {\n    padding-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLHNCQUFBO0FESUY7O0FDREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRElGOztBQ0ZFO0VBQ0UsbUJBQUE7QURJSjs7QUNISTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRmZZO0FDb0JsQjs7QUNISTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURLTjs7QUNBQTtFQUNFLHlCQUFBO0FER0Y7O0FDREE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBRElGOztBQ0ZFOztFQUVFLGNBQUE7QURJSjs7QUNERTtFQUNFLHlCQUFBO0FER0o7O0FDQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFSjs7QUNFQTtFQUNFLG9DQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDQ0U7RUFDRSxnQkFBQTtFQUNBLGNGakVjO0FDa0VsQjs7QUNDRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRENKOztBQ0NFO0VBQ0UsZ0JBQUE7RUFDQSxjRnhFYTtBQ3lFakI7O0FDQ0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7QURDSjs7QUNHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBREFGOztBQ0NFO0VBQ0Usb0JBQUE7QURDSjs7QUNDRTtFQUNFLGNGeEZjO0FDeUZsQjs7QUNDRTtFQUNFLGVBQUE7QURDSjs7QUNHQTtFQUNFLGNGL0ZlO0FDK0ZqQjs7QUNDRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRENKOztBQ0NFO0VBQ0UsZ0JBQUE7QURDSjs7QUNHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBREFGOztBQ0NFO0VBQ0UsZUFBQTtBRENKOztBQ0NFO0VBQ0UsZUFBQTtBRENKOztBQ0FJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FERU47O0FDR0E7RUFDRSxhQUFBO0FEQUY7O0FDR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURBRjs7QUNFQTtFQUNFLGNBQUE7QURDRjs7QUNDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FERUY7O0FDQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBREVGOztBQ0FBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBREdGOztBQ0ZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FESUo7O0FDQUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURHRjs7QUNBQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFREdGO0VDREE7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0VER0Y7QUFDRjs7QUNYQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFREdGO0VDREE7SUFDRSxvQkFBQTtJQUNBLHVCQUFBO0VER0Y7QUFDRjs7QUR2SkU7RUV3SkE7SUFDRSxpQkFBQTtFREVGO0FBQ0YiLCJmaWxlIjoiZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZlY2hhLWluZ3Jlc28tZWdyZXNvIHtcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICB3aWR0aDogNzV2dztcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtdGl0bGUgZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAwLjc1ZW0gMCAwLjc1ZW0gMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDE0MTQxO1xuICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmNjUyZjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gIGNvbG9yOiAjZmY2NTJmICFpbXBvcnRhbnQ7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxICFpbXBvcnRhbnQ7XG59XG5cbi5jb21wYW55LWFuZC1kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4uY29tcGFueS1hbmQtZGF0ZSBoNSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNvbXBhbnktYW5kLWRhdGUgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogI2M1YzVjNTtcbn1cbi5jb21wYW55LWFuZC1kYXRlIC5jaHJvbm9sb2d5LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucHJveWVjdHMge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucHJveWVjdHMgPiBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLnByb3llY3RzIGg1IHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4ucHJveWVjdHMgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb3llY3RzLWxpc3Qge1xuICBjb2xvcjogI2M1YzVjNTtcbn1cbi5wcm95ZWN0cy1saXN0ID4gbGkge1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wcm95ZWN0cy1saXN0ID4gbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi50ZWNub2xvZ2llcyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50ZWNub2xvZ2llcyBoNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZWNub2xvZ2llcyB1bCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi50ZWNub2xvZ2llcyB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uZGF0YS1jYXJkIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmNlcnQge1xuICB3aWR0aDogOTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHQtbXV0ZWQge1xuICBmb250LXNpemU6IDc2JTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNhbnQtZXhwIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogI2E1YTVhNTtcbn1cblxuLmNvbXBhbnktbGluayB7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuLmNvbXBhbnktbGluayBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgY29sb3I6ICNjNWM1YzU7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICM0MTQxNDE7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtIDNyZW07XG59XG5cbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC40KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICB9XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbi5mZWNoYS1pbmdyZXNvLWVncmVzbyB7XHJcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLmV4cGVyaWVuY2Uge1xyXG4gIHdpZHRoOiA3NXZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmV4cGVyaWVuY2UtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGgxIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGVtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaHIge1xyXG4gIG1hcmdpbjogMC43NWVtIDAgMC43NWVtIDA7XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbiAgY29sb3I6ICR0ZXJjaWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRwcmltYXJ5LWNvbG9yLCAxMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21wYW55LWFuZC1kYXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICR0ZXJjaWFyeS1jb2xvcjtcclxuICB9XHJcbiAgLmNocm9ub2xvZ3ktbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm95ZWN0cyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgPmxpe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm95ZWN0cy1saXN0IHtcclxuICBjb2xvcjogJHRlcmNpYXJ5LWNvbG9yO1xyXG4gID4gbGkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICA+IGxpOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbi50ZWNub2xvZ2llcyB7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxuICBoNiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGxpIHtcclxuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YS1jYXJkIHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uY2VydCB7XHJcbiAgd2lkdGg6IDk1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICBmb250LXNpemU6IDc2JTtcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uY2FudC1leHAge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBjb2xvcjogI2E1YTVhNTtcclxufVxyXG4uY29tcGFueS1saW5rIHtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBjb2xvcjogI2M1YzVjNTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtIDNyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGUtdXAtaG9yLWxlZnQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDAuNCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtbWQge1xyXG4gIC5leHBlcmllbmNlIHtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 0.5rem;\n}\n\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ff652f;\n  padding: 0.4rem;\n}\n\nfooter[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  bottom: 0.7rem;\n  right: 0.5rem;\n  text-align: right;\n  padding: 1rem;\n  color: #fff;\n  opacity: 0.5;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRElGOztBQ0hFO0VBQ0UsY0ZQYztFRVFkLGVBQUE7QURLSjs7QUNEQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRElGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxcmVtO1xuICBsZWZ0OiAwLjVyZW07XG59XG4uc29jaWFsLWljb25zIGEge1xuICBjb2xvcjogI2ZmNjUyZjtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvdHRvbTogMC43cmVtO1xuICByaWdodDogMC41cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9zaXRpb246IGZpeGVkO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uc29jaWFsLWljb25zIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxcmVtO1xyXG4gIGxlZnQ6IDAuNXJlbTtcclxuICBhIHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm90dG9tOiAwLjdyZW07XHJcbiAgcmlnaHQ6IDAuNXJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbiJdfQ== */"] });


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
    } }, dependencies: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_1__.NgxTypedJsComponent], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n  align-items: center;\n  text-align: center;\n  background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('_-_-_-_-assets-img-perfil_pic.jpg') center top;\n  background-size: cover;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding-top: 60vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .typing[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  padding: 2rem;\n}\n\n.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n\n@media screen and (min-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: hidden;\n    align-items: center;\n    text-align: center;\n    background: linear-gradient(to right, rgba(39, 39, 39, 0.9), rgba(39, 39, 39, 0.3)), url('_-_-_-_-assets-img-perfil_pic.jpg') center 0rem;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwiaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3SUFBQTtFQU1BLHNCQUFBO0FEREY7O0FDR0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QURESjs7QUNFSTtFQUNFLGNGdEJZO0FDc0JsQjs7QUNFSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FEQU47O0FDQ007RUFDRSxjRjVCVTtBQzZCbEI7O0FEUEU7RUVhQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSx5SUFBQTtJQU1BLHNCQUFBO0lBQ0EsNEJBQUE7RURQRjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogIzI3MjcyNztcclxuJHNlY29uZGFyeS1jb2xvcjogI2ZmNjUyZjtcclxuJHRlcmNpYXJ5LWNvbG9yOiAjYzVjNWM1O1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzZXQtdGV4dC1jb2xvcigkY29sb3IpIHtcclxuICBAaWYgKGxpZ2h0bmVzcygkY29sb3IpID4gNDAlKSB7XHJcbiAgICBAcmV0dXJuICMwMDA7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAcmV0dXJuICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWVkaWEtbWQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLWxnIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEteGwge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzksIDM5LCAzOSwgMC45KSwgcmdiYSgzOSwgMzksIDM5LCAwLjMpKSwgdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJmaWxfcGljLmpwZ1wiKSBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQgLmluZm8ge1xuICBwYWRkaW5nLXRvcDogNjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudCAuaW5mbyAudHlwaW5nIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4uY29udGVudCAuaW5mbyBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBwYWRkaW5nOiAycmVtO1xufVxuLmNvbnRlbnQgLmluZm8gaTpob3ZlciB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzOSwgMzksIDM5LCAwLjkpLCByZ2JhKDM5LCAzOSwgMzksIDAuMykpLCB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciAwcmVtO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2NvbmZpZ1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuOSksXHJcbiAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuMylcclxuICAgICksXHJcbiAgICB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciB0b3A7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgLmluZm8ge1xyXG4gICAgcGFkZGluZy10b3A6IDYwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC50eXBpbmcge1xyXG4gICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1tZCB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgIHJnYmEoJHByaW1hcnktY29sb3IsIDAuOSksXHJcbiAgICAgICAgcmdiYSgkcHJpbWFyeS1jb2xvciwgMC4zKVxyXG4gICAgICApLFxyXG4gICAgICB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcmZpbF9waWMuanBnXCIpIGNlbnRlciAwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG59Il19 */"] });


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
const _c4 = function () { return ["contact"]; };
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
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 32, consts: [[1, "menu-btn", 3, "ngClass", "click"], [1, "menu-btn__burger", 3, "ngClass"], [1, "nav", 3, "ngClass"], [1, "menu-nav", 3, "ngClass", "click"], [1, "menu-nav__item", 3, "ngClass"], ["href", "index.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "about.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "projects.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"], ["href", "contact.html", "routerLinkActive", "active", 1, "menu-nav__link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_0_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2)(3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_ul_click_3_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.showMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v98/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n.material-icons[_ngcontent-%COMP%] {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\nbody[_ngcontent-%COMP%] {\n  background: #272727;\n  color: #fff;\n  height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n  text-decoration: none;\n}\n.text-secondary[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\nmain[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  transition: all 0.5s ease-in-out;\n}\nmain[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\napp-skill[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin: 0.5rem auto;\n  padding: 0.5rem;\n  color: #fff;\n  border-radius: 10px;\n}\napp-skill[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #383838;\n  box-shadow: 5px 6px 1px #333;\n}\n.head-title[_ngcontent-%COMP%] {\n  background-color: #ff652f;\n  padding: 0.3em !important;\n  text-align: center;\n}\n.menu-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 1rem;\n  top: 1rem;\n  height: 20px;\n  width: 28px;\n  cursor: pointer;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0.5rem;\n  width: 28px;\n  height: 3px;\n  background: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  width: 28px;\n  height: 3px;\n  background-color: #fff;\n  transition: all 0.5s ease-in-out;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%] {\n  transform: rotate(720deg);\n  background: transparent;\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::before {\n  transform: rotate(45deg) translate(5px, 8px);\n}\n.menu-btn__burger.open[_ngcontent-%COMP%]::after {\n  transform: rotate(-45deg) translate(3px, -7px);\n}\n.nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  opacity: 0.98;\n  visibility: hidden;\n}\n.nav.open[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  background: #272727;\n  list-style-type: none;\n  transform: translateY(-100%);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav.open[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n  transform: translateX(100vw);\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__item.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  text-transform: uppercase;\n  padding: 2rem 0;\n  font-weight: 300;\n  transition: all 0.5s ease-in-out;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link.active[_ngcontent-%COMP%] {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%]:hover {\n  color: #ff652f;\n}\n.nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2392156863);\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  z-index: -1;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.25s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.35s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.45s;\n}\n.menu-nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 0.55s;\n}\n@media screen and (min-width: 768px) {\n  .menu-btn[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n    display: block;\n    transform: translateY(0);\n    height: 100%;\n    background: transparent;\n    text-align: center;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__item[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 1.5rem;\n  }\n  .nav[_ngcontent-%COMP%]   .menu-nav__link[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcX2NvbmZpZy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTWklMjBDdXJyaWN1bHVtJTIwT25saW5lXFxqZXN1c2VkdWFhcmRvLmdpdGh1Yi5pb1xcc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwibmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDSUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRkY7QUZEQSxhQUFBO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwR0FBQTtBRUlGO0FGREE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtBRUdGO0FGQUE7RUFDRSxtQkM3QmM7RUQ4QmQsV0FBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7QUVHRjtBRkFBOzs7RUFHRSxnQkFBQTtBRUdGO0FGQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUVHRjtBRkZFO0VBQ0UsY0M3Q2M7RUQ4Q2QscUJBQUE7QUVJSjtBRkFBO0VBQ0ksY0NuRGM7QUNzRGxCO0FGQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRUdGO0FGREU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUVHSjtBRkRJO0VBQ0UsZUFBQTtFQ3RESixnQ0FBQTtBQzBERjtBRkZNO0VBQ0UsY0NuRVU7QUN1RWxCO0FGRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUVDRjtBRkFFO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBRUVKO0FGRUE7RUFDRSx5QkN2RmdCO0VEd0ZoQix5QkFBQTtFQUNBLGtCQUFBO0FFQ0Y7QUN6RkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFRkVBLGdDQUFBO0FDMkZGO0FDMUZFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUZQRixnQ0FBQTtBQ29HRjtBQzFGSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VGaEJKLGdDQUFBO0FDNkdGO0FDekZJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUYxQkosZ0NBQUE7QUNzSEY7QUN4Rkk7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FEMEZOO0FDeEZNO0VBQ0UsNENBQUE7QUQwRlI7QUN4Rk07RUFDRSw4Q0FBQTtBRDBGUjtBQ3BGQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEdUZGO0FDckZFO0VBQ0UsbUJBQUE7QUR1Rko7QUNwRkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRjNFWTtFRTRFWixxQkFBQTtFQUNBLDRCQUFBO0VGbEVGLGdDQUFBO0FDeUpGO0FDcEZJO0VBQ0Usd0JBQUE7QURzRk47QUNuRkk7RUFDRSw0QkFBQTtFRjFFSixnQ0FBQTtBQ2dLRjtBQ25GTTtFQUNFLHdCQUFBO0FEcUZSO0FDakZJO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUZ2RkosZ0NBQUE7QUMyS0Y7QUNqRk07RUFDRSxjRnJHVTtBQ3dMbEI7QUNoRk07RUFDRSxjRnpHVTtBQzJMbEI7QUMvRUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QURpRk47QUMzRUU7RUFDRSx1QkFBQTtBRDhFSjtBQy9FRTtFQUNFLHVCQUFBO0FEa0ZKO0FDbkZFO0VBQ0UsdUJBQUE7QURzRko7QUN2RkU7RUFDRSx1QkFBQTtBRDBGSjtBRGxNRTtFRTZHQTtJQUNFLGtCQUFBO0VEeUZGOztFQ3RGQTtJQUNFLG1CQUFBO0VEeUZGO0VDdkZFO0lBQ0UsY0FBQTtJQUNBLHdCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUR5Rko7RUN2Rkk7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUR5Rk47RUN0Rkk7SUFDRSxpQkFBQTtFRHdGTjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuQGltcG9ydCBcIi4vc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIi4vc2Nzcy9yZXNwb25zaXZlXCI7XHJcblxyXG4vKiBmYWxsYmFjayAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92OTgvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgJjpob3ZlcntcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtc2Vjb25kYXJ5e1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDFyZW07XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tZWFzZTtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFwcC1za2lsbHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGNvbG9yOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcclxuICAgIGJveC1zaGFkb3c6IDVweCA2cHggMXB4ICMzMzM7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZC10aXRsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIHBhZGRpbmc6IDAuM2VtICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBmYWxsYmFjayAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21hdGVyaWFsaWNvbnMvdjk4L2ZsVWhScTZ0elpjbFFFSi1WZGctSXVpYURzTmMud29mZjIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMjcyNzI3O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICBjb2xvcjogI2ZmNjUyZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC1zZWNvbmRhcnkge1xuICBjb2xvcjogI2ZmNjUyZjtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIC5zb2NpYWwtaWNvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMXJlbTtcbiAgbGVmdDogMXJlbTtcbn1cbm1haW4gLnNvY2lhbC1pY29ucyBhIHtcbiAgcGFkZGluZzogMC40cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnNvY2lhbC1pY29ucyBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbmFwcC1za2lsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAuNXJlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYXBwLXNraWxsOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcbiAgYm94LXNoYWRvdzogNXB4IDZweCAxcHggIzMzMztcbn1cblxuLmhlYWQtdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NTJmO1xuICBwYWRkaW5nOiAwLjNlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDFyZW07XG4gIHRvcDogMXJlbTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5tZW51LWJ0bl9fYnVyZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwLjVyZW07XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudS1idG5fX2J1cmdlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudS1idG5fX2J1cmdlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm1lbnUtYnRuX19idXJnZXIub3BlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1lbnUtYnRuX19idXJnZXIub3Blbjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDhweCk7XG59XG4ubWVudS1idG5fX2J1cmdlci5vcGVuOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDNweCwgLTdweCk7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvcGFjaXR5OiAwLjk4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubmF2Lm9wZW4ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm5hdiAubWVudS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMyNzI3Mjc7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ubmF2IC5tZW51LW5hdi5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuLm5hdiAubWVudS1uYXZfX2l0ZW0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwdncpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5uYXYgLm1lbnUtbmF2X19pdGVtLm9wZW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ubmF2IC5tZW51LW5hdl9fbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLm5hdiAubWVudS1uYXZfX2xpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG4ubmF2IC5tZW51LW5hdl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY2NTJmO1xufVxuLm5hdiAubWVudS1uYXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIzOTIxNTY4NjMpO1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5tZW51LW5hdl9faXRlbTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1cztcbn1cblxuLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xufVxuXG4ubWVudS1uYXZfX2l0ZW06bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7XG59XG5cbi5tZW51LW5hdl9faXRlbTpudGgtY2hpbGQoNCkge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjU1cztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1lbnUtYnRuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAubmF2IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5uYXYgLm1lbnUtbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9faXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcbiAgfVxuICAubmF2IC5tZW51LW5hdl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5tZW51LWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAmX19idXJnZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDAuNXJlbTtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBzZXQtdGV4dC1jb2xvcigkcHJpbWFyeS1jb2xvcik7XHJcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC04cHg7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2V0LXRleHQtY29sb3IoJHByaW1hcnktY29sb3IpO1xyXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHNldC10ZXh0LWNvbG9yKCRwcmltYXJ5LWNvbG9yKTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKDVweCwgOHB4KTtcclxuICAgICAgfVxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoM3B4LCAtN3B4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5hdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvcGFjaXR5OiAwLjk4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgJi5vcGVuIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5cclxuICAubWVudS1uYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICYub3BlbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHZ3KTtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICAgJi5vcGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19saW5rIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1lYXNlO1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwM2Q7XHJcbiAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNCB7XHJcbiAgLm1lbnUtbmF2X19pdGVtOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogKCRpICogMC4xcykrIDAuMTVzO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtbWQge1xyXG4gIC5tZW51LWJ0biB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubmF2IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcblxyXG4gICAgLm1lbnUtbmF2IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgJl9faXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fbGluayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  padding: 6rem 3rem;\n}\n\n.portfolio[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bolder;\n  margin-bottom: 25px;\n  color: #ff652f;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 250px;\n  padding: 0.9rem;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.3rem;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n\n.header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3d3d3d;\n}\n\n.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #060606;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem;\n  color: #060606;\n  margin: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLGtCQUFBO0FESUY7O0FDSEU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRlJjO0FDYWxCOztBQ0ZBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FES0Y7O0FDSkU7RUFDRSxtQkFBQTtBRE1KOztBQ0ZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURLRjs7QUNGQTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QURLRjs7QUNGQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBREtGOztBQ0pFO0VBQ0UsY0FBQTtBRE1KOztBQ0xJO0VBQ0UsY0FBQTtBRE9OOztBQ0ZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FES0YiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMyNzI3Mjc7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZjY1MmY7XHJcbiR0ZXJjaWFyeS1jb2xvcjogI2M1YzVjNTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2Uge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AZnVuY3Rpb24gc2V0LXRleHQtY29sb3IoJGNvbG9yKSB7XHJcbiAgQGlmIChsaWdodG5lc3MoJGNvbG9yKSA+IDQwJSkge1xyXG4gICAgQHJldHVybiAjMDAwO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHJldHVybiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1lZGlhLW1kIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS1sZyB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGlhLXhsIHtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucG9ydGZvbGlvIHtcbiAgcGFkZGluZzogNnJlbSAzcmVtO1xufVxuLnBvcnRmb2xpbyBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgY29sb3I6ICNmZjY1MmY7XG59XG5cbi5jYXJkIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMC45cmVtO1xufVxuLmNhcmQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG59XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmFjdGlvbnMgYSB7XG4gIGNvbG9yOiAjM2QzZDNkO1xufVxuLmFjdGlvbnMgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDYwNjA2O1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjJyZW07XG4gIGNvbG9yOiAjMDYwNjA2O1xuICBtYXJnaW46IDAuMnJlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9jb25maWdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLnBvcnRmb2xpbyB7XHJcbiAgcGFkZGluZzogNnJlbSAzcmVtO1xyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDAuOXJlbTtcclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhIHtcclxuICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6ICMwNjA2MDY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBjb2xvcjogIzA2MDYwNjtcclxuICBtYXJnaW46IDAuMnJlbTtcclxufVxyXG4iXX0= */"] });


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
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.stats[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.hability-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 0.5rem auto 0rem auto;\n}\n\n.hability-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.hability-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n  border: none;\n}\n\n.framework-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  width: 100%;\n}\n\n.framework-info[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  height: 4vh;\n  width: 100%;\n  border-radius: 0px 5px 5px 0px;\n}\n\n.framework-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 2rem;\n  border: none;\n}\n\n.tooltipInfo[_ngcontent-%COMP%] {\n  background-color: #03a2ff;\n  position: relative;\n  top: 20px;\n  left: 50%;\n  font-size: 14px;\n}\n\n.info-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 89%;\n  font-size: 28px;\n  font-style: italic;\n  font-family: \"Krona One\", sans-serif;\n}\n\n.progress-bar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 3;\n  margin-bottom: 0;\n  color: #414141;\n}\n\ni[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding: 0 10px;\n}\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  max-width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNjc3NcXF9jb25maWcuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE1pJTIwQ3VycmljdWx1bSUyME9ubGluZVxcamVzdXNlZHVhYXJkby5naXRodWIuaW9cXHNyY1xcYXBwXFxjb21wb25lbnRzXFxza2lsbFxcc2tpbGwuY29tcG9uZW50LnNjc3MiLCJza2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjs7QUNEQTtFQUNFLG1CQUFBO0FESUY7O0FDSEU7RUFDRSxTQUFBO0FES0o7O0FDREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QURJRjs7QUNGRTtFQUNFLGdCQUFBO0FESUo7O0FDRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRElKOztBQ0RBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURJRjs7QUNIRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QURLSjs7QUNIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FES0o7O0FDREE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FESUY7O0FDRkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBREtGOztBQ0ZBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBREtGOztBQ0ZBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QURLRjs7QUNGQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURLRiIsImZpbGUiOiJza2lsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwcmltYXJ5LWNvbG9yOiAjMjcyNzI3O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmY2NTJmO1xyXG4kdGVyY2lhcnktY29sb3I6ICNjNWM1YzU7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGZ1bmN0aW9uIHNldC10ZXh0LWNvbG9yKCRjb2xvcikge1xyXG4gIEBpZiAobGlnaHRuZXNzKCRjb2xvcikgPiA0MCUpIHtcclxuICAgIEByZXR1cm4gIzAwMDtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtZWRpYS1tZCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaWEtbGcge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpYS14bCB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnN0YXRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zdGF0cyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGFiaWxpdHktdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0byAwcmVtIGF1dG87XG59XG4uaGFiaWxpdHktdGl0bGUgaDUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmhhYmlsaXR5LXRpdGxlIGltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mcmFtZXdvcmstaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mcmFtZXdvcmstaW5mbyAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDR2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbn1cbi5mcmFtZXdvcmstaW5mbyBpbWcge1xuICB3aWR0aDogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udG9vbHRpcEluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhMmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbmZvLXBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDg5JTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcIktyb25hIE9uZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHAge1xuICB6LWluZGV4OiAzO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogIzQxNDE0MTtcbn1cblxuaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uaW1nLXRodW1ibmFpbCB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3Njc3MvY29uZmlnXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL3Jlc3BvbnNpdmVcIjtcclxuXHJcbi5zdGF0cyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5oYWJpbGl0eS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMC41cmVtIGF1dG8gMHJlbSBhdXRvO1xyXG5cclxuICBoNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5mcmFtZXdvcmstaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBoZWlnaHQ6IDR2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbHRpcEluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2EyZmY7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pbmZvLXBlcmNlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4OSU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciBwIHtcclxuICB6LWluZGV4OiAzO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5pbWctdGh1bWJuYWlsIHtcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufSJdfQ== */"] });


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
                titulo: "ReactiveX - RxJs: De cero hasta los detalles",
                institucion: "Udemy",
                fechaInicio: "",
                fechaFin: "2022-04-17",
                certificacionUrl: "https://www.udemy.com/certificate/UC-c4490a71-ae86-48de-afa8-9dfd6d8b12d7/  ",
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
                resumenProyecto: "",
                tecnologias: ["MS Sql", "Java", "SpringBoot", "Angular", "TypeScript", "RxJs"],
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
        this.android = { name: "Android", version: 0, icon: '../assets/img/pro-icon/android-original.svg' };
        this.javaScript = { name: "JavaScript", version: "ES6", icon: '../assets/img/pro-icon/javascript-original.svg' };
        this.php = { name: "PHP", version: 7, icon: '../assets/img/pro-icon/php-original.svg' };
        this.sql = { name: "SQL", version: 0, icon: '../assets/img/pro-icon/sql.svg' };
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
                        percent: 25
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
    production: false
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