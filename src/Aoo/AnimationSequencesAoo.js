import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js";
import ArrayOfObjects from "./ArrayOfObjects.js";
export default class AnimationSequencesAoo extends ArrayOfObjects {
    constructor() {
        super(); //the data array is in baseclass
    }
    add(compulsary, dataFromElement = [], argsForAlgo = {}, future = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo, future);
        this.data.push(aniSeq);
        return true;
    }
}
