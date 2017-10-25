import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ThemeService } from '../../../services/theme/theme.service';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    MatIconModule
  ],
  providers: [ThemeService],
  declarations: [ThemeSwitcherComponent],
  exports:[ThemeSwitcherComponent]
})
export class ThemeSwitcherModule { }
