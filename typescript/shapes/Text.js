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
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super.call(this, "text") || this;
        _this.attributes.add({ name: "title", value: "Text" });
        return _this;
    }
    Text.prototype.draw = function () {
        this.metal.drawText(this.attributes);
    };
    return Text;
}(BasePrimtive_js_1["default"]));
exports["default"] = Text;
