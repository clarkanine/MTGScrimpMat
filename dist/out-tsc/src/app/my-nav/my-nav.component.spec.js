"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var my_nav_component_1 = require("./my-nav.component");
describe('MyNavComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.fakeAsync(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [my_nav_component_1.MyNavComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(my_nav_component_1.MyNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should compile', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-nav.component.spec.js.map