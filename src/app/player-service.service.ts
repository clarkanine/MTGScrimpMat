

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map'

import { Player } from './data-model';
import { AuthService } from './auth.service';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService implements OnInit{

  // api = 'https://warm-beyond-34559.herokuapp.com/players';
  api = 'api/players'
  players: Observable<Player[]>;
  profile: any;
  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(){
  }

  getData()
  {
      if(!this.auth.userProfile || !this.auth.userProfile.name) {
        return;
      }
      const headers = new Headers();
      headers.append('Accept', 'text/plain');

      return this.http.get(this.api+'/'+ Md5.hashStr(this.auth.getEmail()));
  }

  addPlayer(player: Player)
  {
    player.userIdentifier = Md5.hashStr(this.auth.userProfile.name).toString();
    const headers = new Headers();
    headers.append('Accept', 'text/plain');

    return this.http.post(this.api, (player));
  }

  updatePlayer(player: Player)
  {
    player.userIdentifier = Md5.hashStr(this.auth.userProfile.name).toString();
    const headers = new Headers();
    headers.append('Accept', 'text/plain');

    return this.http.put(this.api, (player));
  }

  deletePlayer(player: Player)
  {
    const headers = new Headers();
    headers.append('Accept', 'text/plain');

    return this.http.delete(this.api + '/' + player._id);
  }
}
