import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { fader } from '../route-animation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader,
    // slider,
    //transformer,
    //stepper
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'J. Eduardo CV online';
  /* prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  } */
  sectionPositions: SectionPosition[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.getSectionsPosition()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    let sectionID = '';
    this.sectionPositions.forEach(section => {
      if (Math.round(currentScroll) >= section.positionY) {
        sectionID = section.id
      }
    })
    const currentSection = sectionID.split("-")[0];
    console.log(`currentScroll: ${Math.round(currentScroll) - 3}, currentSection: ${currentSection}`);

    this.updateUrl(currentSection);
  }

  updateUrl(section) {
    const hash = `/${section}`;
    const urlTree = this.router.createUrlTree([hash], {
      //queryParams: queryParams,
      relativeTo: this.activatedRoute,
      //skipLocationChange: true
    });
    // Update the URL hash if it's different from the current one
    if (this.location.path() !== hash) {
      this.router.navigateByUrl(urlTree, { replaceUrl: false });
    }
  }

  getSectionsPosition() {
    const sections: SectionPosition[] = [];
    document.querySelectorAll('section').forEach((element) => {
      const rect = element.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
      sections.push({ id: element.id, positionY: Math.round(y), positionX: Math.round(x) });
    });
    this.sectionPositions = sections;
  }
}

export interface SectionPosition {
  id: string,
  positionY: number,
  positionX: number;
}
