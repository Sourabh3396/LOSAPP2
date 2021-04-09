import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './Shared/nav/nav.component';
import { SidenavComponent } from './Shared/sidenav/sidenav.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { MainoutletComponent } from './mainoutlet/mainoutlet.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SidenavComponent,
    FooterComponent,
    MainoutletComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ServiceWorkerModule.register('my-service-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerImmediately"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
