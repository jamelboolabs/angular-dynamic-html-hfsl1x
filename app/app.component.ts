import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = "Blog Title";
  body =  `
    <p>random paragraph</p>
    <hello name="User"></hello>
  `;

  constructor(private sanitizer: DomSanitizer){
  }


  
}
