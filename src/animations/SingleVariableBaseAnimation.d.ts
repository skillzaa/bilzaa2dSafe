import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import Icompulsary from "../interfaces/Icompulsary.js";
export default class SingleVariableBaseAnimation implements IBaseAnimation {
    attribute: string;
    fromSecond: number;
    toSecond: number;
    algo: string;
    lastExecutionTime: number;
    dataRequiredFromElement: string[] | [];
    argsForAlgo: {};
    fps: number;
    algorithms: Algorithms;
    constructor(compulsary: Icompulsary, dataRequiredFromElement?: string[] | [], argsForAlgo?: {});
    animate(animationData: [], currentSecond: number): any;
}
//# sourceMappingURL=SingleVariableBaseAnimation.d.ts.map