import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default abstract class Animation implements IBaseAnimation {
    basicAnimationData: IbasicAnimationData;
    readOnlyElementData: string[] | [];
    argsForAlgo: {};
    lastExecutionTime: number;
    store: {};
    fps: number;
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementData?: string[] | [], argsForAlgo?: {});
    animate(currentSecond: number): object[];
}
//# sourceMappingURL=Animation.d.ts.map