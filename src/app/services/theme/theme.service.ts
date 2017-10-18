import { Injectable } from '@angular/core';
import * as domHelper from '../../shared/helpers/dom.helper';
@Injectable()
export class ThemeService {
  egretThemes = [{
    name: 'purple-dark-theme',
    baseColor: '#9c27b0',
    isActive: false
  }, {
    name: 'pink-dark-theme',
    baseColor: '#e91e63',
    isActive: false
  }, {
    name: 'blue-light-theme',
    baseColor: '#247ba0',
    isActive: false
  }, {
    name: 'indigo-light-theme',
    baseColor: '#3f51b5',
    isActive: true
  }];
  activatedThemeName: String;
  constructor() {
    this.changeTheme({name: 'blue-light-theme'});
  }
  changeTheme(theme) {
    domHelper.changeTheme(this.egretThemes, theme.name);
    this.egretThemes.forEach((t) => {
      t.isActive = false;
      if(t.name === theme.name) {
        t.isActive = true;
        this.activatedThemeName = theme.name;
      }
    });
  }
}
