import { LOCALE_KEY, LANGUAGE_KEY, ALL_LANGUAGES } from './../../models/language.enum';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'basic-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageButtonComponent {
  public language: LOCALE_KEY;
  public LANGUAGES = ALL_LANGUAGES;

  constructor(private languageService: LanguageService, private translateService: TranslateService, private cdr: ChangeDetectorRef) {
    this.language = (localStorage.getItem(LANGUAGE_KEY) as LOCALE_KEY) || 'pl';
    this.changeLanguage(this.language);
    this.translateService.onLangChange.pipe().subscribe(i => {
      this.language = i.lang as LOCALE_KEY;
    });
  }

  public click(event: Event) {
    console.log(event);
  }

  public changeLanguage(language: LOCALE_KEY) {
    console.log('Language component:', language);
    this.languageService.setLanguage(language);
  }
}
