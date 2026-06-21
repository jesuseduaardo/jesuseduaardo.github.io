import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../../services/education.service';
import { CertificationsService, Certification } from '../../services/certifications.service';
import { LanguageService } from '../../services/language.service';
import { LanguageEnum } from '../../enums/language.enum';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  showAllCerts: boolean = false;
  education: Education[] = [];
  certifications: Certification[] = [];
  minorCertifications: Certification[] = [];
  viewAllCertsBtn: string = '';
  title: string = '';

  constructor(
    private _educationService: EducationService,
    private _certificationService: CertificationsService,
    private _languageService: LanguageService,
    private _menuService: NavMenuService
  ) { }

  ngOnInit(): void {
    this.certifications = this._certificationService.getCertifications();
    this.minorCertifications = this._certificationService.getMinorCertifications();
    this._languageService.language$.subscribe(lang => {
      this.education = this._educationService.getEducation(lang);
      this.viewAllCertsBtn = lang === LanguageEnum.EN
        ? `Show Supplementary Coursework & Deep Dives`
        : `Mostrar aprendizaje técnico complementario`;
      const title = this._menuService.getNavMenu(lang)[4].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
    })
  }

  viewAllCerts() {
    this.showAllCerts = !this.showAllCerts;
  }

}
