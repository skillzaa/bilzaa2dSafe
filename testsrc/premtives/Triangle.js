"use strict";
var BasePrimtive = require("./BasePrimtive.js")["default"];

exports["default"] = class Triangle extends BasePrimtive {
    constructor() {
        super("triangle");
    }
    draw() {
        this.metal.drawTriangle(this.attributes);
    }
}