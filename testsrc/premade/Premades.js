"use strict";
var leftCurtain = require("./leftCurtain.js")["default"];

exports["default"] = class Premades {
    constructor() {
    }
    get(name, element, args = {}) {
        switch (name) {
            case "leftCurtain":
                element = leftCurtain(element, args);
                break;
            default:
                break;
        }
        return element;
    }
}