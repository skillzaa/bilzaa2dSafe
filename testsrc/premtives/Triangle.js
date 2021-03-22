"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

exports["default"] = class Triangle extends BasePrimtive {
    constructor() {
        super("triangle");
    }
    draw() {
        this.metal.drawTriangle(this.attributes.getProperty("x"), this.attributes.getProperty("y"), this.attributes.getProperty("width"), this.attributes.getProperty("height"), this.attributes.getProperty("fillStyle"));
        //this.metal.drawCircle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("radius"));    
    }
}