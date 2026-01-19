import { Component, signal } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Header } from "./components/header/header";
import { Content } from "./components/content/content";
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  constructor(private router: Router) { 
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
}
