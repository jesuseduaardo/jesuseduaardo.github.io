import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageEnum } from './../enums/language.enum';
import { LocalStorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject: BehaviorSubject<LanguageEnum>;
  language$: Observable<LanguageEnum>;

  constructor(private _localStorageService: LocalStorageService) {
    const lang = this._localStorageService.getItem('lang');
    this.languageSubject = new BehaviorSubject<LanguageEnum>(lang || LanguageEnum.EN);
    this.language$ = this.languageSubject.asObservable();
  }

  setLanguage(lang: LanguageEnum): void {
    this._localStorageService.setItem('lang', lang);
    this.languageSubject.next(lang);
  }

}
