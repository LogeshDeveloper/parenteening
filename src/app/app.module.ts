import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDh-uMvzLJkT5knIi9qQgHUVQBoHCJwhog',
  authDomain: 'angular-432d0.firebaseapp.com',
  databaseURL: 'https://angular-432d0.firebaseio.com',
  projectId: 'angular-432d0',
  storageBucket: 'angular-432d0.appspot.com',
  messagingSenderId: '434428323612'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
