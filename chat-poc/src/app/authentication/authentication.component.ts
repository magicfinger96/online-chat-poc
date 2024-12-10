import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  @Output() authenticate = new EventEmitter<boolean>();

  public onAuthentication(isSupport: boolean) {
    this.authenticate.emit(isSupport);
  }
}
