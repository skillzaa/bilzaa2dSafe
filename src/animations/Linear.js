import Animation from "./Animation.js";
export default class Linear extends Animation {
    constructor(basicAnimationData, readOnlyElementData = [], argsForAlgo = {}) {
        super(basicAnimationData, readOnlyElementData, argsForAlgo);
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData) {
        const timeDiff = (this.toSecond - this.fromSecond);
        const totalValueDiff = (this.argsForAlgo.to - this.argsForAlgo.from);
        const deltaPerSecond = totalValueDiff / timeDiff;
        const deltaPerFrame = deltaPerSecond / this.fps;
        //   //here its just ++ wo time, note the +=  
        //attributeToAnimateData.value += deltaPerFrame ; 
        //now am using current second
        attributeToAnimateData.value = (this.argsForAlgo.from + (deltaPerSecond * currentSecond));
        return attributeToAnimateData;
        //--------------------------------
    }
}
