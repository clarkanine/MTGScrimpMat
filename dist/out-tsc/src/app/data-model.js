"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        this._id = null;
        this.id = -1;
        this.name = 'John';
        this.deck = '';
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.matches = [];
    }
    return Player;
}());
exports.Player = Player;
var Match = /** @class */ (function () {
    function Match() {
        this.id = -1;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.myDeck = '';
        this.theirDeck = '';
        this.opponentId = -1;
    }
    return Match;
}());
exports.Match = Match;
var Card = /** @class */ (function () {
    function Card() {
        this.name = '';
        this.imageUrl = '';
        this.multiverseid = 0;
    }
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=data-model.js.map