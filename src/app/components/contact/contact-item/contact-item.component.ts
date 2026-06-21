import { Component, Input, OnInit } from '@angular/core';
import { ContactItem } from '../contact-item.model'

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {

  @Input() contactItem!: ContactItem;

  constructor() { }

}
