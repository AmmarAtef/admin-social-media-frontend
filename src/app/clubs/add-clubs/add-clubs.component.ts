import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clubs',
  templateUrl: './add-clubs.component.html',
  styleUrl: './add-clubs.component.css'
})
export class AddClubsComponent {


  constructor(private route:Router){}
  hasUnsavedChanges = true;

}
