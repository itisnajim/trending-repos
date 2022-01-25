import { Injectable } from '@angular/core';
import { ConnectivityService } from '../connectivity/connectivity.service';
import { ReposInfo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  public static MAIN_API = "https://api.github.com/search/repositories";

  constructor(private connectivityService: ConnectivityService) { }

  getRepos(
    page = 1,
    afterDate = new Date(new Date().setDate(new Date().getDate() - 30)),
    sort = "stars",
    order: 'desc' | 'asc' = 'desc'
  ){
    const query = {
      q: 'created:>'+RepoService.dateToStr(afterDate),
      sort,
      order,
      page
    }
    return this.connectivityService.do<ReposInfo>(
      RepoService.MAIN_API,
      query
    );
  }

  public static dateToStr(date: Date){
    const day = date.getDate() - 1 < 10 ? `0${date.getDate() - 1}` :date.getDate() - 1 ;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return [year, month, day].join("-");
  }
}
