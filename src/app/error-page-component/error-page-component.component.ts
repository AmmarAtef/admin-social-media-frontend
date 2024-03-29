import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page-component',
  templateUrl: './error-page-component.component.html',
  styleUrl: './error-page-component.component.css'
})
export class ErrorPageComponentComponent implements OnInit {
  errorMessage: string | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }

}
