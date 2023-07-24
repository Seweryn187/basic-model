import { LOCALE_KEY, LANGUAGE_KEY, ALL_LANGUAGES } from './../../models/language.enum';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@basic/shared/directives/base-component.directive';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'basic-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageButtonComponent extends BaseComponent {
  public language: LOCALE_KEY;
  public LANGUAGES = ALL_LANGUAGES;

  constructor(private languageService: LanguageService, private translateService: TranslateService, private cdr: ChangeDetectorRef) {
    super();
    this.language = (localStorage.getItem(LANGUAGE_KEY) as LOCALE_KEY) || 'pl';
    this.changeLanguage(this.language);
    this.translateService.onLangChange.pipe(takeUntil(this.destroyed)).subscribe(i => {
      this.language = i.lang as LOCALE_KEY;
    });
  }

  public changeLanguage(language: LOCALE_KEY) {
    console.log('dsada');
    this.languageService.setLanguage(language);
  }
}
