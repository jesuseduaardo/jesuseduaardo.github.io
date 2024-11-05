import { Component, OnInit } from '@angular/core';
import { EducationService, Education } from '../../services/education.service';
import { CertificationsService, Certification } from '../../services/certifications.service';

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
  constructor(
    private _educationService: EducationService,
    private _certificationService: CertificationsService
  ) { }

  ngOnInit(): void {
    this.education = this._educationService.getEducation();
    this.certifications = this._certificationService.getCertifications();
    for (let i = 0; i < 6; i++) {
      const cert: Certification = this.certifications.shift();
      this.sixLastCertifications.push(cert)
    }
  }

  viewAllCerts() {
    this.showAllCerts = !this.showAllCerts;
  }

}
