"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var my_nav_component_1 = require("./my-nav/my-nav.component");
var layout_1 = require("@angular/cdk/layout");
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var current_game_component_1 = require("./current-game/current-game.component");
var player_list_component_1 = require("./player-list/player-list.component");
var player_form_component_1 = require("./player-form/player-form.component");
var player_service_service_1 = require("src/app/player-service.service");
var player_dialog_component_1 = require("./player-dialog/player-dialog.component");
var card_finder_component_1 = require("./card-finder/card-finder.component");
var card_service_1 = require("./card.service");
var help_component_1 = require("./help/help.component");
var appRoutes = [
    {
        path: 'current-game',
        component: current_game_component_1.CurrentGameComponent
    },
    {
        path: 'player-list',
        component: player_list_component_1.PlayerListComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                my_nav_component_1.MyNavComponent,
                current_game_component_1.CurrentGameComponent,
                player_list_component_1.PlayerListComponent,
                player_form_component_1.PlayerFormComponent,
                player_dialog_component_1.PlayerDialogComponent,
                card_finder_component_1.CardFinderComponent,
                help_component_1.HelpComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(appRoutes),
                layout_1.LayoutModule,
                material_1.MatToolbarModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatSelectModule,
                material_1.MatFormFieldModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                material_1.MatCardModule,
                material_1.MatDialogModule,
                http_1.HttpClientModule,
                material_1.MatGridListModule
            ],
            providers: [player_service_service_1.PlayerServiceService, card_service_1.CardService],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [player_dialog_component_1.PlayerDialogComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map