import Metal from "../metal/Metal.js";
import ArrayOfObjects from "../Aoo/ArrayOfObjects.js";
import Animations from "../animations/Animations.js";
export default class BasePrimtive extends Metal {
    protected attributes: ArrayOfObjects;
    name: string;
    protected animations: Animations;
    protected metal: Metal;
    constructor(name?: string);
    setNextFrame(currentSecond: number): boolean;
    draw(): void;
    drawBorder(): void;
    drawShape(): void;
}
//# sourceMappingURL=BasePrimtive.d.ts.map