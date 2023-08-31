import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { HeaderComponent } from './header/header.component';
import { UseractionComponent } from './useraction/useraction.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UseractionComponent,
    LoginComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
