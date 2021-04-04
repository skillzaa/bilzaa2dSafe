export default class Animation {
    constructor(aniData, argsForAlgo = {}) {
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
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        return true;
    }
}
