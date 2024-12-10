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

  /**
   * Tells if the user is the support or not.
   */
  public isSupport!: boolean;

  /**
   * Tells if the user is authenticated.
   */
  public authenticated: boolean = false;

  /**
   * Function called when the user picked its role.
   * 
   * @param isSupport true if the user is the support.
   */
  public onAuthentication(isSupport: boolean) {
    this.isSupport = isSupport;
    this.authenticated = true;
  }
}
