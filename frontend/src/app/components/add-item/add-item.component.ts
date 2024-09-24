import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addItem } from '../../state/actions/items.actions';
import { Item } from '../../services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  standalone: true,
  imports: [FormsModule],
})
export class AddItemComponent {
  itemName: string = '';

  constructor(private store: Store) {}

  onSubmit(): void {
    if (this.itemName.trim()) {
      const newItem: Item = { id: Date.now(), name: this.itemName };
      this.store.dispatch(addItem({ item: newItem }));
      this.itemName = '';
    }
  }
}
