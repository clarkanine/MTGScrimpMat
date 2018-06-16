import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Player } from '../data-model';
import { PlayerServiceService } from '../player-service.service';
import { MatDialog, MatTable } from '@angular/material';
import { PlayerDialogComponent } from '../player-dialog/player-dialog.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns = ['points', 'name', 'deck', 'record', 'options'];
  dataSource: Player[];
  response: any;
  profile: any;

  constructor(
    private playerService: PlayerServiceService, 
    public dialog: MatDialog, 
    private changeDetectorRefs: ChangeDetectorRef,
    private authService: AuthService){
  }

  ngOnInit()
  {
    this.getPlayersFromDb();
  }

  getPlayersFromDb()
  {
    this.playerService.getData().subscribe(
      (data: Player[]) => 
      this.dataSource = data);
  }

  getRecord(player: Player)
  {
    var record = player.wins + '-' + player.losses;
    if(player.draws > 0)
      record += '-' + player.draws;

    return record;
  }

  getPoints(player: Player)
  {
    return player.wins * 3 + player.draws * 1;
  }

  openSaveDialog(player: Player)
  {
    let dialogRef = this.dialog.open(PlayerDialogComponent, {
      width: '500px',
      data: { player }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result)
       return;

      console.log('The dialog was closed');
      this.playerService.addPlayer(result as Player).subscribe((response: any) => this.response = response);
      this.getPlayersFromDb();
      // this.dataSource.push(result);
      this.table.renderRows();
    });
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
      //TODO don't uniquely identify by name. Make some sort of ID
      var playerToEdit = this.dataSource.find(player => player.id === result.id)
      
      playerToEdit.name = result.name;
      playerToEdit.deck = result.deck;
      playerToEdit.wins = result.wins;
      playerToEdit.losses = result.losses;
      playerToEdit.draws = result.draws;
      playerToEdit.deckList = result.deckList;

      // this.table.renderRows();
      this.playerService.updatePlayer(result as Player).subscribe((response: any) => this.response = response);
      this.getPlayersFromDb();
    });
  }

  createNewPlayer()
  {
    this.openSaveDialog(new Player());
  }

  deletePlayer(player: Player)
  {
    console.log('deleting ' + player.name);
    this.playerService.deletePlayer(player as Player).subscribe((response: any) => this.response = response);
    this.getPlayersFromDb();
  }
  
}