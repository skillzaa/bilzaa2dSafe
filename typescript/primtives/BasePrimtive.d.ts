import Metal from "../metal/Metal.js";
import ArrayOfObjects from "../single/ArrayOfObjects.js";
import Animations from "../fasades/Animations.js";
import IBasePrimtives from "../interfaces/IBasePrimitive.js";
export default class BasePrimtive implements IBasePrimtives {
    attributes: ArrayOfObjects;
    protected animations: Animations;
    protected metal: Metal;
    clearCanvasFlag: boolean;
    constructor(name?: string);
    setNextFrame(currentSecond: number): boolean;
    draw(): void;
    private clearCanvas;
}
