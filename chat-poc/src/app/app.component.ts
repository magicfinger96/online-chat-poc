import { Component, EventEmitter } from '@angular/core';
import { TalkjsChatComponent } from './talkjs-chat/talkjs-chat.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TalkjsChatComponent, AuthenticationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private customerName!: String;
  private isSupport!: boolean;

  public authenticated: boolean = false;

  public onAuthentication(data: { isSupport: boolean, customerName: string}) {
    this.customerName = data.customerName;
    this.isSupport = data.isSupport;

    if( this.isSupport || this.customerName){
      this.authenticated = true;
    }
  }
}
