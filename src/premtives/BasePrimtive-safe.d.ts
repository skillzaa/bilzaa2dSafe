import Metal from "../metal/Metal.js";
export default class BasePrimtive extends Metal {
    constructor(name?: string, type?: string);
    fillAttributes(): void;
    setNextFrame(currentSecond: any): boolean;
    draw(): void;
    /**every element atleast has 2 componenets .// a border and the shape. we can keep their implementation chaging and adding HOOKS*/
    drawBorder(): void;
    drawShape(): void;
    clearCanvas(): void;
    getBD(name: any): any;
    getBDVal(name: any): any;
    setBD(name: any, value: any): any;
}
//# sourceMappingURL=BasePrimtive-safe.d.ts.map