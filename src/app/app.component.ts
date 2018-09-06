import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] // like this to include multiple stylesheets
  styles: [`   
    h3 {
      color:pink;
    }
  `]   // inline styles
})
export class AppComponent {
  title = 'app33333';
}
