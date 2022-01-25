export interface ReposInfo{
  total_count: number;
  items: Repo[];
}
export interface Repo{
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  pushed_at: string;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
  }
}