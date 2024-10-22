import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { gamesActions } from './games.actions';
import { switchMap, tap } from 'rxjs';
import { GamesService } from './games.service';
import { mapResponse } from '@ngrx/operators';

const searchGames = createEffect(
  () => {
    const gamesService = inject(GamesService);
    return inject(Actions).pipe(
      ofType(gamesActions.findGamesRequested),
      switchMap(({searchTerm}) => gamesService.get(searchTerm).pipe(
        mapResponse({
          next: (games) => gamesActions.findGamesSucceeded({games}),
          error: (error: { message: string }) =>
            gamesActions.findGamesFailed({errorMessage: `Could not retrieve games - ${error}`})
        })
      ))
    )
  },
  {functional: true}
)


const displayError = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(gamesActions.findGamesFailed),
      tap(({errorMessage}) => alert(errorMessage))
    );
  },
  {functional: true, dispatch: false}
);

export const gamesEffects = {
  searchGames,
  displayError
}
