export class ContactItem {
    cta;
    text;
    link;
    icon;

    constructor(cta: string, text: string, link: string, icon: string) {
        this.cta = cta;
        this.text = text;
        this.link = link;
        this.icon = icon;
    }
}
