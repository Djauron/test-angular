import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsState } from '../reducer/items.reducer';

export const selectItemsState = createFeatureSelector<ItemsState>('items');

export const selectAllItems = createSelector(
  selectItemsState,
  (state) => state.items
);
