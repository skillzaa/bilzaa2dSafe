"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

exports["default"] = class Rectangle extends BasePrimtive {
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
        /////////////////////////////////////////////
        if ((this.attributes.getProperty("drawBorder") === true) || (this.attributes.getProperty("transparent") === false)) {
            this.metal.drawRectangleBorder(this.attributes);
        }
        //--------------draw rect
        if ((this.attributes.getProperty("transparent") === false)) {
            this.metal.drawRectangle(this.attributes);
        }
        //--------------draw rect
        if ((this.attributes.getProperty("title") != "")) {
            this.metal.drawRectangleTitle(this.attributes);
        }
        //------------------------------
        this.metal.restoreCtx();
        //--------------------------------------------
    }
}