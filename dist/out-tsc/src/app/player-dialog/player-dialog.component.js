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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var PlayerDialogComponent = /** @class */ (function () {
    function PlayerDialogComponent(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
    }
    PlayerDialogComponent.prototype.ngOnChanges = function (changes) {
        console.log(this.data);
    };
    PlayerDialogComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.playerForm = this.fb.group({
            name: '',
            deck: '',
            wins: 0,
            losses: 0,
            draws: 0
        });
        this.updatePlayerForm();
    };
    PlayerDialogComponent.prototype.updatePlayerForm = function () {
        this.playerForm.reset({
            name: this.data.player.name ? this.data.player.name : '',
            deck: this.data.player.deck ? this.data.player.deck : '',
            wins: this.data.player.wins,
            losses: this.data.player.losses,
            draws: this.data.player.draws
        });
    };
    PlayerDialogComponent.prototype.savePlayer = function () {
        this.data.player.name = this.playerForm.value.name;
        this.data.player.deck = this.playerForm.value.deck;
        this.data.player.wins = this.playerForm.value.wins;
        this.data.player.losses = this.playerForm.value.losses;
        this.data.player.draws = this.playerForm.value.draws;
    };
    PlayerDialogComponent.prototype.onNoClick = function () {
        this.data = null;
        this.dialogRef.close();
    };
    PlayerDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-player-dialog',
            templateUrl: './player-dialog.component.html',
            styleUrls: ['./player-dialog.component.css']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, forms_1.FormBuilder])
    ], PlayerDialogComponent);
    return PlayerDialogComponent;
}());
exports.PlayerDialogComponent = PlayerDialogComponent;
//# sourceMappingURL=player-dialog.component.js.map