import { Game } from './games.model';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGamesIsPending, selectGamesCollection, selectGamesError } from './games.selectors';
import { gamesActions } from './games.actions';

@Injectable({providedIn: 'root'})
export class GamesFacade {
  #store = inject(Store);

  games$: Observable<ReadonlyArray<Game>> = this.#store.select(selectGamesCollection)
  isPending$: Observable<boolean> = this.#store.select(selectGamesIsPending);
  error$: Observable<string | null> = this.#store.select(selectGamesError);

  find = (searchTerm: string | null = null) => this
    .#store
    .dispatch(gamesActions.findGamesRequested({searchTerm}));
}
