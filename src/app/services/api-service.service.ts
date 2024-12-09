import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../models/game';
import { environment } from '../environment/environment'
import { GameInfo } from '../models/gameInfo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl = environment.apiUrl;
  
  constructor( private httpClient: HttpClient) { }

  getGames(fetchGame: string): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.baseUrl + `games?title=${fetchGame}&limit=10`);
  }

  getGame(idGame: number): Observable<GameInfo> {
    return this.httpClient.get<GameInfo>(this.baseUrl + `games?id=${idGame}`)
  }
}