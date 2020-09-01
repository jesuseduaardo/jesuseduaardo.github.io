import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'brandIcon'
})
export class BrandIconPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){}

  transform(value: any):SafeHtml{
    let icon:string;
    switch(value){
      case 'java':
        break;
      case 'spring':
        break;
      case 'jpa':
        break;
      case 'hibernate':
        break;
      case 'php':
        break;
      case 'laravel':
        break;
      case 'javascript':
        break;
      default:
        icon = value;
    }
    return this._sanitizer.bypassSecurityTrustHtml(icon);
  }

}
