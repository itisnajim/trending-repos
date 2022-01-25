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
  page = 1;
  loading = true;
  errorMsg = '';
  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.loadRepos()
  }

  loadRepos(){
    this.loading = true; 
    this.errorMsg = '';
    this.repoService.getRepos(this.page)
    .subscribe({
      next: (v) => {
        this.loading = false;
        if(v && v.items && v.items.length > 0){
          this.repos = this.repos.concat(v.items);
          this.page++;
        }
      },
      error: (e) => {
        this.loading = false;
        // showing the message
        this.errorMsg = JSON.stringify(e);
        // make the error message dissapear after 3 sec!
        setTimeout(() => {
          this.errorMsg = '';
        }, 3000);
      }
    })
  }

  onScroll() {
    this.loadRepos();
  }

}
