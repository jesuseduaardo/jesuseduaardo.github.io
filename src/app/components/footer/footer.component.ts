import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const socialIcons = document.querySelector('.social-icons');
    if (scrollTop + winHeight >= docHeight) {
      socialIcons!.classList.add('get-attention');
    } else {
      socialIcons!.classList.remove('get-attention');
    }
  }

}
