import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ListLeaguesComponent } from "./leagues/list-leagues/list-leagues.component";
import { canActivateChild } from "./auth-guard.service";
import { ErrorPageComponentComponent } from "./error-page-component/error-page-component.component";

const appRoutes: Routes = [
  {
    path: '', component: ListLeaguesComponent
  },
  {
    path: 'clubs',
    loadChildren: () => import('../app/clubs/clubs.module').then(x => x.ClubsModule),
    canActivateChild: [canActivateChild]
  },
  {
    path: 'not-found',
    component: ErrorPageComponentComponent,
    data: { message: 'Page not found!' }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
