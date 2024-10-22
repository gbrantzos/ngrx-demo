import { createAction, props } from '@ngrx/store';
import { Game } from './games.model';

const findGamesRequested = createAction(
  '[Games List] Find games requested',
  props<{ searchTerm: string | null }>()
)
const findGamesSucceeded = createAction(
  '[Games List] Find games succeeded',
  props<{ games: Game[] }>(),
)
const findGamesFailed = createAction(
  '[Games List] Find games failed',
  props<{ errorMessage: string }>()
)
export const gamesActions = {
  findGamesRequested,
  findGamesSucceeded,
  findGamesFailed
}
