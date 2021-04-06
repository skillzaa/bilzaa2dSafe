"use strict";
exports.__esModule = true;
var Animation = /** @class */ (function () {
    function Animation(aniData, argsForAlgo) {
        if (argsForAlgo === void 0) { argsForAlgo = {}; }
        //this.aniData = aniData;
        this.attributeToAnimateName = aniData.attributeToAnimateName; //must 
        this.fromSecond = aniData.fromSecond; //must for every animation
        this.toSecond = aniData.toSecond; //must for every animation
        this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;
        //--------------------------------------------------------------------
        this.argsForAlgo = argsForAlgo;
        //--------------------------------------------------------------------
        this.fps = 60; // this has to be settled
        this.lastExecutionTime = 0;
        this.store = {};
    }
    Animation.prototype.animate = function (attributeToAnimateData, currentSecond, readOnlyElementData) {
        if (readOnlyElementData === void 0) { readOnlyElementData = {}; }
        return true;
    };
    return Animation;
}());
exports["default"] = Animation;
