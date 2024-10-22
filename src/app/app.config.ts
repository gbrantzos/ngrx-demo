import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { featureGames, gamesReducer } from './store/games.reducers';
import { provideEffects } from '@ngrx/effects';
import { gamesEffects } from './store/games.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore(),
    provideState({name: featureGames, reducer: gamesReducer}),
    provideEffects(gamesEffects)
  ]
};
