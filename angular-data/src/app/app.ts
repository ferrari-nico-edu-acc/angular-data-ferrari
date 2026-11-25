import { Component, signal } from '@angular/core';
import { HelloWorld } from './hello-world/hello-world';
import { UserList } from './user-list/user-list';

@Component({
  imports: [HelloWorld,UserList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-data');
}
