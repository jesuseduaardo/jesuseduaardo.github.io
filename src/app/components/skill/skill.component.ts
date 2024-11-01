import { Component, OnInit, Input } from '@angular/core';
import { Hability } from 'src/app/services/habilities.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() hability:Hability;

  constructor() { }

  ngOnInit() {
  }

}
