import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  private url: string;
  
  constructor() {}

  ngOnInit() {
    //console.log(this._router.url);
  }

}
