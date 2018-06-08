import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Player }        from '../data-model';
import { PlayerServiceService } from '../player-service.service';

import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver/FileSaver';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit, OnChanges{
  @Input() filePrefix: string;

  playerForm: FormGroup;
  selectedPlayer: Player;
  players: Player[];

  constructor(private fb: FormBuilder, private playerService: PlayerServiceService) { }

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

  saveValues() {
    // if(!this.selectedPlayer)
    //   return;
    this.saveOneValue(this.playerForm.value.name ? this.selectedPlayer.name : 'Name', 'name');
    this.saveOneValue(this.playerForm.value.deck ? this.selectedPlayer.deck : 'Deck', 'deck');
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
}
