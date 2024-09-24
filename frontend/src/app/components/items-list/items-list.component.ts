import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Item } from '../../services/items.service';
import { loadItems } from '../../state/actions/items.actions';
import { selectAllItems } from '../../state/selectors/items.selectors';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ItemsListComponent implements OnInit {
  items$: Observable<Item[]>;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItems);
  }

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}
