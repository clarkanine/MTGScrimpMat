"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_model_1 = require("../data-model");
var player_service_service_1 = require("../player-service.service");
var material_1 = require("@angular/material");
var player_dialog_component_1 = require("../player-dialog/player-dialog.component");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(playerService, dialog, changeDetectorRefs) {
        this.playerService = playerService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['points', 'name', 'deck', 'record', 'options'];
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        this.getPlayersFromDb();
    };
    PlayerListComponent.prototype.getPlayersFromDb = function () {
        var _this = this;
        this.playerService.getData().subscribe(function (data) { return _this.dataSource = data; });
    };
    PlayerListComponent.prototype.getRecord = function (player) {
        var record = player.wins + '-' + player.losses;
        if (player.draws > 0)
            record += '-' + player.draws;
        return record;
    };
    PlayerListComponent.prototype.getPoints = function (player) {
        return player.wins * 3 + player.draws * 1;
    };
    PlayerListComponent.prototype.openSaveDialog = function (player) {
        var _this = this;
        var dialogRef = this.dialog.open(player_dialog_component_1.PlayerDialogComponent, {
            width: '500px',
            data: { player: player }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result)
                return;
            console.log('The dialog was closed');
            _this.playerService.addPlayer(result).subscribe(function (response) { return _this.response = response; });
            _this.getPlayersFromDb();
            // this.dataSource.push(result);
            _this.table.renderRows();
        });
    };
    PlayerListComponent.prototype.openEditDialog = function (player) {
        var _this = this;
        var dialogRef = this.dialog.open(player_dialog_component_1.PlayerDialogComponent, {
            width: '500px',
            data: { player: player }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            if (!result)
                return;
            //TODO don't uniquely identify by name. Make some sort of ID
            var playerToEdit = _this.dataSource.find(function (player) { return player.id === result.id; });
            playerToEdit.name = result.name;
            playerToEdit.deck = result.deck;
            playerToEdit.wins = result.wins;
            playerToEdit.losses = result.losses;
            playerToEdit.draws = result.draws;
            _this.table.renderRows();
        });
    };
    PlayerListComponent.prototype.createNewPlayer = function () {
        this.openSaveDialog(new data_model_1.Player());
    };
    PlayerListComponent.prototype.deletePlayer = function (player) {
        var _this = this;
        console.log('deleting ' + player.name);
        this.playerService.deletePlayer(player).subscribe(function (response) { return _this.response = response; });
        this.getPlayersFromDb();
    };
    __decorate([
        core_1.ViewChild(material_1.MatTable),
        __metadata("design:type", material_1.MatTable)
    ], PlayerListComponent.prototype, "table", void 0);
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            templateUrl: './player-list.component.html',
            styleUrls: ['./player-list.component.css']
        }),
        __metadata("design:paramtypes", [player_service_service_1.PlayerServiceService, material_1.MatDialog, core_1.ChangeDetectorRef])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;
//# sourceMappingURL=player-list.component.js.map