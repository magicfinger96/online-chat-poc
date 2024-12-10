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
  public customerName: string = "";
  @Output() authenticate = new EventEmitter<{
    isSupport: boolean;
    customerName: string;
  }>();

  public onAuthentication(isSupport: boolean) {
    this.authenticate.emit({ isSupport: isSupport, customerName: this.customerName});
  }
}
