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
  sixLastCertifications: Certification[] = [];
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
    for (let i = 0; i < 6; i++) {
      const cert: Certification = this.certifications.shift();
      this.sixLastCertifications.push(cert)
    }
    this._languageService.language$.subscribe(lang => {
      this.education = this._educationService.getEducation(lang);
      this.viewAllCertsBtn = lang === LanguageEnum.EN
        ? `View all others ${this.certifications.length} certifications`
        : `Ver las ${this.certifications.length} certificaciones`;
      const title = this._menuService.getNavMenu(lang)[4].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
    })
  }

  viewAllCerts() {
    this.showAllCerts = !this.showAllCerts;
  }

}
