import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountUpModule } from 'ngx-countup';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { ProgressbarComponent } from './components/skills/progressbar/progressbar.component';
import { AchivementsComponent } from './components/skills/achivements/achivements.component';
import { BirthDayPipe } from './pipes/birth-day.pipe';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationComponent } from './components/education/certication/certication.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactItemComponent } from './components/contact/contact-item/contact-item.component';
import { ExperienceItemComponent } from './components/experience/experience-item/experience-item.component';

//Servicios
import { ExperienceService } from './services/experience.service';
import { EducationService } from './services/education.service';
import { HabilitiesService } from './services/habilities.service';
import { PortfolioService } from './services/portfolio.service'
//Rutas
import { app_routing } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
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
    SkillsComponent,
    ProgressbarComponent,
    AchivementsComponent,
    EducationComponent,
    CertificationComponent,
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
    CountUpModule,
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
