import BasePrimtive from "./BasePrimtive.js";
export default class Text extends BasePrimtive {
    constructor() {
        super("text");
        this.attributes.add({ name: "title", value: "Text" });
    }
    draw() {
        this.metal.drawText(this.attributes);
    }
}
//# sourceMappingURL=Text.js.map