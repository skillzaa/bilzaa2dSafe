import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js";
import AooBase from "./AooBase.js";
export default class animationSequencesAoo extends AooBase {
    constructor() {
        super(); //the data array is in baseclass
    }
    add(compulsary, dataFromElement = [], argsForAlgo = {}, future = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo, future);
        this.data.push(aniSeq);
        return true;
    }
}
