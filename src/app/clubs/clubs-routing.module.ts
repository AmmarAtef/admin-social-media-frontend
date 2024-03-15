import { RouterModule, Routes } from "@angular/router";
import { ClubsListComponent } from "./clubs-list/clubs-list.component";
import { NgModule } from "@angular/core";
import { AddClubsComponent } from "./add-clubs/add-clubs.component";
import { EditClubsComponent } from "./edit-clubs/edit-clubs.component";


const clubsRoutes: Routes = [
  { path: '', component: ClubsListComponent },
  { path: 'edit', component: EditClubsComponent },
  { path: 'add', component: AddClubsComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(clubsRoutes)
  ],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
