"use strict";
var SingleVariableBaseAnimation = require("../animations/SingleVariableBaseAnimation.js")["default"];

exports["default"] = class Animations {
    constructor() {
        this.data = [];
    }
    add(compulsary, dataFromElement = [], argsForAlgo = {}, future = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo, future);
        this.data.push(aniSeq);
        return true;
    }
}