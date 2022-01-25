import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/services/repo/repo';
import { RepoService } from 'src/app/services/repo/repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  repos: Repo[] = [];
  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.repoService.getRepos()
    .subscribe({
      next: (v) => {
        if(v && v.items && v.items.length > 0){
          this.repos = this.repos.concat(v.items);
        }
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
  }

}
