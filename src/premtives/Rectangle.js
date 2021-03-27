import BasePrimtive from "./BasePrimtive.js";
export default class Rectangle extends BasePrimtive {
    constructor() {
        super("rectangle");
    }
    draw() {
        //this.metal.drawRectangle(this.attributes);       
        //--------------------------------------------
        this.metal.saveCtx();
        this.metal.getCtxValues(this.attributes);
        if (this.attributes.getProperty("rps") > 0) {
            this.metal.translateCanvas(this.attributes);
            this.metal.rotateCanvas(this.attributes);
            this.metal.unTranslateCanvas(this.attributes);
        }
        this.metal.drawFilledRectangle(this.attributes);
        //------------------------------
        this.metal.restoreCtx();
        //--------------------------------------------
    }
}
