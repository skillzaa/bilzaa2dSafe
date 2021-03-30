import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default abstract class Animation implements IBaseAnimation {
    attributeToAnimate: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementData: string[] | [];
    argsForAlgo: {};
    lastExecutionTime: number;
    store: {};
    fps: number;
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementData?: string[] | [], argsForAlgo?: {});
    animate(attributeToAnimateData: {}, currentSecond: number, readOnlyElementData?: {}): object[];
}
//# sourceMappingURL=Animation.d.ts.map