import { Component, Input } from '@angular/core';
import { Achievement } from '../../../services/achievement.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achivements.component.html',
  styleUrl: './achivements.component.scss'
})
export class AchivementsComponent {
  @Input() achievement: Achievement;

}
