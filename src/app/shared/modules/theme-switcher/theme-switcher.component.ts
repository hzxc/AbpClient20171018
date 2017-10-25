import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'shared-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  private themes:any[];
  constructor(private themeService: ThemeService) {
    this.themes = this.themeService.themes;
   }
  ngOnInit() {
  }

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

}
