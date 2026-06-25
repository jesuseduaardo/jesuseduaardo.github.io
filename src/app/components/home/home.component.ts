import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { Certification } from '../../services/certifications.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  certifications: Certification[] = [];

  constructor(
    private _repositoryService: RepositoryService,
  ) { }

  ngOnInit() {
    this._repositoryService.getCertifications().subscribe(certs => {
      this.certifications = certs;
    });
  }

}
