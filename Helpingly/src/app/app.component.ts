import { Component } from '@angular/core';

@Component({
  selector: 'career-app',
  template: ` 
  <router-outlet></router-outlet>
  `
})

export class CareerAppComponent {
  title = 'Career Application';
}
