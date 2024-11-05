import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { Frameworks } from '../../../services/habilities.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnInit {

  @Input() framework: Frameworks;
  backgroundImage: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    if (this.framework.icon.length) {
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(`url(${this.framework.icon})`);
    }
  }

}
