

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

import { Player } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  api = 'https://warm-beyond-34559.herokuapp.com/players';
  players: Observable<Player[]>;
  constructor(private http: HttpClient) { }

  getData()
  {
      const headers = new Headers();
      headers.append('Accept', 'text/plain');

      return this.http.get(this.api);
      // return this.http.get('https://api.magicthegathering.io/v1/cards');
  }

  addPlayer(player: Player)
  {
    const headers = new Headers();
    headers.append('Accept', 'text/plain');

    return this.http.post(this.api, (player));
  }

  deletePlayer(player: Player)
  {
    const headers = new Headers();
    headers.append('Accept', 'text/plain');

    return this.http.delete(this.api + '/' + player._id);
  }
}
