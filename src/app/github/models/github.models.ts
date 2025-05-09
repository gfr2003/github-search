export interface GithubUser {
  login: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
}

export interface GithubRepo {
  name: string;
  stargazers_count: number;
  html_url: string;
  description: string;
}