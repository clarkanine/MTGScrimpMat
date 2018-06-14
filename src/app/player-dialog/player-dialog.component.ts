import { Component, OnInit, Inject, SimpleChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Player } from '../data-model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements OnInit {
  playerForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<PlayerDialogComponent>,

  @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.data);

    this.playerForm = this.fb.group({
      name: '',
      deck: '',
      wins: 0,
      losses: 0,
      draws: 0
    })

    this.updatePlayerForm();
  }

  updatePlayerForm() {
    this.playerForm.reset({
      name: this.data.player.name ? this.data.player.name : '',
      deck: this.data.player.deck ? this.data.player.deck : '',
      wins: this.data.player.wins,
      losses: this.data.player.losses,
      draws: this.data.player.draws
    });
  }

  savePlayer() {
    this.data.player.name = this.playerForm.value.name;
    this.data.player.deck = this.playerForm.value.deck;
    this.data.player.wins = this.playerForm.value.wins;
    this.data.player.losses = this.playerForm.value.losses;
    this.data.player.draws = this.playerForm.value.draws;
  }

  onNoClick(): void {
    this.data = null;
    this.dialogRef.close();
  }

  submit() {
    this.savePlayer();
    if(!this.playerForm.valid)
      return;
    this.dialogRef.close();
  }

}
