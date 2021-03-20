"use strict";
var SingleVariableBaseAnimation = require("./SingleVariableBaseAnimation.js")["default"];

exports["default"] = class Animations {
    constructor() {
    }
    addNew(incomming = {}) {
        return new SingleVariableBaseAnimation(incomming);
    }
}