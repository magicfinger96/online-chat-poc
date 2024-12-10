import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TalkjsChatComponent } from './talkjs-chat/talkjs-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TalkjsChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-poc';
}
