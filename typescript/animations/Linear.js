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
var Animation_js_1 = require("./Animation.js");
var Linear = /** @class */ (function (_super) {
    __extends(Linear, _super);
    function Linear(aniData, argsForAlgo) {
        if (argsForAlgo === void 0) { argsForAlgo = {}; }
        return _super.call(this, aniData, argsForAlgo) || this;
    }
    /**very strange finding i do not need attributeToAnimateData in linear-- its value has no effect on our calculations. all we need to do is to calc deltaPerSecond and then multiply it to the currentSecond and then add this to the "from" value. so if  from is 100 and deltaPerSecond is 2 and current second is 2.22 ===> 2.22 * 2 = 4.44 + from ie 100 answer = 104.44
     * YES but since its there so lets just check it for error checking ie it should not exceed ahead of its given value to be low
     *
      */
    Linear.prototype.animate = function (attributeToAnimateData, currentSecond, readOnlyElementAttr) {
        //------if the value is above the "to" return unchanged
        // if(attributeToAnimateData >= this.argsForAlgo.to)
        // {return attributeToAnimateData;}
        //------if the time is not relevant return unchanged
        if (currentSecond < this.fromSecond || currentSecond > this.toSecond) {
            return attributeToAnimateData;
        }
        //---------also no need for delata per frame------------
        //const deltaPerFrame = this.deltaPerFrame();   
        //**Technique -- 1 :: the problem is that the frame rate can change and the speed will not be according to time-- remote machines will not be synchronozied */
        //   //here its just ++ wo time, note the +=  
        //attributeToAnimateData.value += deltaPerFrame ; 
        //now am using current second--am not using delta per frame!!!!
        var deltaPerSecond = this.deltaPerSecond();
        /**there is an error in the fol equa-- ie instead of currentSecond I should * it with current-time-difference-- this is causing a large jump in the begining */
        //attributeToAnimateData = (this.argsForAlgo.from + (deltaPerSecond * currentSecond)).toFixed(2);
        var currentTimeDifference = this.currentTimeDifference(currentSecond);
        attributeToAnimateData = (deltaPerSecond * currentTimeDifference) + this.fromSecond; // no need for decimal since they r pixels
        return Number(attributeToAnimateData);
        //--------------------------------
    };
    //-------------------------------------------------------------    
    Linear.prototype.deltaPerFrame = function () {
        var deltaPerSecond = this.deltaPerSecond();
        var deltaPerFrame = (deltaPerSecond / this.fps);
        return deltaPerFrame.toFixed(2);
    };
    /**this needs   TO BE TOfIXED(3) SINCE WE ARE COUNTING MILLISECONDS.*/
    Linear.prototype.deltaPerSecond = function () {
        var timeDiff = (this.toSecond - this.fromSecond);
        var totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
        var deltaPerSecond = totalValueDiff / timeDiff;
        return deltaPerSecond.toFixed(2);
    };
    Linear.prototype.currentTimeDifference = function (currentSecond) {
        var currentTimeDifference = (currentSecond - this.fromSecond).toFixed(2);
        return Number(currentTimeDifference);
    };
    return Linear;
}(Animation_js_1["default"]));
exports["default"] = Linear;
