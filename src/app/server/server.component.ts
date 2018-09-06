// make Angular understand what a component is
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',   // always prefix with app
    templateUrl: './server.component.html' // get the relative path of the template
})

// standard typescript class
export class ServerComponent {
    serverID: number = 10;
    serverStatus: string = 'offline';

    getServerStats() {
        return this.serverStatus;
    }
}