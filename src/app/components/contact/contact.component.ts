import { Component, OnInit } from '@angular/core';
import { ContactItem } from './contact-item.model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  location: ContactItem;
  skype: ContactItem;
  email : ContactItem;
  whatsapp: ContactItem;

  constructor() { }

  ngOnInit() {
    this.location = this.getLocation();
    this.skype = this.getSkype();
    this.email = this.getEmail();
    this.whatsapp = this.getWhatsapp();
  }

  getLocation() {
    return new ContactItem(
      "Buenos Aires - Argentina",
      "https://www.google.com.ar/maps/place/Monserrat,+CABA/@-34.6125587,-58.3793422,13z/data=!4m2!3m1!1s0x95bccad7c271d155:0xc9f98936bbfefff5",
      "assets/img/geo.svg"
    );
  }

  getSkype(){
    return new ContactItem(
      "jesus.eduaardo",
      "skype:jesus.eduaardo?chat",
      "assets/img/skype.svg"
    );
  }

  getEmail(){
    return new ContactItem(
      "jesuseduaardo@gmail.com",
      "mailto:jesuseduaardo@gmail.com",
      "assets/img/gmail.svg"
    )
  }

  getWhatsapp(){
    return new ContactItem(
      "+54 11 2783-4634",
      "https://api.whatsapp.com/send?phone=541127834634",
      "assets/img/whatsapp.svg"
    )
  }

}
