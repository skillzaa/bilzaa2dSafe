"use strict";
var SingleVariableBaseAnimation = require("../animations/SingleVariableBaseAnimation.js")["default"];

exports["default"] = class Animations {
    constructor() {
        this.data = [];
    }
    custom(compulsary, dataFromElement = [], argsForAlgo = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo);
        this.data.push(aniSeq);
        return true;
    }
    //---------------------------------
    moveHorizontal(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const ani = new SingleVariableBaseAnimation({ attribute: "x", algo: "linear", fromSecond: fromSecond, toSecond: toSecond }, ["x"], { attribute: "x", from: from, to: to });
        this.data.push(ani);
        return true;
    }
    //---------------------------------
    moveVerticle(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const ani = new SingleVariableBaseAnimation({ attribute: "y", algo: "linear", fromSecond: fromSecond, toSecond: toSecond }, ["y"], { attribute: "y", from: from, to: to });
        this.data.push(ani);
        return true;
    }
    //---------------------------------
    //---------------------------------
    moveDiagonal(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const aniX = new SingleVariableBaseAnimation({ attribute: "x", algo: "linear", fromSecond: fromSecond, toSecond: toSecond }, ["x"], { attribute: "x", from: from, to: to });
        this.data.push(aniX);
        const aniY = new SingleVariableBaseAnimation({ attribute: "y", algo: "linear", fromSecond: fromSecond, toSecond: toSecond }, ["y"], { attribute: "y", from: from, to: to });
        this.data.push(aniY);
        return true;
    }
}