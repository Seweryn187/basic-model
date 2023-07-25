import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISettings, WebStorageKey } from '../models/web-storage-keys.enum';
import { WebStorageService } from './web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settingsSubject: BehaviorSubject<ISettings> = new BehaviorSubject<ISettings>(
    this.webStorageService.getLocalStorage(WebStorageKey.SETTINGS) ?? {},
  );

  public settings$: Observable<ISettings> = this.settingsSubject.asObservable();

  public get settingsValue(): ISettings {
    return this.settingsSubject.value;
  }

  constructor(private webStorageService: WebStorageService) {}

  private getSettingsFromWebStorage(): ISettings {
    return this.webStorageService.getLocalStorage<ISettings>(WebStorageKey.SETTINGS) ?? {};
  }

  private setSettingsInWebStorage(settings: ISettings): void {
    this.webStorageService.setLocalStorage(WebStorageKey.SETTINGS, settings);
  }

  public getSetting(key: keyof ISettings): string | null {
    const settings = this.getSettingsFromWebStorage();
    return settings[key] ?? null;
  }

  public setSetting<T>(key: string, data: T): void {
    this.settingsSubject.next(Object.assign(this.settingsValue, { [key]: data }));
    this.setSettingsInWebStorage(this.settingsValue);
  }
}
