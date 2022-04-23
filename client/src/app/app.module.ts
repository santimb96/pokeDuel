import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

//components
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateComponent } from './components/users/create/create.component';
import { LogInComponent } from './components/users/log-in/log-in.component';
import { ShowComponent } from './components/users/show/show.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CreateComponent,
    LogInComponent,
    ShowComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
