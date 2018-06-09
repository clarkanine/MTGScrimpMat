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
var http_1 = require("@angular/common/http");
var data_model_1 = require("../data-model");
var CurrentGameComponent = /** @class */ (function () {
    function CurrentGameComponent(http) {
        this.http = http;
    }
    CurrentGameComponent.prototype.ngOnInit = function () {
        this.players = [new data_model_1.Player(), new data_model_1.Player()];
    };
    CurrentGameComponent = __decorate([
        core_1.Component({
            selector: 'app-current-game',
            templateUrl: './current-game.component.html',
            styleUrls: ['./current-game.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CurrentGameComponent);
    return CurrentGameComponent;
}());
exports.CurrentGameComponent = CurrentGameComponent;
//# sourceMappingURL=current-game.component.js.map