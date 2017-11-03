import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GtoolbarComponent} from './golbatoolbar/gtoolbar/gtoolbar.component';

const routes: Routes = [
  {path: 'connection', loadChildren: 'app/connection/connection.module#ConnectionModule'},
  {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  {path: 'collect-money', loadChildren: 'app/collect_money/collect-money.module#CollectMoneyModule'},
  {path: '', component: GtoolbarComponent},
  {path: '**', redirectTo: 'connection/connection'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
