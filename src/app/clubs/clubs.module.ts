import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsListComponent } from './clubs-list/clubs-list.component';
import { ClubsRoutingModule } from './clubs-routing.module';
import { RouterOutlet } from '@angular/router';
import { AddClubsComponent } from './add-clubs/add-clubs.component';
import { EditClubsComponent } from './edit-clubs/edit-clubs.component';



@NgModule({
  declarations: [
    ClubsListComponent,
    AddClubsComponent,
    EditClubsComponent
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule
  ],
  exports:[
    ClubsListComponent,
    AddClubsComponent,
    EditClubsComponent
  ]
})
export class ClubsModule { }
