"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var card_service_1 = require("./card.service");
describe('CardService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [card_service_1.CardService]
        });
    });
    it('should be created', testing_1.inject([card_service_1.CardService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=card.service.spec.js.map