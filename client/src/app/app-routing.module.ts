import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import {IndexComponent} from "./components/index/index.component";
import {CreateComponent} from "./components/users/create/create.component";
import {LogInComponent} from "./components/users/log-in/log-in.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'new-account', component: CreateComponent }, //create a new user
  { path: 'log-in', component: LogInComponent }, //logIn user
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
