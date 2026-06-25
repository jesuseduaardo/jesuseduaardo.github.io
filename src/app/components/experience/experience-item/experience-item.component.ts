import { SoftSkillsService } from './../../../services/soft-skills.service';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit, AfterViewInit {

  @Input() experience;
  @Input() lang: string = '';

  @ViewChild('textContainer')
  textContainer: ElementRef;

  closed: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.textContainer.nativeElement) {
      const height = this.textContainer.nativeElement.offsetHeight;
      if (height > 100) {
        // setTimeout saca la mutación del ciclo actual de CD
        setTimeout(() => {
          this.closed = true;
        });
      }
    }
  }

  changeDescriptionLength() {
    this.closed = !this.closed;
  }

  getClassOf(technology: string): string {
    return technology.toLowerCase();
  }

  getYearsOfExp(initYear: number, lastYear: number) {
    console.log(initYear, lastYear);

    return initYear - lastYear;
  }

}

