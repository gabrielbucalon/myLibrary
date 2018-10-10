import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { LegalAdviceComponent } from './auth/legal-advice/legal-advice.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    LegalAdviceComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
