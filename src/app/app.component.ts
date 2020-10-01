import { Component, DoCheck } from '@angular/core';
import { ParamsService } from './services/params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'paginaDomicilios';
  public url;
  constructor(){
  }
  ngDoCheck(){
    
  }
  
}
