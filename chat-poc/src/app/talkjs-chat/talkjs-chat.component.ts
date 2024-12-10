import { Component, Input } from '@angular/core';

import Talk from 'talkjs';

/**
 * Component handling the chat of Talk.js
 */
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

    // Initialize Talk.
    Talk.ready.then((): void => {

      // Create the customer user.
      const customer = new Talk.User('sample_user_alice');

      // Create the support user.
      const support = new Talk.User({
        id: 'support',
        name: 'Support',
        email: 'support@example.com',
        photoUrl: 'https://talkjs.com/new-web/avatar-7.jpg',
        welcomeMessage: 'Hi, how can i help?',
      });

      // Create the session by picking who is the current user: support or customer.
      const session = new Talk.Session({
        appId: 't4HMEgPR',
        me: this.isSupport ? support : customer,
      });

      // Create or fetch the conversation and assign the participants.
      const conversation = session.getOrCreateConversation(
        'new_conversation'
      );
      conversation.setParticipant(customer);
      conversation.setParticipant(support);
    
      // Create the pop up of the conversation, select it and renders it.
      const popup = session.createPopup();
      popup.select(conversation);
      popup.mount({ show: false });
    });
  }
}
