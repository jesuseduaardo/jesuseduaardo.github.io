import { Component, Input, OnInit } from '@angular/core';
import { ContactItem } from '../contact-item.model'

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contactItem: ContactItem = null;

  data: string;
  link: string;
  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.data = this.contactItem.data;
    this.link = this.contactItem.link;
    this.icon = this.contactItem.icon;
  }



}
