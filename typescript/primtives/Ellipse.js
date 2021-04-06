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
var Ellipse = /** @class */ (function (_super) {
    __extends(Ellipse, _super);
    function Ellipse() {
        var _this = _super.call(this, "Ellipse") || this;
        _this.attributes.add({ name: "radius", value: 100, comments: "" });
        return _this;
    }
    Ellipse.prototype.draw = function () {
        this.metal.drawEllipse(this.attributes);
    };
    return Ellipse;
}(BasePrimtive_js_1["default"]));
exports["default"] = Ellipse;
