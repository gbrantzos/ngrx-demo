import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Game } from './games.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  get(searchTerm: string | null): Observable<Game[]> {
    const count = Math.floor(Math.random() * 20) + 1;
    if (count == 13) {
      return throwError(() => new Error('Failed'));
    }
    const games = [...Array<number>(count).keys()].map(i => ({
      code: `GM.${i + 1}`,
      description: `Game ${i + 1}`
    } as Game));
    return of(games).pipe(delay(200))
  }
}
