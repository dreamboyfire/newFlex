import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent, SaveUsersDialog} from './list/list.component';

const routes: Routes = [
  { path: '', children: [
    {path: 'list', component: UserListComponent},
    {path: 'save', component: SaveUsersDialog}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
