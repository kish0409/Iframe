import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iframe';
  safeUrl;
  constructor(private _sanitizer :DomSanitizer){}
  
  ngOnInit(){
    this.safeUrl=this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/H5JubkIy_p8");
  }
}
