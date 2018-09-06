import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // two other ways do this
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>', // can do this inline
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
