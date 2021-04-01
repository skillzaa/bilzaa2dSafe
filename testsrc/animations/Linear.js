"use strict";
var Animation = require("./Animation.js")["default"];

exports["default"] = class Linear extends Animation {
    constructor(basicAnimationData, readOnlyElementAttrNames = [], argsForAlgo = {}) {
        super(basicAnimationData, readOnlyElementAttrNames, argsForAlgo);
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementAttr) {
        const timeDiff = (this.toSecond - this.fromSecond);
        const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
        const deltaPerSecond = totalValueDiff / timeDiff;
        const deltaPerFrame = deltaPerSecond / this.fps;
        //   //here its just ++ wo time, note the +=  
        //attributeToAnimateData.value += deltaPerFrame ; 
        //now am using current second
        attributeToAnimateData = (this.argsForAlgo.from + (deltaPerSecond * currentSecond)).toFixed(2);
        return attributeToAnimateData;
        //--------------------------------
    }
}