import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BirthDayPipe } from './pipes/birth-day.pipe';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//Servicios
import { ExperienceService } from './services/experience.service';
import { EducationService } from './services/education.service';
import { HabilitiesService } from './services/habilities.service';
import { PortfolioService } from './services/portfolio.service'
//Rutas
import { app_routing } from './app.routes';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ContactItemComponent } from './components/contact/contact-item/contact-item.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    BirthDayPipe,
    ExperienceComponent,
    ContactComponent,
    PortfolioComponent,
    SkillComponent,
    EducationComponent,
    FooterComponent,
    SafeHtmlPipe,
    ContactItemComponent,
    ExperienceItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    MaterialModule,
    app_routing
  ],
  providers: [
    ExperienceService,
    EducationService,
    HabilitiesService,
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
