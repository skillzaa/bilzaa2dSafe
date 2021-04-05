import BasePrimtive from "./BasePrimtive.js";
export default class Ellipse extends BasePrimtive {
    constructor() {
        super("Ellipse");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        this.metal.drawEllipse(this.attributes);
    }
}
//# sourceMappingURL=Ellipse.js.map