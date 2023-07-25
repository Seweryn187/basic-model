import { Themes } from './themes.enum';

export enum WebStorageKey {
  SETTINGS = 'settings',
  THEME = 'theme',
}

export interface ISettings {
  theme?: Themes;
}
