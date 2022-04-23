import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
// @ts-ignore
import {IndexComponent} from "./components/index/index.component";
// @ts-ignore
import {CreateComponent} from "./components/users/create/create.component";
// @ts-ignore
import {LogInComponent} from "./components/users/log-in/log-in.component";
// @ts-ignore
import {ShowComponent} from "./components/users/show/show.component";
// @ts-ignore
import {InterfaceComponent} from "./interface/interface.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'new-account', component: CreateComponent }, //create a new user
  { path: 'log-in', component: LogInComponent }, //logIn user
  { path: 'myProfile', component: ShowComponent }, //show user's data information
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
