import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
// @ts-ignore
import {CreateComponent} from "./components/users/create/create.component";
// @ts-ignore
import {LogInComponent} from "./components/users/log-in/log-in.component";
import {HomeComponent} from "./components/home/home.component";
import {GameMenuComponent} from "./components/game-menu/game-menu.component";
import {HowToPlayComponent} from "./components/how-to-play/how-to-play.component";
import {MyProfileComponent} from "./components/my-profile/my-profile.component";
import { ShowUsersComponent } from './components/users/show-users/show-users.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //home
  { path: 'new-account', component: CreateComponent }, //create a new user
  { path: 'log-in', component: LogInComponent }, //logIn user
  { path: 'menu', component: GameMenuComponent }, //gameMenu component
  { path: 'my-profile', component: MyProfileComponent }, //gameMenu component
  { path: 'how-to-play', component: HowToPlayComponent }, //gameMenu component
  { path: 'all-users', component: ShowUsersComponent }, //gameMenu component
  { path: 'pokedex', component: PokemonsComponent }, //pokemons component
  { path: '**', redirectTo: '', pathMatch: 'full' }, //pokemons component

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
