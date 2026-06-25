import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../../services/education.service';
import { CertificationsService, Certification } from '../../services/certifications.service';
import { LanguageService } from '../../services/language.service';
import { LanguageEnum } from '../../enums/language.enum';
import { NavMenuService } from '../../services/nav-menu.service';
import { RepositoryService } from '../../services/repository.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: Education[] = [];
  certifications: Certification[] = [];
  minorCertifications: Certification[] = [];
  viewAllCertsBtn: string = '';
  title: string = '';
  certificationTitle = {
    en: 'Certifications',
    es: 'Certificaciones'
  }
  continuousLearning = {
    en: 'Continuous Learning',
    es: 'Aprendizaje Continuo'
  }
  continuousLearningTran: string = '';
  certificationTitleTran: string = '';

  constructor(
    private _educationService: EducationService,
    //private _certificationService: CertificationsService,
    private _repositoryService: RepositoryService,
    private _languageService: LanguageService,
    private _menuService: NavMenuService
  ) { }

  ngOnInit(): void {
    this._repositoryService.getCertifications().subscribe(certs => {
      this.certifications = certs;
    });
    this._repositoryService.getMinorCertifications().subscribe(certs => {
      this.minorCertifications = certs;
    });
    this._languageService.language$.subscribe(lang => {
      this.certificationTitleTran = this.certificationTitle[lang];
      this.continuousLearningTran = this.continuousLearning[lang];
      this.education = this._educationService.getEducation(lang);
      const title = this._menuService.getNavMenu(lang)[4].menu;
      this.title = title.charAt(0).toUpperCase() + title.slice(1);
    })
  }

}
