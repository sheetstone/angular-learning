import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent {
  showModules = true;
  public pageTitle: string = 'Welcome';
}
