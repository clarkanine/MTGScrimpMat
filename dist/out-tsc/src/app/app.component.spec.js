"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
var my_nav_component_1 = require("./my-nav/my-nav.component");
var current_game_component_1 = require("./current-game/current-game.component");
var player_list_component_1 = require("./player-list/player-list.component");
var player_dialog_component_1 = require("./player-dialog/player-dialog.component");
var player_form_component_1 = require("./player-form/player-form.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent,
                my_nav_component_1.MyNavComponent,
                current_game_component_1.CurrentGameComponent,
                player_dialog_component_1.PlayerDialogComponent,
                player_form_component_1.PlayerFormComponent,
                player_list_component_1.PlayerListComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to MtgScrimpMat!');
    }));
});
//# sourceMappingURL=app.component.spec.js.map