import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { ActorcardComponent } from './homepage/actorcard/actorcard.component';
import { ContentcardComponent } from './contentcard/contentcard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MinicarouselComponent } from './homepage/minicarousel/minicarousel.component';
import { ActorinfocardComponent } from './actorinfocard/actorinfocard.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { MoviepicturesComponent } from './moviepictures/moviepictures.component';
import { UsersactionsComponent } from './usersactions/usersactions.component';
import { LoginComponent } from './login/login.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { LikedcommentsComponent } from './likedcomments/likedcomments.component';
import { UpdatepaswordComponent } from './updatepasword/updatepasword.component';
import { MycommentsComponent } from './mycomments/mycomments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ActorcardComponent,
    ContentcardComponent,
    SidebarComponent,
    MinicarouselComponent,
    ActorinfocardComponent,
    MovieinfoComponent,
    MoviepicturesComponent,
    UsersactionsComponent,
    LoginComponent,
    JoinusComponent,
    ResetpasswordComponent,
    UserpanelComponent,
    EditprofileComponent,
    TimelineComponent,
    LikedcommentsComponent,
    UpdatepaswordComponent,
    MycommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }