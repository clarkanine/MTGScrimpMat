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
var card_service_1 = require("../card.service");
var data_model_1 = require("../data-model");
var FileSaver_1 = require("file-saver/FileSaver");
var CardFinderComponent = /** @class */ (function () {
    function CardFinderComponent(cardService) {
        this.cardService = cardService;
        this.oraclePrefix = "http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=";
        this.displayCardUrl = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=0&type=card";
        this.cardName = "";
    }
    CardFinderComponent.prototype.ngOnInit = function () {
    };
    CardFinderComponent.prototype.searchForCard = function () {
        var _this = this;
        this.cardService.searchForCard(this.cardName).subscribe(function (response) { return _this.cleanupCardList(response.cards); }); //this.cardList = response.cards);
    };
    CardFinderComponent.prototype.cleanupCardList = function (response) {
        var _this = this;
        if (!response) {
            return;
        }
        this.cardList = new Array();
        response.forEach(function (element) {
            var card = new data_model_1.Card();
            if (element.name && element.imageUrl) {
                card.name = element.name;
                card.imageUrl = element.imageUrl;
                card.multiverseid = element.multiverseid;
                _this.cardList.push(card);
            }
        });
        console.log(this.cardList);
    };
    CardFinderComponent.prototype.setDisplayCardUrl = function (newUrl) {
        this.displayCardUrl = newUrl;
    };
    CardFinderComponent.prototype.downloadCardImage = function () {
        var _this = this;
        this.cardService.downloadCardImage(this.displayCardUrl).subscribe(function (data) { return _this.saveCard(data); });
    };
    CardFinderComponent.prototype.saveCard = function (cardData) {
        var blob = new Blob([cardData], { type: 'image/jpeg' });
        FileSaver_1.saveAs(blob, 'card');
        // saveAs(blob[0], 'card');
    };
    CardFinderComponent.prototype.openOracle = function (multiverseid) {
        window.open(this.oraclePrefix + multiverseid, "_blank");
    };
    CardFinderComponent = __decorate([
        core_1.Component({
            selector: 'app-card-finder',
            templateUrl: './card-finder.component.html',
            styleUrls: ['./card-finder.component.css']
        }),
        __metadata("design:paramtypes", [card_service_1.CardService])
    ], CardFinderComponent);
    return CardFinderComponent;
}());
exports.CardFinderComponent = CardFinderComponent;
//# sourceMappingURL=card-finder.component.js.map