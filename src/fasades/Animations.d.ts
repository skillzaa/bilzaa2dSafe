import Linear from "../animations/Linear.js";
import IaniData from "../interfaces/IaniData.js";
export default class Animations {
    data: object[] | [];
    constructor();
    linear(aniData: IaniData, argsForAlgo?: {}): boolean;
    moveHorizontal(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    moveVerticle(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    moveDiagonal(fromSecond?: number, toSecond?: number, from?: number, to?: number): boolean;
    widen(fromSecond: number, toSecond: number, from: number, to: number): boolean;
    heighten(fromSecond: number, toSecond: number, from: number, to: number): boolean;
    scale(fromSecond: number, toSecond: number, fromWidth: number, toWidth: number, fromHeight: number, toHeight: number): boolean;
    rotate(fromSecond: number, toSecond: number, from: number, to: number): Linear;
}
