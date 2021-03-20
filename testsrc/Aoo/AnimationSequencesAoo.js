"use strict";
var SingleVariableBaseAnimation = require("../animations/SingleVariableBaseAnimation.js")["default"];

var AooBase = require("./AooBase.js")["default"];

exports["default"] = class animationSequencesAoo extends AooBase {
    constructor() {
        super(); //the data array is in baseclass
    }
    add(compulsary, dataFromElement = [], argsForAlgo = {}, future = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo, future);
        this.data.push(aniSeq);
        return true;
    }
}