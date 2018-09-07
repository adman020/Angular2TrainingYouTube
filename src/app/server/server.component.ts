// make Angular understand what a component is
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',   // always prefix with app
    templateUrl: './server.component.html' // get the relative path of the template
    styles: [`
        .online {
            color: white;
        }
    `]
})

// standard typescript class
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        // shorthand if else - if greater than 0.5 it's online otherwise offline
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStats() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}