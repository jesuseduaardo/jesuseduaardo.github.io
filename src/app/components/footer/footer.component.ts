import { Component, HostListener, OnInit } from '@angular/core';
import { ContactItem } from '../contact/contact-item.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number | undefined;
  linkedin: ContactItem | undefined;
  private contactObserver: IntersectionObserver | null = null;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.linkedin = this.getLinkedin();
  }

  ngAfterViewInit(): void {
    const contactEl = document.querySelector('.contact');
    const socialIcons = document.querySelector('.social-icons');

    if (!contactEl || !socialIcons) return;

    this.contactObserver = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        socialIcons.classList.toggle('get-attention', isVisible);
      },
      { threshold: 0.1 }
    );

    this.contactObserver.observe(contactEl);
  }

  ngOnDestroy(): void {
    this.contactObserver?.disconnect();
  }

  getLinkedin() {
    return new ContactItem(
      "Let's network",
      "Check out my latest technical insights and background.",
      "https://www.linkedin.com/in/jesuseduaardo/",
      "assets/img/linkedin.svg"
    )
  }

}
