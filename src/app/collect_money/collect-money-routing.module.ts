import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectMoneyHomeComponent, CollectMoneyInfoDialog} from "./home/home.component";

const routes: Routes = [
  { path: '', children: [
    {path: 'home', component: CollectMoneyHomeComponent},
    {path: 'save', component: CollectMoneyInfoDialog}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectMoneyRoutingModule { }
