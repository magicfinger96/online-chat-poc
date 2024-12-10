import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Component that handles the authentication UI, where the user picks his role.
 */
@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  
  @Output() authenticate = new EventEmitter<boolean>();

  /**
   * This function is called when the user hit a button "support" or "customer".
   * 
   * @param isSupport true if the user is support.
   */
  public onAuthentication(isSupport: boolean) {
    this.authenticate.emit(isSupport);
  }
}
