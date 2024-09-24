import { Component } from '@angular/core';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    AddItemComponent,
    ItemsListComponent,
  ],
})
export class AppComponent {}
