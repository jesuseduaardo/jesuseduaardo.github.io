import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent, data: { animation: 'isRight' }},
    { path: 'about', component: AboutComponent, data: { animation: 'isLeft' }},
    { path: 'experience', component: ExperienceComponent, data: { animation: 'isRight' }},
    { path: 'contact', component: ContactComponent, data: { animation: 'isLeft' } },
    { path: 'portfolio', component: PortfolioComponent, data: { animation: 'isRight' }},
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
  ];

export const app_routing = RouterModule.forRoot(app_routes);