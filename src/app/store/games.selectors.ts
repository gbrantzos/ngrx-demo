import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureGames, GameState } from './games.reducers';

const gameStateSelector = createFeatureSelector<GameState>(featureGames);

export const selectGamesCollection = createSelector(
  gameStateSelector,
  (state: GameState) => state.games
)

export const selectGamesIsPending = createSelector(
  gameStateSelector,
  (state: GameState) => state.isPending
)

export const selectGamesError = createSelector(
  gameStateSelector,
  (state: GameState) => state.errorMessage
)
