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
  public isSupport!: boolean;
  public authenticated: boolean = false;

  public onAuthentication(isSupport: boolean) {
    this.isSupport = isSupport;
    this.authenticated = true;
  }
}
