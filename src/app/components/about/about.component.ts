import { combineLatest, map } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { NavMenuService } from '../../services/nav-menu.service';
import { RepositoryService } from '../../services/repository.service';
import { SoftSkill, SoftSkillsService } from './../../services/soft-skills.service';
import { Component, OnInit } from '@angular/core';
import { Certification } from '../../services/certifications.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutMe: any;
  impact: SoftSkill[] = [];
  title: string = ""
  lang: string = '';

  constructor(
    //private _sofSkillService: SoftSkillsService,
    private _repositoryService: RepositoryService,
    private _languageService: LanguageService,
    private _menuService: NavMenuService,
  ) { }

  ngOnInit() {
    combineLatest([
      this._languageService.language$,
      this._repositoryService.getAbout()
    ]).pipe(
      map(([lang, aboutList]) => {
        // 1. Actualizamos el idioma y el título del menú
        this.lang = lang;
        const title = this._menuService.getNavMenu(lang)[1].menu;
        this.title = title.charAt(0).toUpperCase() + title.slice(1);

        // 2. Tomamos el primer elemento de la respuesta de Firebase
        const aboutData = aboutList[0];
        if (!aboutData) return null;

        // 3. Procesamos los textos aplicando tu función replacePlaceholder
        const aboutMeProcessed = this.replacePlaceholder(aboutData.aboutme?.[lang], '%YOE%');

        const impactProcessed = aboutData.impact?.[lang]?.map((item: any) => ({
          name: item.name,
          description: this.replacePlaceholder(item.description, '%YOE%')
        })) || [];

        // Retornamos un objeto limpio con la estructura que necesita el componente
        return {
          aboutMe: aboutMeProcessed,
          impact: impactProcessed
        };
      })
    ).subscribe({
      next: (processedData: { aboutMe: string; impact: SoftSkill[]; } | null) => {
        if (processedData) {
          // 4. Asignamos los valores finales que el HTML va a renderizar
          this.aboutMe = processedData.aboutMe;
          this.impact = processedData.impact;
        }
      },
      error: (err: any) => console.error('Error procesando datos en vivo:', err)
    });
  }

  replacePlaceholder(text: string | undefined, placeholder: string): string {
    if (placeholder === '%YOE%' && text) {
      return text.replace(placeholder, '' + this.calculateYearsOfExperience(2018));
    }
    return text ?? '';
  }

  calculateYearsOfExperience(pastYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - pastYear;
  }

}
