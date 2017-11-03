import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MAT_PLACEHOLDER_GLOBAL_OPTIONS,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule, MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule, MatSlideToggleModule,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollectMoneyRoutingModule} from "./collect-money-routing.module";
import {CollectMoneyHomeComponent, CollectMoneyInfoDialog} from "./home/home.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CollectMoneyRoutingModule,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  declarations: [CollectMoneyHomeComponent, CollectMoneyInfoDialog]
})
export class CollectMoneyModule { }
