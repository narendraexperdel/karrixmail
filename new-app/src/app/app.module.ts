import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthcodeComponent } from './authcode/authcode.component';
import { UsersComponent } from './users/users.component';
import {UserPipe} from './users/user.filterpipe';
import { OrderModule } from 'ngx-order-pipe';
import { OrderByuser} from './users/user.orderby';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import {MailServiceService} from './mail-service.service'


@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HomeComponent,
    AuthcodeComponent,
    UsersComponent,
    UserPipe,
    OrderByuser,
    MailDetailComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    routing,
    HttpClientModule,
    OrderModule,
    
  ],
  providers: [MailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }