import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { GithubUser, GithubRepo } from '../../models/github.models';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  providers: [GithubService, MessageService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    TableModule,
    ProgressSpinnerModule,
    SearchFormComponent,
    HeaderComponent
  ],
})
export class UserPageComponent {
  user?: GithubUser;
  repos: GithubRepo[] = [];
  loading = false;

  constructor(
    private githubService: GithubService,
    private messageService: MessageService
  ) {}

  onSearch(username: string) {
  this.loading = true;
  this.user = undefined;
  this.repos = [];

  this.githubService.getUser(username).subscribe({
    next: user => this.user = user,
    error: () => {
      this.user = undefined;
      this.loading = false;
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Usuário não encontrado!'
      });
    }
  });

  this.githubService.getRepos(username).subscribe({
    next: repos => this.repos = repos,
    complete: () => {
      this.loading = false;
      if (this.repos.length === 0) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Nenhum repositório encontrado',
          detail: 'Este usuário não possui repositórios públicos.'
        });
      }
    },
    error: () => {
      this.loading = false;
    }
  });
}

}
