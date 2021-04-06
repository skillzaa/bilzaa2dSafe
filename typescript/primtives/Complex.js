"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BasePrimtive_js_1 = require("./BasePrimtive.js");
var Circle_js_1 = require("./Circle.js");
var Complex = /** @class */ (function (_super) {
    __extends(Complex, _super);
    function Complex() {
        var _this = _super.call(this, "complex") || this;
        _this.circle = new Circle_js_1["default"]();
        return _this;
    }
    Complex.prototype.draw = function () {
        this.circle.attributes.setProperty("x", 600);
        this.circle.attributes.setProperty("y", 200);
        this.circle.attributes.setProperty("radius", 150);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 100);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 50);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 25);
        this.circle.draw();
    };
    return Complex;
}(BasePrimtive_js_1["default"]));
exports["default"] = Complex;
