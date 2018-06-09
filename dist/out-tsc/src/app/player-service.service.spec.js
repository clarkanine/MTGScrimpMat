"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var player_service_service_1 = require("./player-service.service");
describe('PlayerServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [player_service_service_1.PlayerServiceService]
        });
    });
    it('should be created', testing_1.inject([player_service_service_1.PlayerServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=player-service.service.spec.js.map