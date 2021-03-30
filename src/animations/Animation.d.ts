import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default class Animation implements IBaseAnimation {
    basicAnimationData: IbasicAnimationData;
    readOnlyElementData: string[] | [];
    argsForAlgo: {};
    lastExecutionTime: number;
    store: {};
    fps: number;
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementData?: string[] | [], argsForAlgo?: {});
    animate(currentSecond: number): [];
}
//# sourceMappingURL=Animation.d.ts.map