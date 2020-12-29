import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameModel } from '../model/gamemodel';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  public getGame(name: String): Observable<GameModel[]> {
    return this.http.get<GameModel[]>('api/' + name);
  }

  public post(game: GameModel): Observable<GameModel> {
    return this.http.post<GameModel>('api/start/' + game.gameId, game);
  }
}
