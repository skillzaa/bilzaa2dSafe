"use strict";
var Algorithms = require("./algo/Algorithms.js")["default"];

exports["default"] = class SingleVariableBaseAnimation {
    constructor(compulsary, dataRequired = [], argsForAlgo = {}, future = {}) {
        //--------------------ALGO FASADE---------------      
        this.algorithms = new Algorithms();
        //--------------------COMPULSARY ITEMS---------------    
        this.valueName = compulsary.valueName;
        this.fromSecond = compulsary.fromSecond; //must for every animation
        this.toSecond = compulsary.toSecond; //must for every animation
        this.algo = this.algorithms.getAlgo(compulsary.algo);
        //-----------------------------------
        this.dataRequired = dataRequired;
        this.future = future;
        this.argsForAlgo = argsForAlgo;
        //-----------------------------------
        this.fps = 60;
    }
    animate(animationData, currentSecond) {
        const ret = this.algo(animationData, currentSecond);
        //    const ret = this[this.algo](animationData,currentSecond);
        return ret;
        // const retArray = this.algorithem(animationData,currentSecond);   
        // return retArray;
    }
}