"use strict";
exports.__esModule = true;
var Linear_js_1 = require("../animations/Linear.js");
var Animations = /** @class */ (function () {
    function Animations() {
        this.data = [];
    }
    Animations.prototype.linear = function (aniData, argsForAlgo) {
        if (argsForAlgo === void 0) { argsForAlgo = {}; }
        var l = new Linear_js_1["default"](aniData, argsForAlgo);
        this.data.push(l);
        return true;
    };
    // //---------------------------------
    Animations.prototype.moveHorizontal = function (fromSecond, toSecond, from, to) {
        if (fromSecond === void 0) { fromSecond = 1; }
        if (toSecond === void 0) { toSecond = 5; }
        if (from === void 0) { from = 1; }
        if (to === void 0) { to = 100; }
        var l = new Linear_js_1["default"]({ attributeToAnimateName: "x", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(l);
        return true;
    };
    // //---------------------------------
    Animations.prototype.moveVerticle = function (fromSecond, toSecond, from, to) {
        if (fromSecond === void 0) { fromSecond = 1; }
        if (toSecond === void 0) { toSecond = 5; }
        if (from === void 0) { from = 1; }
        if (to === void 0) { to = 100; }
        var l = new Linear_js_1["default"]({ attributeToAnimateName: "y", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(l);
        return true;
    };
    // //---------------------------------
    Animations.prototype.moveDiagonal = function (fromSecond, toSecond, from, to) {
        if (fromSecond === void 0) { fromSecond = 1; }
        if (toSecond === void 0) { toSecond = 5; }
        if (from === void 0) { from = 1; }
        if (to === void 0) { to = 100; }
        var lX = new Linear_js_1["default"]({ attributeToAnimateName: "x", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(lX);
        var ly = new Linear_js_1["default"]({ attributeToAnimateName: "y", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(ly);
        return true;
    };
    // appear(fromSecond,toSecond){
    //     const l = new Linear(
    //         {attributeToAnimateName: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:0, to:1});
    //     this.data.push(l);       
    // }
    // disAappear(fromSecond,toSecond){
    //     const l = new Linear(
    //         {attributeToAnimateName: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:1, to:0});
    //     this.data.push(l);       
    // }
    Animations.prototype.widen = function (fromSecond, toSecond, from, to) {
        var l = new Linear_js_1["default"]({ attributeToAnimateName: "width", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(l);
        return true;
    };
    Animations.prototype.heighten = function (fromSecond, toSecond, from, to) {
        var l = new Linear_js_1["default"]({ attributeToAnimateName: "height", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(l);
        return true;
    };
    Animations.prototype.scale = function (fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) {
        var w = new Linear_js_1["default"]({ attributeToAnimateName: "width", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: fromWidth, to: toWidth });
        this.data.push(w);
        //----------------------------
        var h = new Linear_js_1["default"]({ attributeToAnimateName: "height", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: fromHeight, to: toHeight });
        this.data.push(h);
        return true;
    };
    Animations.prototype.rotate = function (fromSecond, toSecond, from, to) {
        var w = new Linear_js_1["default"]({ attributeToAnimateName: "rotateAngle", fromSecond: fromSecond, toSecond: toSecond, readOnlyElementAttrNames: [] }, { from: from, to: to });
        this.data.push(w);
        return w;
    };
    return Animations;
}());
exports["default"] = Animations;
