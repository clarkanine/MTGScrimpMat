import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../data-model';

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
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.players = [new Player(), new Player()];
  }
}
