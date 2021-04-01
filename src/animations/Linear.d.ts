import Animation from "./Animation.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default class Linear extends Animation {
    constructor(basicAnimationData: IbasicAnimationData, readOnlyElementAttrNames?: string[] | [], argsForAlgo?: {});
    animate(attributeToAnimateData: any, currentSecond: number, readOnlyElementAttr: {}): object[];
}
//# sourceMappingURL=Linear.d.ts.map