import BasePrimtive from "./BasePrimtive.js";
export default class Rectangle extends BasePrimtive {
    constructor() {
        super("rectangle");
    }
    draw() {
        this.metal.drawRectangle(this.attributes);
    }
}
