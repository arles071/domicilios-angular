import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {
  title = 'paginaDomicilios';
  constructor(private _router: Router) { }

  ngOnInit() {
    console.log(this._router.url);
    console.log('hola');
  }

}
