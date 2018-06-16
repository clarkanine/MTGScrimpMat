import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../data-model';
import { PlayerServiceService } from '../player-service.service';

import { CardFinderComponent } from '../card-finder/card-finder.component';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {

  player1: Player;
  player2: Player;
  players: Player[];
  constructor(private http: HttpClient, public playerService: PlayerServiceService) { }

  ngOnInit() {
    this.players = [new Player(), new Player()];
    this.players[0] = this.playerService.getSelectedPlayerByIndex(0);
    this.players[1] = this.playerService.getSelectedPlayerByIndex(1);
  }

  setCachedPlayerForIndex(i: number, player: Player)
  {
    this.playerService.setSelectedPlayerByIndex(i, player);

    this.players[i] = this.getCachedPlayerForIndex(i);
  }

  getCachedPlayerForIndex(i: number)
  {
    return this.playerService.getSelectedPlayerByIndex(i);
  }
}
