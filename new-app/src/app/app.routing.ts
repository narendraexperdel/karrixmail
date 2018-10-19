import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './mail/mail.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthcodeComponent } from './authcode/authcode.component';
import { UsersComponent } from './users/users.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';

const appRoutes: Routes = [
    
    { path : '' , component : HomeComponent },
    { path : "mail" , component : MailComponent },
    { path : "app"  , component : AppComponent},
    { path : "authcode"  , component : AuthcodeComponent},
    { path : "users"  , component : UsersComponent},
    { path : "mail-detail", component : MailDetailComponent},
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);