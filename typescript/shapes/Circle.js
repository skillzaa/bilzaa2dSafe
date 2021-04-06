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
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this, "circle") || this;
        _this.attributes.add({ name: "radius", value: 100, comments: "" });
        return _this;
    }
    Circle.prototype.draw = function () {
        this.metal.drawEllipse(this.attributes);
    };
    return Circle;
}(BasePrimtive_js_1["default"]));
exports["default"] = Circle;
