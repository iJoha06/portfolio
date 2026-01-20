import { Component, inject } from '@angular/core';
import { Theme } from '../../services/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private theme = inject(Theme);
  currentTheme: string = 'auto';

  ngOnInit(): void {
    this.currentTheme = this.theme.getCurrentTheme();
  }

  changeTheme(theme: 'light' | 'dark' | 'auto') {
    this.theme.setTheme(theme);
    this.currentTheme = theme;
    console.log('THIS IS YOUR MODE', this.currentTheme);
  }
}