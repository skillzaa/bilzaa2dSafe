import BasePrimtive from "./BasePrimtive.js";
export default class Circle extends BasePrimtive {
    constructor() {
        super("circle");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        this.metal.drawEllipse(this.attributes);
    }
}
//# sourceMappingURL=Circle.js.map