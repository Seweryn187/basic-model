import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { Themes } from '../models/themes.enum';
import { WebStorageKey } from '../models/web-storage-keys.enum';

const DARK_MODE_DETECTION_STRING = '(prefers-color-scheme: dark)';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private settingsService: SettingsService,
  ) {}

  public initTheme(): void {
    this.changeThemeClass(this.getTheme());
  }

  public getTheme(): Themes {
    return this.getThemeFromSettings() || this.getThemeFromOS();
  }

  public setTheme(theme: Themes): void {
    this.setThemeInSettings(theme);
    this.changeThemeClass(theme);
  }

  private changeThemeClass(theme: Themes): void {
    this.document.documentElement.classList.remove(Themes.LIGHT_THEME, Themes.DARK_THEME);
    this.document.documentElement.classList.add(theme);
  }

  private getThemeFromOS(): Themes {
    if (window?.matchMedia(DARK_MODE_DETECTION_STRING).matches) {
      this.setThemeInSettings(Themes.DARK_THEME);
      return Themes.DARK_THEME;
    }
    return Themes.DEFAULT_THEME;
  }

  private getThemeFromSettings(): Themes {
    return this.settingsService.getSetting(WebStorageKey.THEME) as Themes;
  }

  private setThemeInSettings(theme: Themes): void {
    this.settingsService.setSetting<string>(WebStorageKey.THEME, theme);
  }
}
