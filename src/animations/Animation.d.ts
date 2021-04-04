import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import IaniData from "../interfaces/IaniData.js";
export default abstract class Animation implements IBaseAnimation {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    lastExecutionTime: number;
    store: {};
    fps: number;
    constructor(aniData: IaniData, argsForAlgo?: {});
    animate(attributeToAnimateData: any, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
}
