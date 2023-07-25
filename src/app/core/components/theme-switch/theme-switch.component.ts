import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Themes } from '../../models/themes.enum';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'basic-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitchComponent {
  // eslint-disable-next-line @typescript-eslint/typedef
  public THEMES = Themes;

  constructor(private themeService: ThemeService) {}

  public changeTheme(theme: Themes): void {
    this.themeService.setTheme(theme);
  }
}
