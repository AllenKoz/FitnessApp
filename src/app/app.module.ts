import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

import { IndexComponent } from './index/index.component';
import { GameService } from './modules/game.service';
import { LoginComponent } from './login/login.component';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,

    IndexComponent,
    LoginComponent,
    ExerciseComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule, FormsModule,
    RouterModule.forRoot([

        { path: "home", component: IndexComponent },
        { path: "login", component: LoginComponent },
        { path: "exercise", component:ExerciseComponent },
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
