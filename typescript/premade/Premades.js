"use strict";
exports.__esModule = true;
var leftCurtain_js_1 = require("./leftCurtain.js");
var Premades = /** @class */ (function () {
    function Premades() {
    }
    Premades.prototype.get = function (name, element, args) {
        if (args === void 0) { args = {}; }
        switch (name) {
            case "leftCurtain":
                element = leftCurtain_js_1["default"](element, args);
                break;
            default:
                break;
        }
        return element;
    };
    return Premades;
}());
exports["default"] = Premades;
