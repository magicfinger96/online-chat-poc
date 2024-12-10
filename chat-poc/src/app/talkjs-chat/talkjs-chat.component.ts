import { Component, Input } from '@angular/core';

import Talk from 'talkjs';

@Component({
  selector: 'app-talkjs-chat',
  standalone: true,
  imports: [],
  template: '',
  styles: '',
})
export class TalkjsChatComponent {

  @Input() isSupport!: boolean;

  constructor() {
    Talk.ready.then((): void => {
      const customer = new Talk.User('sample_user_alice');

      const support = new Talk.User({
        id: 'support',
        name: 'Support',
        email: 'support@example.com',
        photoUrl: 'https://talkjs.com/new-web/avatar-7.jpg',
        welcomeMessage: 'Hi, how can i help?',
      });



      const session = new Talk.Session({
        appId: 't4HMEgPR',
        me: this.isSupport ? support : customer,
      });

      const conversation = session.getOrCreateConversation(
        'new_conversation'
      );
      conversation.setParticipant(customer);
      conversation.setParticipant(support);
    
      const popup = session.createPopup();
      popup.select(conversation);
      popup.mount({ show: false });
    });
  }
}
