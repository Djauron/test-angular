import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess, addItemSuccess } from '../actions/items.actions';
import { Item } from '../../services/items.service';

export interface ItemsState {
  items: Item[];
}

export const initialState: ItemsState = {
  items: [],
};

export const itemsReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(addItemSuccess, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  }))
);
