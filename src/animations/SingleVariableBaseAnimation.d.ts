import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default class SingleVariableBaseAnimation implements IBaseAnimation {
    basicAnimationData: IbasicAnimationData;
    readOnlyElementData: string[] | [];
    argsForAlgo: {};
    fps: number;
    algorithms: Algorithms;
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementData?: string[] | [], argsForAlgo?: {});
    animate(attributeToAnimate: [], readOnlyElementData: [], currentSecond: number): any;
}
//# sourceMappingURL=SingleVariableBaseAnimation.d.ts.map