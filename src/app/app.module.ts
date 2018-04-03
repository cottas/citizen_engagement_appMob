import { CommentDetailsPage } from "../pages/comment-details/comment-details";
import { CommentsListPage } from "../pages/comments-list/comments-list";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateIssuePage } from '../pages/create-issue/create-issue';
import { IssueDetailsPage } from '../pages/issue-details/issue-details';
import { IssueListPage } from '../pages/issue-list/issue-list';
import { IssueMapPage } from '../pages/issue-map/issue-map';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { PictureProvider } from '../providers/picture/picture';
import { IssuesProvider } from '../providers/issues/issues';
import { SigninPage } from '../pages/signin/signin';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueDetailsPage,
    IssueListPage,
    IssueMapPage,
    LoginPage,
    CommentsListPage, 
    CommentDetailsPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LeafletModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateIssuePage,
    IssueDetailsPage,
    IssueListPage,
    IssueMapPage,
    LoginPage, 
    CommentsListPage, 
    CommentDetailsPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    Geolocation,
    Camera,
    PictureProvider,
    IssuesProvider,
    UsersProvider
  ]
})
export class AppModule {}
