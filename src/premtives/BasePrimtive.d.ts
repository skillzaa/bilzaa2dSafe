import Metal from "../metal/Metal.js";
import ArrayOfObjects from "../single/ArrayOfObjects.js";
import Animations from "../fasades/Animations.js";
export default class BasePrimtive extends Metal {
    protected attributes: ArrayOfObjects;
    name: string;
    protected animations: Animations;
    protected metal: Metal;
    clearCanvasFlag: boolean;
    constructor(name?: string);
    setNextFrame(currentSecond: number): boolean;
    draw(): void;
}
//# sourceMappingURL=BasePrimtive.d.ts.map