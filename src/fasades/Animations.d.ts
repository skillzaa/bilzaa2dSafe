import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";
export default class Animations {
    data: object[] | [];
    constructor();
    linear(basicAnimationData: IbasicAnimationData, dataFromElement?: never[], argsForAlgo?: {}): boolean;
    moveHorizontal(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    moveVerticle(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    moveDiagonal(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    widen(fromSecond: any, toSecond: any, from: any, to: any): boolean;
    heighten(fromSecond: any, toSecond: any, from: any, to: any): boolean;
    scale(fromSecond: any, toSecond: any, fromWidth: any, toWidth: any, fromHeight: any, toHeight: any): boolean;
    rotate(fromSecond: any, toSecond: any, from: any, to: any): boolean;
}
//# sourceMappingURL=Animations.d.ts.map