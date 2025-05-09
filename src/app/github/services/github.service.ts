import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubUser, GithubRepo } from '../models/github.models';

@Injectable({ providedIn: 'root' })
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiUrl}/${username}`);
  }

  getRepos(username: string): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>(`${this.apiUrl}/${username}/repos`);
  }
}

