import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadItems, loadItemsSuccess, addItem, addItemSuccess } from '../actions/items.actions';
import { ItemsService } from '../../services/items.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class ItemsEffects {
  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}

  loadItems$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.itemsService.getItems().pipe(
          map((items) => loadItemsSuccess({ items }))
        )
      )
    )
  );

  addItem$ = createEffect(() => 
    this.actions$.pipe(
      ofType(addItem),
      mergeMap((action) =>
        this.itemsService.addItem(action.item).pipe(
          map((item) => addItemSuccess({ item }))
        )
      )
    )
  );
}
