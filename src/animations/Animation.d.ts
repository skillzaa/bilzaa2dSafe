import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default abstract class Animation implements IBaseAnimation {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    lastExecutionTime: number;
    store: {};
    fps: number;
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementAttrNames?: string[] | [], argsForAlgo?: {});
    animate(attributeToAnimateData: any, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
}
