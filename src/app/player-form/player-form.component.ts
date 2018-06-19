import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Player }        from '../data-model';
import { PlayerServiceService } from '../player-service.service';
import { PlayerDialogComponent } from '../player-dialog/player-dialog.component';

import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit, OnChanges{
  @Input() filePrefix: string;
  @Input() selectedPlayer: Player;
  @Output() selectedPlayerChange =  new EventEmitter<Player>();

  playerForm: FormGroup;
  // selectedPlayer: Player;
  players: Player[];

  constructor(private fb: FormBuilder,
              private playerService: PlayerServiceService,
              public dialog: MatDialog, ) { }

  ngOnChanges() {
    if(this.playerForm)
      this.updatePlayerForm();
  }

  ngOnInit() {
    this.playerService.getData().subscribe((data: Player[]) => this.players = data);
    this.playerForm = this.fb.group({
      name: '',
      deck: '',
      life: 20,
      poison: 0
    })

    this.updatePlayerForm();
    this.playerForm.valueChanges.subscribe(console.log);
  }

  updatePlayerForm() {
    this.playerForm.reset({
      name: this.selectedPlayer.name,
      deck: this.selectedPlayer.deck,
      life: 20,
      poison: 0
    });
  }

  playerChanged()
  {
    this.selectedPlayerChange.emit(this.selectedPlayer);
  }

  //TODO refactor this to use some sort of SaveService
  saveValues() {
    // if(!this.selectedPlayer)
    //   return;
    this.saveOneValue(this.playerForm.value.name ? this.playerForm.value.name : 'Name', 'name');
    this.saveOneValue(this.playerForm.value.deck ? this.playerForm.value.deck : 'Deck', 'deck');
    this.saveOneValue(this.playerForm.value.life+'', 'life');
    this.saveOneValue(this.playerForm.value.poison+'', 'poison');
    this.saveOneValue(this.getRecord(), 'record');
  }

  saveOneValue(value: string, field: string)
  {
    var str = JSON.stringify(value);
    while(str.indexOf('"') >= 0)
      str = str.replace('"', '');
    var blob = new Blob([str], {type: 'text/plain'});
    saveAs(blob, this.filePrefix + field +'.txt');
  }

  getRecord()
  {
    var str = this.selectedPlayer.wins +'-' + this.selectedPlayer.losses;
    if(this.selectedPlayer.draws > 0)
      str += this.selectedPlayer.draws;
    return str;
  }

  openEditDialog(player: Player)
  {
    let dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: '500px',
      data: { player }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(!result)
        return;

      var playerToEdit = this.players.find(player => player.id === result.id)
      
      playerToEdit.name = result.name;
      playerToEdit.deck = result.deck;
      playerToEdit.wins = result.wins;
      playerToEdit.losses = result.losses;
      playerToEdit.draws = result.draws;
      playerToEdit.deckList = result.deckList;

      // this.table.renderRows();
      this.playerService.updatePlayer(result as Player).subscribe((response: any) => 
      {
        this.playerService.getData().subscribe((data: Player[]) => this.players = data);
      });
    });
  }
}
