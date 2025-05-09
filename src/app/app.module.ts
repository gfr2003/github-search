import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MessageService } from 'primeng/api';

import { UserPageComponent } from './github/pages/user-page/user-page.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { SearchFormComponent } from './github/components/search-form/search-form.component';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppComponent,
        UserPageComponent,
        SearchFormComponent,
    ],

    providers: [
        MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
    ],
    bootstrap: []
})
export class AppModule { }

