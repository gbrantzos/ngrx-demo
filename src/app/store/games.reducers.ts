import { Game } from './games.model';
import { createReducer, on } from '@ngrx/store';
import { gamesActions } from './games.actions';
import { BaseState, errorState, initialBaseState, pendingState } from './base.state';

export const featureGames = 'games';

export interface GameState extends BaseState {
  games: ReadonlyArray<Game>
}

const initialState: GameState = {
  games: [],
  ...initialBaseState()
}

export const gamesReducer = createReducer(
  initialState,
  on(gamesActions.findGamesRequested, state => ({
    ...state,
    ...pendingState()
  })),
  on(gamesActions.findGamesSucceeded, (state, {games}) => ({
    ...state,
    games: games,
    ...initialBaseState()
  })),
  on(gamesActions.findGamesFailed, (state, {errorMessage}) => ({
    ...state,
    games: [],
    ...errorState(errorMessage)
  }))
)
