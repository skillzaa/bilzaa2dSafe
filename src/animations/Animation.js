export default class Animation {
    constructor(basicAnimationData, readOnlyElementData = [], argsForAlgo = {}) {
        this.basicAnimationData = basicAnimationData;
        this.readOnlyElementData = readOnlyElementData;
        this.argsForAlgo = argsForAlgo;
        this.fps = 60; // this has to be settled
        this.lastExecutionTime = 0;
        this.store = {};
    }
    animate(currentSecond) {
        return [];
    }
}
