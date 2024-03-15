import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ClubsModule } from "./clubs/clubs.module";
import { AppRoutingModule } from "./app-routing.module";
import { ListLeaguesComponent } from './leagues/list-leagues/list-leagues.component';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { ErrorPageComponentComponent } from "./error-page-component/error-page-component.component";

@NgModule({
  declarations: [
    AppComponent,
    ListLeaguesComponent,
    ListLeaguesComponent,
    ErrorPageComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClubsModule
  ],
  bootstrap: [AppComponent],
  providers:[AuthService]
})
export class AppModule { }
