import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserItem } from './user-item/user-item';

@Component({
  imports: [HelloWorld,UserItem],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-data');
}
