import { Component, Input } from '@angular/core';
import { Certification } from '../../../services/certifications.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certication.component.html',
  styleUrl: './certication.component.scss'
})
export class CertificationComponent {

  @Input() cert: Certification;

}
