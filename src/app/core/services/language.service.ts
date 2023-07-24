import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, EMPTY } from 'rxjs';
import { ALL_LANGUAGES, LOCALE_KEY , LANGUAGE_KEY } from '../models/language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _currentLanguage: LOCALE_KEY = (localStorage.getItem(LANGUAGE_KEY) as LOCALE_KEY) ?? ALL_LANGUAGES.pl;

  public static LanguageChange$: Observable<unknown> = EMPTY;

  constructor(private translate: TranslateService) {
    this.init();
  }

  public getLanguage(): LOCALE_KEY {
    return this._currentLanguage;
  }

  public setLanguage(lang: LOCALE_KEY): void {
    localStorage.setItem(LANGUAGE_KEY, lang);
    this.translate.use(lang);

  }

  public init(): LOCALE_KEY {
    LanguageService.LanguageChange$ = this.translate.onLangChange;
    return this._currentLanguage;
  }
}
