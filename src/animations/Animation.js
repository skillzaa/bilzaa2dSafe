export default class Animation {
    constructor(basicAnimationData, readOnlyElementAttrNames = [], argsForAlgo = {}) {
        //this.basicAnimationData = basicAnimationData;
        this.attributeToAnimate = basicAnimationData.attributeToAnimate; //must 
        this.fromSecond = basicAnimationData.fromSecond; //must for every animation
        this.toSecond = basicAnimationData.toSecond; //must for every animation
        //--------------------------------------------------------------------
        this.readOnlyElementAttrNames = readOnlyElementAttrNames;
        this.argsForAlgo = argsForAlgo;
        this.fps = 60; // this has to be settled
        this.lastExecutionTime = 0;
        this.store = {};
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        return [];
    }
}
