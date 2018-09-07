import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // two other ways do this
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>', // can do this inline
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverComponent = false;
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  // new method
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'This server was created!' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // tells typescript that its the html value we want
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
