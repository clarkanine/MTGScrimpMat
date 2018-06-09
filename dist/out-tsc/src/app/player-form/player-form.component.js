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
var forms_1 = require("@angular/forms");
var player_service_service_1 = require("../player-service.service");
var FileSaver_1 = require("file-saver/FileSaver");
var PlayerFormComponent = /** @class */ (function () {
    function PlayerFormComponent(fb, playerService) {
        this.fb = fb;
        this.playerService = playerService;
    }
    PlayerFormComponent.prototype.ngOnChanges = function () {
        if (this.playerForm)
            this.updatePlayerForm();
    };
    PlayerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getData().subscribe(function (data) { return _this.players = data; });
        this.playerForm = this.fb.group({
            name: '',
            deck: '',
            life: 20,
            poison: 0
        });
        this.playerForm.valueChanges.subscribe(console.log);
    };
    PlayerFormComponent.prototype.updatePlayerForm = function () {
        this.playerForm.reset({
            name: this.selectedPlayer.name,
            deck: this.selectedPlayer.deck,
            life: 20,
            poison: 0
        });
    };
    PlayerFormComponent.prototype.saveValues = function () {
        if (!this.selectedPlayer)
            return;
        this.saveOneValue(this.playerForm.value.name ? this.selectedPlayer.name : 'Name', 'name');
        this.saveOneValue(this.playerForm.value.deck ? this.selectedPlayer.deck : 'Deck', 'deck');
        this.saveOneValue(this.playerForm.value.life + '', 'life');
        this.saveOneValue(this.playerForm.value.poison + '', 'poison');
        this.saveOneValue(this.getRecord(), 'record');
    };
    PlayerFormComponent.prototype.saveOneValue = function (value, field) {
        var str = JSON.stringify(value);
        while (str.indexOf('"') >= 0)
            str = str.replace('"', '');
        var blob = new Blob([str], { type: 'text/plain' });
        FileSaver_1.saveAs(blob, this.filePrefix + field + '.txt');
    };
    PlayerFormComponent.prototype.getRecord = function () {
        var str = this.selectedPlayer.wins + '-' + this.selectedPlayer.losses;
        if (this.selectedPlayer.draws > 0)
            str += this.selectedPlayer.draws;
        return str;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlayerFormComponent.prototype, "filePrefix", void 0);
    PlayerFormComponent = __decorate([
        core_1.Component({
            selector: 'app-player-form',
            templateUrl: './player-form.component.html',
            styleUrls: ['./player-form.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, player_service_service_1.PlayerServiceService])
    ], PlayerFormComponent);
    return PlayerFormComponent;
}());
exports.PlayerFormComponent = PlayerFormComponent;
//# sourceMappingURL=player-form.component.js.map