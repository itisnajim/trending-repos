import { Component } from '@angular/core';
import { RepoService } from './services/repo/repo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trending-repos';
  constructor(repos: RepoService){
    repos.getRepos()
    .subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }
}
