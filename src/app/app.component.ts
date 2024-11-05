import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'J. Eduardo CV online';
  /* prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  } */


  constructor(
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateRouteOnScroll();

  }

  updateRouteOnScroll() {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Component is visible
          const section = entry.target.id.split("-")[0];
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
      });
    });
    const targetElements = document.querySelectorAll('section');
    targetElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
