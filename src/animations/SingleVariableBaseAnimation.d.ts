import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import Icompulsary from "../interfaces/Icompulsary.js";
import Ifuture from "../interfaces/Ifuture.js";
export default class SingleVariableBaseAnimation implements IBaseAnimation {
    attribute: string;
    fromSecond: number;
    toSecond: number;
    algo: string;
    dataRequired: string[] | [];
    future: {};
    argsForAlgo: {};
    fps: number;
    algorithms: Algorithms;
    constructor(compulsary: Icompulsary, dataRequired: string[] | [] | undefined, argsForAlgo: {} | undefined, future: Ifuture);
    animate(animationData: [], currentSecond: number): any;
}
//# sourceMappingURL=SingleVariableBaseAnimation.d.ts.map