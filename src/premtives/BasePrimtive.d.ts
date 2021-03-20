import Metal from "../metal/Metal.js";
export default class BasePrimtive extends Metal {
    constructor(name: any, attribData: any);
    setNextFrame(currentSecond: any): boolean;
    draw(): void;
    /**every element atleast has 2 componenets .// a border and the shape. we can keep their implementation chaging and adding HOOKS*/
    drawBorder(): void;
    drawShape(): void;
}
//# sourceMappingURL=BasePrimtive.d.ts.map