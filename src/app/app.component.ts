import { Component } from '@angular/core';
import { PWAService } from './services/pwa/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trending Repos';
  // PWAService needed in the constructor to check if any new version exists!
  constructor(pWAService: PWAService){ }
}
