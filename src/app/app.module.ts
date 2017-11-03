import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSidenavModule,
  MatTab,
  MatTableDataSource,
  MatTableModule, MatTabNav, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { GsidenavComponent } from './golbatoolbar/gsidenav/gsidenav.component';
import { GtoolbarComponent } from './golbatoolbar/gtoolbar/gtoolbar.component';
import {CdkTableModule} from "@angular/cdk/table";
import {NavItemComponent} from "./golbatoolbar/navitem/navitem.component";
import {TabGroupComponent} from "./golbatoolbar/tab-group/tab-group.component";

@NgModule({
  declarations: [
    AppComponent,
    GsidenavComponent,
    GtoolbarComponent,
    NavItemComponent,
    TabGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    CdkTableModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
